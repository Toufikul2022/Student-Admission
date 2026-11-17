import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

/** Single-line office address, e.g. "1651 Chancellor Dr, Winnipeg, MB R3T 4B8, Canada". */
export function officeAddressLine() {
  const a = siteConfig.contact.address;
  return [a.line1, a.line2, a.city, `${a.province} ${a.postalCode}`, a.country].filter((x) => x && x.trim()).join(", ");
}

/**
 * Google Maps embed of the office (no API key needed) plus a "Get directions" link.
 * The map only loads when scrolled into view, so it doesn't slow the page down.
 */
export function OfficeMap({ className }: { className?: string }) {
  const address = officeAddressLine();
  const q = encodeURIComponent(address);
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-line bg-white", className)}>
      <iframe
        title={`Map showing the ${siteConfig.name} office at ${address}`}
        src={`https://www.google.com/maps?q=${q}&z=15&output=embed`}
        className="block aspect-[4/3] w-full border-0 bg-mist"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="flex flex-wrap items-center justify-between gap-3 p-4">
        <p className="text-sm text-slate">{address}</p>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${q}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-primary-600 px-5 text-sm font-medium text-white hover:bg-primary-700"
        >
          Get directions
          <ExternalLink aria-hidden="true" className="size-4" />
          <span className="sr-only">(opens Google Maps in a new tab)</span>
        </a>
      </div>
    </div>
  );
}
