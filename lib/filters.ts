import type { Institution, IntakeMonth, InstitutionType, Program, StudyLevel } from "./types";
import { TUITION_MAX, TUITION_MIN, institutionBySlug } from "./data";

/**
 * Filter state <-> URL query params.
 * Multi-value filters are comma-separated, e.g. ?province=manitoba,ontario&level=bachelor
 * so every filtered view has a shareable, indexable URL.
 */

export type SortKey = "popularity" | "name" | "tuition";

export interface FilterState {
  q: string;
  province: string[];
  city: string[];
  type: InstitutionType[];
  level: StudyLevel[];
  field: string[];
  intake: IntakeMonth[];
  tuitionMin: number;
  tuitionMax: number;
  sort: SortKey;
  page: number;
}

export const DEFAULT_FILTERS: FilterState = {
  q: "",
  province: [],
  city: [],
  type: [],
  level: [],
  field: [],
  intake: [],
  tuitionMin: TUITION_MIN,
  tuitionMax: TUITION_MAX,
  sort: "popularity",
  page: 1,
};

type ParamsLike = { get(name: string): string | null };

const list = (p: ParamsLike, key: string) =>
  (p.get(key) ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

const num = (v: string | null, fallback: number) => {
  const n = Number(v);
  return v !== null && Number.isFinite(n) ? n : fallback;
};

export function parseFilters(p: ParamsLike): FilterState {
  const sort = p.get("sort");
  return {
    q: p.get("q") ?? "",
    province: list(p, "province"),
    city: list(p, "city"),
    type: list(p, "type") as InstitutionType[],
    level: list(p, "level") as StudyLevel[],
    field: list(p, "field"),
    intake: list(p, "intake") as IntakeMonth[],
    tuitionMin: num(p.get("tmin"), TUITION_MIN),
    tuitionMax: num(p.get("tmax"), TUITION_MAX),
    sort: sort === "name" || sort === "tuition" ? sort : "popularity",
    page: Math.max(1, Math.floor(num(p.get("page"), 1))),
  };
}

export function serializeFilters(f: FilterState): string {
  const p = new URLSearchParams();
  if (f.q.trim()) p.set("q", f.q.trim());
  (["province", "city", "type", "level", "field", "intake"] as const).forEach((k) => {
    if (f[k].length) p.set(k, f[k].join(","));
  });
  if (f.tuitionMin > TUITION_MIN) p.set("tmin", String(f.tuitionMin));
  if (f.tuitionMax < TUITION_MAX) p.set("tmax", String(f.tuitionMax));
  if (f.sort !== "popularity") p.set("sort", f.sort);
  if (f.page > 1) p.set("page", String(f.page));
  return p.toString();
}

export function activeFilterCount(f: FilterState) {
  return (
    (f.q.trim() ? 1 : 0) +
    f.province.length +
    f.city.length +
    f.type.length +
    f.level.length +
    f.field.length +
    f.intake.length +
    (f.tuitionMin > TUITION_MIN || f.tuitionMax < TUITION_MAX ? 1 : 0)
  );
}

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

const anyOf = <T,>(selected: T[], values: T[]) => selected.length === 0 || selected.some((s) => values.includes(s));

/**
 * Tuition filter: a record with unknown (null) tuition is never hidden,
 * because "TBC" doesn't mean it's outside the user's budget.
 */
function tuitionMatches(min: number | null, max: number | null, f: FilterState) {
  if (f.tuitionMin <= TUITION_MIN && f.tuitionMax >= TUITION_MAX) return true;
  if (min == null && max == null) return true;
  const lo = min ?? (max as number);
  const hi = max ?? (min as number);
  const userMax = f.tuitionMax >= TUITION_MAX ? Infinity : f.tuitionMax;
  return hi >= f.tuitionMin && lo <= userMax;
}

export function filterInstitutions(all: Institution[], f: FilterState) {
  const q = norm(f.q.trim());
  const result = all.filter(
    (i) =>
      (!q || norm(`${i.name} ${i.city}`).includes(q)) &&
      anyOf(f.province, [i.province]) &&
      anyOf(f.city, [i.city]) &&
      anyOf(f.type, [i.type]) &&
      anyOf(f.level, i.levels) &&
      anyOf(f.field, i.fields) &&
      anyOf(f.intake, i.intakes) &&
      tuitionMatches(i.tuitionRangeCad.min, i.tuitionRangeCad.max, f),
  );
  return result.sort((a, b) => {
    if (f.sort === "name") return a.name.localeCompare(b.name, "en-CA");
    if (f.sort === "tuition") {
      const ta = a.tuitionRangeCad.min ?? a.tuitionRangeCad.max;
      const tb = b.tuitionRangeCad.min ?? b.tuitionRangeCad.max;
      if (ta == null && tb == null) return a.name.localeCompare(b.name, "en-CA");
      if (ta == null) return 1; // unknown tuition sorts last
      if (tb == null) return -1;
      return ta - tb;
    }
    return b.popularity - a.popularity || a.name.localeCompare(b.name, "en-CA");
  });
}

export function filterPrograms(all: Program[], f: FilterState) {
  const q = norm(f.q.trim());
  const result = all.filter((p) => {
    const inst = institutionBySlug(p.institutionSlug);
    if (!inst) return false;
    return (
      (!q || norm(`${p.name} ${inst.name}`).includes(q)) &&
      anyOf(f.province, [inst.province]) &&
      anyOf(f.city, [inst.city]) &&
      anyOf(f.type, [inst.type]) &&
      anyOf(f.level, [p.level]) &&
      anyOf(f.field, [p.field]) &&
      anyOf(f.intake, p.intakes) &&
      tuitionMatches(p.tuitionPerYearCad, p.tuitionPerYearCad, f)
    );
  });
  return result.sort((a, b) => {
    if (f.sort === "name") return a.name.localeCompare(b.name, "en-CA");
    if (f.sort === "tuition") {
      if (a.tuitionPerYearCad == null && b.tuitionPerYearCad == null) return a.name.localeCompare(b.name, "en-CA");
      if (a.tuitionPerYearCad == null) return 1;
      if (b.tuitionPerYearCad == null) return -1;
      return a.tuitionPerYearCad - b.tuitionPerYearCad;
    }
    const pa = institutionBySlug(a.institutionSlug)?.popularity ?? 0;
    const pb = institutionBySlug(b.institutionSlug)?.popularity ?? 0;
    return pb - pa || a.name.localeCompare(b.name, "en-CA");
  });
}

export const PAGE_SIZE = 12;

export function paginate<T>(items: T[], page: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  return { items: items.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE), totalPages, current };
}
