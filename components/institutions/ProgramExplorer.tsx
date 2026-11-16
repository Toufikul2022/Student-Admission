"use client";

import { useMemo } from "react";
import { filterPrograms, paginate } from "@/lib/filters";
import { institutionBySlug, programs } from "@/lib/data";
import { ExplorerLayout, EmptyResults } from "./ExplorerLayout";
import { ProgramCard } from "./ProgramCard";
import { useUrlFilters } from "./useUrlFilters";

export function ProgramExplorer() {
  const state = useUrlFilters();
  const { filters, clear } = state;

  const results = useMemo(() => filterPrograms(programs, filters), [filters]);
  const { items, totalPages, current } = paginate(results, filters.page);

  const provinceCounts = useMemo(
    () =>
      programs.reduce<Record<string, number>>((acc, p) => {
        const prov = institutionBySlug(p.institutionSlug)?.province;
        if (prov) acc[prov] = (acc[prov] ?? 0) + 1;
        return acc;
      }, {}),
    [],
  );
  const cityOptions = useMemo(() => {
    const counts: Record<string, number> = {};
    programs.forEach((p) => {
      const inst = institutionBySlug(p.institutionSlug);
      if (inst && (!filters.province.length || filters.province.includes(inst.province))) counts[inst.city] = (counts[inst.city] ?? 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([city, count]) => ({ value: city, label: city, count }));
  }, [filters.province]);

  const n = results.length;
  return (
    <ExplorerLayout
      filtersState={state}
      heading={`${n} ${n === 1 ? "program" : "programs"} in Canada`}
      resultCount={n}
      cityOptions={cityOptions}
      provinceCounts={provinceCounts}
      searchLabel="Search programs"
      pgwpDescription="Show only programs confirmed as PGWP-eligible."
      page={current}
      totalPages={totalPages}
      emptyState={<EmptyResults onClear={clear} what="programs" />}
    >
      <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((p) => (
          <li key={p.id}>
            <ProgramCard program={p} />
          </li>
        ))}
      </ul>
    </ExplorerLayout>
  );
}
