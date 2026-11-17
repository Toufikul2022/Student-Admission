"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import type { FilterState } from "@/lib/filters";
import { activeFilterCount } from "@/lib/filters";
import { Drawer } from "@/components/ui/Drawer";
import { buttonClasses } from "@/components/ui/Button";
import { FilterPanel } from "./FilterPanel";
import { ResultsToolbar } from "./ResultsToolbar";
import { Pagination } from "./Pagination";
import { useUrlFilters } from "./useUrlFilters";

type Opt = { value: string; label: string; count?: number };

/** Shared filter sidebar (desktop) / drawer (mobile) + results area. */
export function ExplorerLayout({
  heading,
  resultCount,
  cityOptions,
  provinceCounts,
  searchLabel,
  page,
  totalPages,
  emptyState,
  children,
  filtersState,
}: {
  heading: string;
  resultCount: number;
  cityOptions: Opt[];
  provinceCounts: Record<string, number>;
  searchLabel: string;
  page: number;
  totalPages: number;
  emptyState: ReactNode;
  children: ReactNode;
  filtersState: ReturnType<typeof useUrlFilters>;
}) {
  const { filters, update, clear } = filtersState;
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Bumped when the search text is cleared from outside the search box, to reset it
  const [searchKey, setSearchKey] = useState(0);

  const externalUpdate = (patch: Partial<FilterState>) => {
    if (patch.q === "") setSearchKey((k) => k + 1);
    update(patch);
  };
  const externalClear = () => {
    setSearchKey((k) => k + 1);
    clear();
  };

  const panel = (prefix: string) => (
    <FilterPanel
      key={`${prefix}-${searchKey}`}
      idPrefix={prefix}
      filters={filters}
      update={update}
      cityOptions={cityOptions}
      provinceCounts={provinceCounts}
      searchLabel={searchLabel}
    />
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[17rem_1fr] xl:grid-cols-[18.5rem_1fr]">
      <aside aria-label="Filters" className="hidden lg:block">
        <div className="sticky top-24 max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-2xl border border-line bg-white p-5">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-lg font-bold">Filters</h2>
            {activeFilterCount(filters) > 0 && (
              <button type="button" onClick={externalClear} className="text-sm font-semibold text-primary-700 hover:underline">
                Clear all
              </button>
            )}
          </div>
          {panel("d-")}
        </div>
      </aside>

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Filters"
        footer={
          <div className="flex gap-3">
            <button type="button" onClick={externalClear} className={buttonClasses("outline", "md", "flex-1")}>
              Clear all
            </button>
            <button type="button" onClick={() => setDrawerOpen(false)} className={buttonClasses("primary", "md", "flex-1")}>
              Show {resultCount} {resultCount === 1 ? "result" : "results"}
            </button>
          </div>
        }
      >
        {drawerOpen && panel("m-")}
      </Drawer>

      <div id="results" className="min-w-0 scroll-mt-24">
        <ResultsToolbar heading={heading} filters={filters} update={externalUpdate} clear={externalClear} onOpenFilters={() => setDrawerOpen(true)} />
        {resultCount === 0 ? emptyState : children}
        <Pagination current={page} total={totalPages} onChange={(p) => update({ page: p })} />
      </div>
    </div>
  );
}

export function EmptyResults({ onClear, what }: { onClear: () => void; what: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-line bg-mist p-10 text-center">
      <p className="text-lg font-bold text-ink">No {what} match these filters</p>
      <p className="mt-2 text-slate">
        Try removing a filter, or{" "}
        <Link href="/contact" className="font-semibold text-primary-700 underline">
          ask an advisor
        </Link>{" "}
        — we may know options that aren&apos;t listed yet.
      </p>
      <button type="button" onClick={onClear} className={buttonClasses("primary", "md", "mt-6")}>
        Clear all filters
      </button>
    </div>
  );
}
