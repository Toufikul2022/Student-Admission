import institutionsJson from "@/data/institutions.json";
import programsJson from "@/data/programs.json";
import provincesJson from "@/data/provinces.json";
import fieldsJson from "@/data/fields.json";
import factsJson from "@/data/immigration-facts.json";
import type {
  Field,
  ImmigrationFact,
  Institution,
  IntakeMonth,
  InstitutionType,
  OfficialLink,
  Program,
  Province,
  StudyLevel,
} from "./types";

export const institutions = institutionsJson as Institution[];
export const programs = programsJson as Program[];
export const provinces = provincesJson as Province[];
export const fields = fieldsJson as Field[];
export const immigrationFacts = factsJson.facts as ImmigrationFact[];
export const officialLinks = factsJson.links as OfficialLink[];

export const STUDY_LEVELS: { value: StudyLevel; label: string }[] = [
  { value: "diploma", label: "Diploma / Certificate" },
  { value: "bachelor", label: "Bachelor's degree" },
  { value: "postgraduate-certificate", label: "Postgraduate certificate" },
  { value: "masters", label: "Master's degree" },
  { value: "phd", label: "PhD / Doctorate" },
];

export const INSTITUTION_TYPES: InstitutionType[] = ["University", "College", "Polytechnic"];

export const MONTHS: { value: IntakeMonth; label: string; season?: string }[] = [
  { value: "jan", label: "January", season: "Winter" },
  { value: "feb", label: "February" },
  { value: "mar", label: "March" },
  { value: "apr", label: "April" },
  { value: "may", label: "May", season: "Summer" },
  { value: "jun", label: "June" },
  { value: "jul", label: "July" },
  { value: "aug", label: "August" },
  { value: "sep", label: "September", season: "Fall" },
  { value: "oct", label: "October" },
  { value: "nov", label: "November" },
  { value: "dec", label: "December" },
];

/** Tuition slider bounds (CAD per year). */
export const TUITION_MIN = 0;
export const TUITION_MAX = 60000;
export const TUITION_STEP = 1000;

export const levelLabel = (v: StudyLevel) => STUDY_LEVELS.find((l) => l.value === v)?.label ?? v;
export const monthLabel = (v: IntakeMonth) => MONTHS.find((m) => m.value === v)?.label ?? v;
export const monthShort = (v: IntakeMonth) => monthLabel(v).slice(0, 3);
export const fieldLabel = (slug: string) => fields.find((f) => f.slug === slug)?.label ?? slug;
export const provinceBySlug = (slug: string) => provinces.find((p) => p.slug === slug);
export const provinceName = (slug: string) => provinceBySlug(slug)?.name ?? slug;
export const institutionBySlug = (slug: string) => institutions.find((i) => i.slug === slug);
export const programsFor = (slug: string) => programs.filter((p) => p.institutionSlug === slug);
export const fact = (key: string) => immigrationFacts.find((f) => f.key === key);
export function link(key: string): OfficialLink {
  const l = officialLinks.find((x) => x.key === key);
  if (!l) throw new Error(`Unknown official link key: ${key}`);
  return l;
}

const cad = new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });

export function formatTuitionRange(r: Institution["tuitionRangeCad"]) {
  if (r.min == null && r.max == null) return "TBC";
  if (r.min != null && r.max != null) return `${cad.format(r.min)} – ${cad.format(r.max)} / yr`;
  return `${cad.format((r.min ?? r.max) as number)} / yr`;
}

export function formatCad(n: number | null) {
  return n == null ? "TBC" : `${cad.format(n)} / yr`;
}

export function formatDate(iso: string | null) {
  if (!iso) return null;
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(y, m - 1, d)),
  );
}

/** Provinces that currently have at least one institution in the data. */
export function provincesWithInstitutions() {
  const set = new Set(institutions.map((i) => i.province));
  return provinces.filter((p) => set.has(p.slug));
}
