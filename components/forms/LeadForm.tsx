"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useActionState, useEffect, useRef, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { submitLead } from "@/app/actions/submit-lead";
import { COUNTRIES, DIAL_CODES } from "@/lib/countries";
import {
  EDUCATION_OPTIONS,
  FIELD_OPTIONS,
  INTAKE_OPTIONS,
  LEVEL_OPTIONS,
  flattenErrors,
  formDataToObject,
  schemaFor,
  type LeadFieldErrors,
  type LeadState,
} from "@/lib/lead-schema";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

const initialState: LeadState = { status: "idle" };

/**
 * Reusable "Talk to an advisor" form. Validates in the browser with Zod, then
 * again on the server (app/actions/submit-lead.ts) before emailing the lead.
 */
export function LeadForm({
  institution,
  idPrefix = "lead",
  className,
  variant = "full",
}: {
  /** "compact": short form (name, email, mobile, level, start date). "full": every field (Contact page). */
  variant?: "full" | "compact";
  /** Pre-fills the hidden "selected institution" field */
  institution?: string;
  /** Keeps field ids unique if two forms are ever on one page */
  idPrefix?: string;
  className?: string;
}) {
  const pathname = usePathname();
  const [state, formAction, pending] = useActionState(submitLead, initialState);
  const [clientErrors, setClientErrors] = useState<LeadFieldErrors | null>(null);
  const [englishTest, setEnglishTest] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  const errors: LeadFieldErrors = clientErrors ?? state.fieldErrors ?? {};
  const v = state.status === "error" ? (state.values ?? {}) : {};
  const id = (name: string) => `${idPrefix}-${name}`;
  const compact = variant === "compact";

  useEffect(() => {
    if (state.status === "success") successRef.current?.focus();
    if (state.status === "error" && !state.fieldErrors) statusRef.current?.focus();
  }, [state]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    const parsed = schemaFor(variant).safeParse(formDataToObject(new FormData(e.currentTarget)));
    if (!parsed.success) {
      e.preventDefault();
      const errs = flattenErrors(parsed.error);
      setClientErrors(errs);
      // Move focus to the first invalid field
      const first = Object.keys(errs)[0];
      requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus());
      return;
    }
    setClientErrors(null);
  }

  if (state.status === "success") {
    return (
      <div className={cn("rounded-2xl border border-success-50 bg-success-50 p-8 text-center", className)} role="status">
        <CheckCircle2 aria-hidden="true" className="mx-auto size-12 text-success-700" />
        <h3 ref={successRef} tabIndex={-1} className="mt-4 text-2xl font-bold text-ink">
          Enquiry received
        </h3>
        <p className="mx-auto mt-2 max-w-md text-slate">{state.message}</p>
      </div>
    );
  }

  const errorCount = Object.keys(errors).length;

  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={onSubmit}
      noValidate
      className={cn("space-y-5", className)}
      aria-describedby={`${idPrefix}-required-note`}
      // Re-mount with the submitted values after a server-side error so nothing is lost
      key={state.status === "error" ? JSON.stringify(v) : "fresh"}
    >
      <p id={`${idPrefix}-required-note`} className={compact ? "sr-only" : "text-sm text-slate"}>
        Fields marked <span className="text-danger-700">*</span> are required.
      </p>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {(errorCount > 0 || state.status === "error") && (
          <div className="flex gap-3 rounded-xl border border-danger-700/30 bg-danger-50 p-4 text-sm text-danger-700">
            <AlertCircle aria-hidden="true" className="size-5 shrink-0" />
            <p>
              {errorCount > 0
                ? `Please fix ${errorCount} ${errorCount === 1 ? "field" : "fields"} below.`
                : state.message}
            </p>
          </div>
        )}
      </div>

      {institution && (
        <p className="rounded-xl bg-primary-50 px-4 py-3 text-sm text-primary-800">
          You&apos;re asking about: <strong>{institution}</strong>
        </p>
      )}

      {/* Hidden context fields */}
      <input type="hidden" name="sourcePage" value={pathname ?? ""} />
      <input type="hidden" name="institution" value={institution ?? ""} />
      <input type="hidden" name="formVariant" value={variant} />
      {/* Honeypot — hidden from people and assistive tech; bots tend to fill it */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={id("website")}>Leave this field empty</label>
        <input id={id("website")} name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input id={id("firstName")} name="firstName" label="First name" autoComplete="given-name" required defaultValue={v.firstName} error={errors.firstName} />
        <Input id={id("lastName")} name="lastName" label="Last name" autoComplete="family-name" required defaultValue={v.lastName} error={errors.lastName} />
        <Input id={id("email")} name="email" type="email" label={compact ? "Email address" : "Email"} autoComplete="email" required defaultValue={v.email} error={errors.email} wrapperClassName="sm:col-span-2" />

        <fieldset className="sm:col-span-2">
          <legend className="mb-1.5 text-sm font-semibold text-ink">
            {compact ? "Mobile number" : "Phone (with country code)"}<span className="text-danger-700" aria-hidden="true"> *</span>
          </legend>
          <div className="grid grid-cols-[minmax(0,10rem)_1fr] gap-3 sm:grid-cols-[minmax(0,13rem)_1fr]">
            <Select
              id={id("phoneCode")}
              name="phoneCode"
              label="Country code"
              srOnlyLabel
              options={DIAL_CODES}
              placeholder="Code"
              required
              defaultValue={v.phoneCode ?? ""}
              error={errors.phoneCode}
              autoComplete="tel-country-code"
            />
            <Input
              id={id("phone")}
              name="phone"
              type="tel"
              label="Phone number"
              srOnlyLabel
              autoComplete="tel-national"
              inputMode="tel"
              required
              defaultValue={v.phone}
              error={errors.phone}
            />
          </div>
        </fieldset>

        {!compact && (
        <Select id={id("country")} name="country" label="Country of residence" options={COUNTRIES.map((c) => ({ value: c.name, label: c.name }))} placeholder="Select a country" required defaultValue={v.country ?? ""} error={errors.country} autoComplete="country-name" />
        )}
        {!compact && (
        <Select id={id("education")} name="education" label="Highest education completed" options={EDUCATION_OPTIONS} placeholder="Select one" required defaultValue={v.education ?? ""} error={errors.education} />
        )}
        <Select id={id("studyLevel")} name="studyLevel" label="Preferred study level" options={LEVEL_OPTIONS} placeholder={compact ? "Select" : "Select a level"} required defaultValue={v.studyLevel ?? ""} error={errors.studyLevel} />
        <Select id={id("intake")} name="intake" label={compact ? "When would you like to start?" : "Preferred intake"} options={INTAKE_OPTIONS} placeholder={compact ? "Select" : "Select an intake"} required defaultValue={v.intake ?? ""} error={errors.intake} />
        {!compact && (
        <>
        <Select id={id("field")} name="field" label="Field of interest" options={FIELD_OPTIONS} placeholder="Select a field" required defaultValue={v.field ?? ""} error={errors.field} wrapperClassName="sm:col-span-2" />

        <fieldset className="sm:col-span-2" aria-describedby={errors.englishTest ? id("englishTest-error") : undefined}>
          <legend className="mb-2 text-sm font-semibold text-ink">
            Have you taken an English language test?<span className="text-danger-700" aria-hidden="true"> *</span>
          </legend>
          <div className="flex gap-6">
            {(["yes", "no"] as const).map((opt) => (
              <label key={opt} className="flex min-h-11 cursor-pointer items-center gap-2 text-base sm:text-sm">
                <input
                  type="radio"
                  name="englishTest"
                  value={opt}
                  defaultChecked={v.englishTest === opt}
                  onChange={(e) => setEnglishTest(e.target.value)}
                  className="size-6 accent-primary-600 sm:size-5"
                />
                {opt === "yes" ? "Yes" : "No"}
              </label>
            ))}
          </div>
          {errors.englishTest && (
            <p id={id("englishTest-error")} className="mt-1 text-sm font-medium text-danger-700">
              {errors.englishTest}
            </p>
          )}
        </fieldset>

        {(englishTest ? englishTest === "yes" : v.englishTest === "yes") && (
          <Input
            id={id("englishScore")}
            name="englishScore"
            label="Test name and overall score"
            hint="For example: IELTS Academic 6.5, PTE 62, CELPIP 8"
            required
            defaultValue={v.englishScore}
            error={errors.englishScore}
            wrapperClassName="sm:col-span-2"
          />
        )}

        <Textarea id={id("message")} name="message" label="Message" hint="Tell us about your plans, preferred programs or any questions." defaultValue={v.message} error={errors.message} wrapperClassName="sm:col-span-2" maxLength={2000} />
        </>
        )}
      </div>

      <div className={cn("space-y-4", !compact && "rounded-xl bg-mist p-4")}>
        <Checkbox
          id={id("consentTerms")}
          name="consentTerms"
          required
          defaultChecked={v.consentTerms === "on"}
          error={errors.consentTerms}
          label={
            <>
              I agree to the{" "}
              <Link href="/terms" className="font-semibold text-primary-700 underline">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="font-semibold text-primary-700 underline">
                Privacy Policy
              </Link>
              <span className="text-danger-700" aria-hidden="true"> *</span>
            </>
          }
        />
        <Checkbox
          id={id("consentContact")}
          name="consentContact"
          required
          defaultChecked={v.consentContact === "on"}
          error={errors.consentContact}
          label={
            <>
              Please contact me by phone or email to help with my enquiry
              <span className="text-danger-700" aria-hidden="true"> *</span>
            </>
          }
        />
        <Checkbox
          id={id("consentMarketing")}
          name="consentMarketing"
          defaultChecked={v.consentMarketing === "on"}
          label={`I would like to receive updates and news from ${siteConfig.name}`}
        />
      </div>

      <p className="text-xs leading-relaxed text-slate">
        Submitting this form does not guarantee admission or create a client relationship. Please don&apos;t
        include sensitive documents or ID numbers. See our{" "}
        <Link href="/disclaimer" className="underline">
          Disclaimer
        </Link>
        .
      </p>

      <Button type="submit" size="lg" disabled={pending} className="w-full">
        {pending ? <Loader2 aria-hidden="true" className="size-5 animate-spin" /> : <Send aria-hidden="true" className="size-5" />}
        {pending ? "Sending…" : compact ? "Get Started Free" : "Send my enquiry"}
      </Button>
    </form>
  );
}
