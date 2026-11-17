"use client";

import { SlidersHorizontal, X } from "lucide-react";
import type { FilterState, SortKey } from "@/lib/filters";
import { activeFilterCount } from "@/lib/filters";
import { INSTITUTION_TYPES, TUITION_MAX, TUITION_MIN, fieldLabel, levelLabel, monthLabel, provinceName } from "@/lib/data";
import { controlClasses } from "@/components/ui/Field";
import { cn } from "@/lib/cn";

type Chip = { key: string; label: string; remove: Partial<FilterState> };

function chipsFor(f: FilterState): Chip[] {
  const chips: Chip[] = [];
  if (f.q.trim()) chips.push({ key: "q", label: `“${f.q.trim()}”`, remove: { q: "" } });
  f.province.forEach((v) => chips.push({ key: `p-${v}`, label: provinceName(v), remove: { province: f.province.filter((x) => x !== v), city: [] } }));
  f.city.forEach((v) => chips.push({ key: `c-${v}`, label: v, remove: { city: f.city.filter((x) => x !== v) } }));
  f.type.filter((t) => INSTITUTION_TYPES.includes(t)).forEach((v) => chips.push({ key: `t-${v}`, label: v, remove: { type: f.type.filter((x) => x !== v) } }));
  f.level.forEach((v) => chips.push({ key: `l-${v}`, label: levelLabel(v), remove: { level: f.level.filter((x) => x !== v) } }));
  f.field.forEach((v) => chips.push({ key: `f-${v}`, label: fieldLabel(v), remove: { field: f.field.filter((x) => x !== v) } }));
  f.intake.forEach((v) => chips.push({ key: `i-${v}`, label: `${monthLabel(v)} intake`, remove: { intake: f.intake.filter((x) => x !== v) } }));
  if (f.tuitionMin > TUITION_MIN || f.tuitionMax < TUITION_MAX)
    chips.push({ key: "tuition", label: "Tuition range", remove: { tuitionMin: TUITION_MIN, tuitionMax: TUITION_MAX } });
  return chips;
}

export function ResultsToolbar({
  heading,
  filters,
  update,
  clear,
  onOpenFilters,
}: {
  heading: string;
  filters: FilterState;
  update: (patch: Partial<FilterState>) => void;
  clear: () => void;
  onOpenFilters: () => void;
}) {
  const chips = chipsFor(filters);
  const count = activeFilterCount(filters);
  return (
    <div className="mb-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl" aria-live="polite">
          {heading}
        </h2>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenFilters}
            className="inline-flex h-11 items-center gap-2 rounded-full border-2 border-primary-600 px-4 text-sm font-semibold text-primary-700 hover:bg-primary-50 lg:hidden"
          >
            <SlidersHorizontal aria-hidden="true" className="size-4" />
            Filters{count > 0 && ` (${count})`}
          </button>
          <label htmlFor="sort" className="sr-only">
            Sort results
          </label>
          <select
            id="sort"
            value={filters.sort}
            onChange={(e) => update({ sort: e.target.value as SortKey })}
            className={cn(controlClasses, "h-11 min-h-11 w-auto rounded-full py-0 pr-8")}
          >
            <option value="popularity">Sort: Popularity</option>
            <option value="name">Sort: Name (A–Z)</option>
            <option value="tuition">Sort: Tuition (low → high)</option>
          </select>
        </div>
      </div>
      {chips.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-sm text-slate">Filtered by:</span>
          {chips.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => update(c.remove)}
              className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700 hover:bg-primary-100"
            >
              {c.label}
              <X aria-hidden="true" className="size-3.5" />
              <span className="sr-only">(remove filter)</span>
            </button>
          ))}
          <button type="button" onClick={clear} className="ml-1 text-sm font-semibold text-slate underline hover:text-ink">
            Clear all
          </button>
        </div>
      )}
    </div>
  );
}
