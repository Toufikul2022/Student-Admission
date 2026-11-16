"use client";

import { useSearchParams } from "next/navigation";
import { LeadForm } from "./LeadForm";

/**
 * Lead form that reads ?institution=<slug> from the URL (used on /contact),
 * so "Get help applying" buttons can pre-fill the institution.
 * Must be rendered inside <Suspense>.
 */
export function LeadFormFromUrl({ institutionNames, idPrefix }: { institutionNames: Record<string, string>; idPrefix?: string }) {
  const slug = useSearchParams().get("institution") ?? "";
  return <LeadForm institution={institutionNames[slug]} idPrefix={idPrefix} />;
}
