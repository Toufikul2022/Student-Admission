"use client";

import Script from "next/script";
import Link from "next/link";
import { useSyncExternalStore } from "react";

/**
 * Analytics are OFF unless NEXT_PUBLIC_ANALYTICS is set (see .env.example):
 *  - "plausible": cookieless, loads without a banner
 *  - "ga4":       uses cookies, so it only loads after the visitor accepts the banner
 */
const PROVIDER = process.env.NEXT_PUBLIC_ANALYTICS;
const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const KEY = "cookie-consent";

type Consent = "granted" | "denied" | null;
const listeners = new Set<() => void>();

function read(): Consent {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}
function write(v: Exclude<Consent, null>) {
  try {
    window.localStorage.setItem(KEY, v);
  } catch {
    /* storage blocked: consent lasts for this page view only */
  }
  memory = v;
  listeners.forEach((l) => l());
}
let memory: Consent = null;
const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};
const getSnapshot = () => memory ?? read();
const getServerSnapshot = (): Consent | "unknown" => "unknown";

export function Analytics() {
  const consent = useSyncExternalStore<Consent | "unknown">(subscribe, getSnapshot, getServerSnapshot);

  if (PROVIDER === "plausible" && PLAUSIBLE_DOMAIN) {
    return <Script defer data-domain={PLAUSIBLE_DOMAIN} src="https://plausible.io/js/script.js" strategy="afterInteractive" />;
  }

  if (PROVIDER !== "ga4" || !GA_ID || consent === "unknown") return null;

  if (consent === "granted") {
    return (
      <>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
        </Script>
      </>
    );
  }

  if (consent === "denied") return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-2xl border border-line bg-white p-5 shadow-card-hover sm:inset-x-6"
    >
      <p className="text-sm text-ink">
        We&apos;d like to use analytics cookies to understand how visitors use this site, so we can improve it. You can
        say no and the site will work the same. See our{" "}
        <Link href="/privacy-policy" className="font-semibold text-primary-700 underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => write("granted")} className="h-10 rounded-full bg-primary-600 px-5 text-sm font-semibold text-white hover:bg-primary-700">
          Accept analytics
        </button>
        <button type="button" onClick={() => write("denied")} className="h-10 rounded-full border-2 border-primary-600 px-5 text-sm font-semibold text-primary-700 hover:bg-primary-50">
          Decline
        </button>
      </div>
    </div>
  );
}
