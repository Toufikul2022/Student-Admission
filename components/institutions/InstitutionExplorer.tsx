"use client";

import { useMemo } from "react";
import { filterInstitutions, paginate } from "@/lib/filters";
import { institutions } from "@/lib/data";
import { ExplorerLayout, EmptyResults } from "./ExplorerLayout";
import { InstitutionCard } from "./InstitutionCard";
import { useUrlFilters } from "./useUrlFilters";

export function InstitutionExplorer() {
  const state = useUrlFilters();
  const { filters, clear } = state;

  const results = useMemo(() => filterInstitutions(institutions, filters), [filters]);
  const { items, totalPages, current } = paginate(results, filters.page);

  const provinceCounts = useMemo(
    () => institutions.reduce<Record<string, number>>((acc, i) => ((acc[i.province] = (acc[i.province] ?? 0) + 1), acc), {}),
    [],
  );
  const cityOptions = useMemo(() => {
    const pool = filters.province.length ? institutions.filter((i) => filters.province.includes(i.province)) : institutions;
    const counts = pool.reduce<Record<string, number>>((acc, i) => ((acc[i.city] = (acc[i.city] ?? 0) + 1), acc), {});
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([city, count]) => ({ value: city, label: city, count }));
  }, [filters.province]);

  const n = results.length;
  return (
    <ExplorerLayout
      filtersState={state}
      heading={`${n} ${n === 1 ? "institution" : "institutions"} in Canada`}
      resultCount={n}
      cityOptions={cityOptions}
      provinceCounts={provinceCounts}
      searchLabel="Search institutions"
      page={current}
      totalPages={totalPages}
      emptyState={<EmptyResults onClear={clear} what="institutions" />}
    >
      <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((inst) => (
          <li key={inst.slug}>
            <InstitutionCard inst={inst} headingLevel={2} />
          </li>
        ))}
      </ul>
    </ExplorerLayout>
  );
}
