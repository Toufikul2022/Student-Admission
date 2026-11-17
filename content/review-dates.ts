/**
 * "Last reviewed" dates for every guide page, in one place.
 *
 * reviewed: set to the ISO date (YYYY-MM-DD) once someone on your team has
 *           reviewed the page. While null, the page shows "Pending professional review".
 * drafted:  the date the current text was written.
 *
 * TODO: after legal/professional review, set `reviewed` for each page.
 */
export const DRAFTED = "2026-11-16";

export const reviewDates: Record<string, { reviewed: string | null; drafted: string }> = {
  "/study-in-canada": { reviewed: null, drafted: DRAFTED },
  "/study-in-canada/costs": { reviewed: null, drafted: DRAFTED },
  "/study-in-canada/intakes": { reviewed: null, drafted: DRAFTED },
  "/study-in-canada/language-tests": { reviewed: null, drafted: DRAFTED },
  "/study-in-canada/scholarships": { reviewed: null, drafted: DRAFTED },
  "/study-in-canada/provinces": { reviewed: null, drafted: DRAFTED },
  "/disclaimer": { reviewed: null, drafted: DRAFTED },
  "/privacy-policy": { reviewed: null, drafted: DRAFTED },
  "/terms": { reviewed: null, drafted: DRAFTED },
};

export function reviewInfo(path: string) {
  // Province pages share one entry
  const key = path.startsWith("/study-in-canada/provinces/") ? "/study-in-canada/provinces" : path;
  return reviewDates[key] ?? { reviewed: null, drafted: DRAFTED };
}
