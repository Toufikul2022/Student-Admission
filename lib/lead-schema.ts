import { z } from "zod";
import { STUDY_LEVELS, fields } from "./data";

export const INTAKE_OPTIONS = [
  { value: "winter", label: "Winter (January)" },
  { value: "summer", label: "Summer (May)" },
  { value: "fall", label: "Fall (September)" },
  { value: "not-sure", label: "Not sure yet" },
];

export const EDUCATION_OPTIONS = [
  { value: "secondary", label: "Secondary school (high school)" },
  { value: "diploma", label: "Diploma or certificate" },
  { value: "bachelor", label: "Bachelor's degree" },
  { value: "masters", label: "Master's degree" },
  { value: "phd", label: "PhD / Doctorate" },
  { value: "other", label: "Other" },
];

export const LEVEL_OPTIONS = [...STUDY_LEVELS.map((l) => ({ value: l.value, label: l.label })), { value: "not-sure", label: "Not sure yet" }];
export const FIELD_OPTIONS = [...fields.map((f) => ({ value: f.slug, label: f.label })), { value: "other", label: "Other / not sure" }];

const optionValue = (opts: { value: string }[], message: string) =>
  z.string().refine((v) => opts.some((o) => o.value === v), { message });

const contactFields = {
  firstName: z.string().trim().min(1, "Please enter your first name.").max(80, "First name is too long."),
  lastName: z.string().trim().min(1, "Please enter your last name.").max(80, "Last name is too long."),
  email: z.string().trim().email("Please enter a valid email address, like name@example.com."),
  phoneCode: z.string().trim().regex(/^\+\d{1,4}$/, "Please choose a country code."),
  phone: z
    .string()
    .trim()
    .regex(/^[\d\s\-().]{6,20}$/, "Please enter a valid phone number (digits only, 6–20 characters)."),
  studyLevel: optionValue(LEVEL_OPTIONS, "Please choose a study level."),
  intake: optionValue(INTAKE_OPTIONS, "Please choose when you'd like to start."),
  consentTerms: z.literal("on", { message: "Please agree to the Terms of Use and Privacy Policy." }),
  consentContact: z.literal("on", { message: "Please confirm we may contact you about your enquiry." }),
  consentMarketing: z.literal("on").optional(),
  sourcePage: z.string().max(200).optional().default(""),
  institution: z.string().max(200).optional().default(""),
  formVariant: z.enum(["full", "compact"]).optional().default("full"),
  /** Honeypot: real people never see or fill this */
  website: z.string().optional().default(""),
};

/** Short form used in the "Speak to an advisor" sections. */
export const compactLeadSchema = z.object({
  ...contactFields,
  country: z.string().optional().default(""),
  field: z.string().optional().default(""),
  education: z.string().optional().default(""),
  englishTest: z.string().optional().default(""),
  englishScore: z.string().optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
});

/** Full form used on the Contact page. */
export const leadSchema = z
  .object({
    ...contactFields,
    country: z.string().trim().min(1, "Please choose your country of residence."),
    field: optionValue(FIELD_OPTIONS, "Please choose a field of interest."),
    education: optionValue(EDUCATION_OPTIONS, "Please choose your highest education completed."),
    englishTest: z.enum(["yes", "no"], { message: "Please tell us whether you have taken an English test." }),
    englishScore: z.string().trim().max(80, "Please keep this under 80 characters.").optional().default(""),
    message: z.string().trim().max(2000, "Please keep your message under 2,000 characters.").optional().default(""),
  })
  .refine((d) => d.englishTest === "no" || d.englishScore.length > 0, {
    path: ["englishScore"],
    message: "Please enter the test name and your overall score (e.g. IELTS 6.5).",
  });

export function schemaFor(variant: string | undefined) {
  return variant === "compact" ? compactLeadSchema : leadSchema;
}

export type LeadInput = z.infer<typeof leadSchema> | z.infer<typeof compactLeadSchema>;
export type LeadFieldErrors = Partial<Record<keyof LeadInput, string>>;

export type LeadState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: LeadFieldErrors;
  values?: Record<string, string>;
};

export function formDataToObject(fd: FormData): Record<string, string> {
  const obj: Record<string, string> = {};
  fd.forEach((v, k) => {
    if (typeof v === "string" && !k.startsWith("$ACTION")) obj[k] = v;
  });
  return obj;
}

export function flattenErrors(error: z.ZodError): LeadFieldErrors {
  const out: LeadFieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0] as keyof LeadInput;
    if (key && !out[key]) out[key] = issue.message;
  }
  return out;
}
