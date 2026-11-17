"use client";

import { useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import type { FilterState } from "@/lib/filters";
import {
  INSTITUTION_TYPES,
  MONTHS,
  STUDY_LEVELS,
  TUITION_MAX,
  TUITION_MIN,
  TUITION_STEP,
  fields,
  provinces,
} from "@/lib/data";
import { RangeSlider } from "@/components/ui/RangeSlider";
import { controlClasses } from "@/components/ui/Field";
import { cn } from "@/lib/cn";

type Opt = { value: string; label: string; count?: number };

function Section({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  return (
    <details open={defaultOpen} className="group border-b border-line py-4 last:border-0">
      <summary className="flex cursor-pointer list-none items-center justify-between rounded-md text-sm font-bold text-ink [&::-webkit-details-marker]:hidden">
        {title}
        <ChevronDown aria-hidden="true" className="size-4 text-slate transition-transform group-open:rotate-180" />
      </summary>
      <div className="mt-3">{children}</div>
    </details>
  );
}

function CheckGroup({
  name,
  legend,
  options,
  selected,
  onChange,
  max = 6,
}: {
  name: string;
  legend: string;
  options: Opt[];
  selected: string[];
  onChange: (next: string[]) => void;
  max?: number;
}) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? options : options.slice(0, max);
  return (
    <fieldset>
      <legend className="sr-only">{legend}</legend>
      <ul className="space-y-1">
        {visible.map((o) => {
          const id = `f-${name}-${o.value}`;
          const checked = selected.includes(o.value);
          return (
            <li key={o.value}>
              <label htmlFor={id} className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg px-1 py-1.5 text-[0.95rem] hover:bg-mist sm:min-h-0 sm:text-sm">
                <input
                  id={id}
                  type="checkbox"
                  checked={checked}
                  onChange={() => onChange(checked ? selected.filter((s) => s !== o.value) : [...selected, o.value])}
                  className="size-4.5 shrink-0 accent-primary-600"
                />
                <span className="flex-1 text-ink">{o.label}</span>
                {o.count !== undefined && <span className="text-xs text-slate">{o.count}</span>}
              </label>
            </li>
          );
        })}
      </ul>
      {options.length > max && (
        <button type="button" onClick={() => setShowAll((v) => !v)} className="mt-2 text-sm font-semibold text-primary-700 hover:underline" aria-expanded={showAll}>
          {showAll ? "Show fewer" : `Show all ${options.length}`}
        </button>
      )}
    </fieldset>
  );
}

const cad = (n: number) => `$${(n / 1000).toFixed(0)}k`;

export function FilterPanel({
  filters,
  update,
  cityOptions,
  provinceCounts,
  searchLabel,
  idPrefix = "",
}: {
  filters: FilterState;
  update: (patch: Partial<FilterState>) => void;
  cityOptions: Opt[];
  provinceCounts: Record<string, number>;
  searchLabel: string;
  idPrefix?: string;
}) {
  // Text search updates the URL after a short pause, so typing stays smooth
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [q, setQ] = useState(filters.q);
  const onSearch = (value: string) => {
    setQ(value);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => update({ q: value }), 300);
  };

  const provinceOpts: Opt[] = provinces
    .map((p) => ({ value: p.slug, label: p.name, count: provinceCounts[p.slug] ?? 0 }))
    .sort((a, b) => (b.count ?? 0) - (a.count ?? 0) || a.label.localeCompare(b.label));

  return (
    <div>
      <div className="pb-4">
        <label htmlFor={`${idPrefix}filter-search`} className="mb-1.5 block text-sm font-bold text-ink">
          {searchLabel}
        </label>
        <div className="relative">
          <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate" />
          <input
            id={`${idPrefix}filter-search`}
            type="search"
            value={q}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="e.g. Winnipeg"
            className={cn(controlClasses, "pl-9")}
          />
        </div>
      </div>

      <div className="border-t border-line">
        <Section title="Province or territory">
          <CheckGroup name={`${idPrefix}province`} legend="Province or territory" options={provinceOpts} selected={filters.province} onChange={(province) => update({ province, city: [] })} />
        </Section>
        <Section title="City" defaultOpen={cityOptions.length <= 8}>
          {cityOptions.length ? (
            <CheckGroup name={`${idPrefix}city`} legend="City" options={cityOptions} selected={filters.city} onChange={(city) => update({ city })} />
          ) : (
            <p className="text-sm text-slate">No cities match the selected province.</p>
          )}
        </Section>
        <Section title="Institution type">
          <CheckGroup name={`${idPrefix}type`} legend="Institution type" options={INSTITUTION_TYPES.map((t) => ({ value: t, label: t }))} selected={filters.type} onChange={(type) => update({ type: type as FilterState["type"] })} />
        </Section>
        <Section title="Study level">
          <CheckGroup name={`${idPrefix}level`} legend="Study level" options={STUDY_LEVELS} selected={filters.level} onChange={(level) => update({ level: level as FilterState["level"] })} />
        </Section>
        <Section title="Field of study">
          <CheckGroup name={`${idPrefix}field`} legend="Field of study" options={fields.map((f) => ({ value: f.slug, label: f.label }))} selected={filters.field} onChange={(field) => update({ field })} />
        </Section>
        <Section title="Annual tuition (CAD)">
          <RangeSlider
            id={`${idPrefix}filter-tuition`}
            label="Annual tuition in Canadian dollars"
            min={TUITION_MIN}
            max={TUITION_MAX}
            step={TUITION_STEP}
            value={[filters.tuitionMin, filters.tuitionMax]}
            onChange={([tuitionMin, tuitionMax]) => update({ tuitionMin, tuitionMax })}
            format={cad}
          />
          <p className="mt-3 text-xs text-slate">Results with tuition still to be confirmed (TBC) are always shown.</p>
        </Section>
        <Section title="Intake month">
          <CheckGroup
            name={`${idPrefix}intake`}
            legend="Intake month"
            options={MONTHS.filter((m) => m.season).map((m) => ({ value: m.value, label: `${m.label} (${m.season})` }))}
            selected={filters.intake}
            onChange={(intake) => update({ intake: intake as FilterState["intake"] })}
          />
        </Section>
      </div>
    </div>
  );
}
