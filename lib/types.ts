/**
 * Shared data types. The JSON files in /data must follow these shapes.
 * See DATA_GUIDE.md for field-by-field instructions.
 */

export type InstitutionType = "University" | "College" | "Polytechnic";

export type StudyLevel =
  | "diploma"
  | "bachelor"
  | "postgraduate-certificate"
  | "masters"
  | "phd";

/** Three-letter month codes used for intakes. */
export type IntakeMonth =
  | "jan" | "feb" | "mar" | "apr" | "may" | "jun"
  | "jul" | "aug" | "sep" | "oct" | "nov" | "dec";

export interface Institution {
  slug: string;
  name: string;
  type: InstitutionType;
  /** Province slug, must match a slug in provinces.json */
  province: string;
  city: string;
  /** Designated learning institution (DLI) number from the official Government of Canada list. null until verified. */
  dliNumber: string | null;
  website: string;
  /** Path to a logo in /public, or null to show initials */
  logo: string | null;
  overview: string;
  campusAddress: string | null;
  /** Annual international tuition range in CAD. null = to be confirmed. */
  tuitionRangeCad: { min: number | null; max: number | null };
  intakes: IntakeMonth[];
  /** Field-of-study slugs, must match fields.json */
  fields: string[];
  levels: StudyLevel[];
  admissionRequirements: string[];
  /** Your own sort order for "Popularity" (higher = shown first). Not a public ranking. */
  popularity: number;
  featured: boolean;
  /** true while the record is a sample and not fully verified */
  sample: boolean;
  source_url: string;
  /** ISO date (YYYY-MM-DD) the record was last checked against source_url, or null */
  last_verified: string | null;
}

export interface Program {
  id: string;
  institutionSlug: string;
  name: string;
  level: StudyLevel;
  /** Field-of-study slug, must match fields.json */
  field: string;
  durationMonths: number | null;
  tuitionPerYearCad: number | null;
  intakes: IntakeMonth[];
  languageRequirement: string | null;
  sample: boolean;
  source_url: string;
  last_verified: string | null;
}

export interface Province {
  slug: string;
  name: string;
  code: string;
  kind: "province" | "territory";
  majorCities: string[];
  overview: string;
  highlights: string[];
  officialSite: string;
  /** Extra note specific to studying in this province (e.g. language of instruction) */
  specialNote: string | null;
}

export interface Field {
  slug: string;
  label: string;
}

export interface OfficialLink {
  key: string;
  label: string;
  url: string;
  last_verified: string | null;
}
