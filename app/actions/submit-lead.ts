"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { siteConfig } from "@/config/site";
import {
  FIELD_OPTIONS,
  INTAKE_OPTIONS,
  LEVEL_OPTIONS,
  flattenErrors,
  formDataToObject,
  schemaFor,
  type LeadInput,
  type LeadState,
} from "@/lib/lead-schema";
import { rateLimit } from "@/lib/rate-limit";
import { dialFromOption } from "@/lib/countries";

const label = (opts: { value: string; label: string }[], v: string) => (v ? (opts.find((o) => o.value === v)?.label ?? v) : "—");

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

function buildEmail(d: LeadInput) {
  const rows: [string, string][] = [
    ["Name", `${d.firstName} ${d.lastName}`],
    ["Email", d.email],
    ["Phone", `${dialFromOption(d.phoneCode)} ${d.phone}${d.phoneCode.includes(" ") ? ` (${d.phoneCode.slice(d.phoneCode.indexOf(" ") + 1)})` : ""}`],
    ["Preferred study level", label(LEVEL_OPTIONS, d.studyLevel)],
    ["Preferred intake", label(INTAKE_OPTIONS, d.intake)],
    ["Field of interest", label(FIELD_OPTIONS, d.field)],
    // Only shown when the visitor came from an institution's "Get help applying" button
    ...(d.institution ? ([["Institution of interest", d.institution]] as [string, string][]) : []),
    ["Agreed to Terms & Privacy Policy", "Yes"],
    ["Consent to be contacted", "Yes"],
    ["Marketing consent", d.consentMarketing === "on" ? "Yes" : "No"],
    ["Submitted from page", d.sourcePage || "—"],
  ];
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<h2 style="font-family:sans-serif">New enquiry from ${esc(siteConfig.name)}</h2><table style="font-family:sans-serif;border-collapse:collapse">${rows
    .map(
      ([k, v]) =>
        `<tr><th style="text-align:left;padding:6px 12px;border:1px solid #ddd;background:#f5f7f8">${esc(k)}</th><td style="padding:6px 12px;border:1px solid #ddd;white-space:pre-wrap">${esc(v)}</td></tr>`,
    )
    .join("")}</table>`;
  return { text, html };
}

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  const raw = formDataToObject(formData);
  const success: LeadState = {
    status: "success",
    message: "Thank you — we've received your enquiry. An advisor will contact you, usually within one business day.", // TODO: confirm response-time promise
  };

  // 1. Honeypot: silently "succeed" so bots learn nothing
  if (raw.website) return success;

  // 2. Rate limit by IP
  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (!rateLimit(ip).ok) {
    return {
      status: "error",
      message: "You've sent several enquiries in a short time. Please wait a few minutes and try again, or contact us by phone or email.",
      values: raw,
    };
  }

  // 3. Validate
  const parsed = schemaFor(raw.formVariant).safeParse(raw);
  if (!parsed.success) {
    return { status: "error", message: "Please correct the highlighted fields.", fieldErrors: flattenErrors(parsed.error), values: raw };
  }
  const data = parsed.data;

  // 4. Send email
  const { text, html } = buildEmail(data);
  const dryRun = process.env.CONTACT_FORM_DRY_RUN === "true";
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (dryRun) {
    console.info("[lead form — dry run] Email not sent. Contents:\n" + text);
    return success;
  }

  if (!apiKey || !to || !from) {
    console.error("[lead form] Missing RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL. See .env.example.");
    return {
      status: "error",
      message: "Sorry, our form isn't working right now. Please email or call us directly using the details on this page.",
      values: raw,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { data: sent, error } = await resend.emails.send({
      from,
      to: to.split(",").map((s) => s.trim()),
      replyTo: data.email,
      subject: `New enquiry: ${data.firstName} ${data.lastName}${data.institution ? ` — ${data.institution}` : ""}`,
      text,
      html,
    });
    if (error) throw new Error(error.message);
    console.info(`[lead form] Email sent to ${to} (Resend id: ${sent?.id ?? "unknown"})`);
  } catch (err) {
    console.error("[lead form] Email send failed", err);
    return {
      status: "error",
      message: "Sorry, something went wrong sending your enquiry. Please try again, or contact us by phone or email.",
      values: raw,
    };
  }

  return success;
}
