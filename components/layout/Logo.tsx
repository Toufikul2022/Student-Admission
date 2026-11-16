import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

/**
 * Placeholder wordmark: an original "route to destination" mark + brand name.
 * TODO: replace with the final logo (SVG preferred) once the brand is designed.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("size-9 shrink-0", className)}>
      <rect width="64" height="64" rx="16" fill="#0B6BDB" />
      <path d="M14 46c8 0 10-10 18-10s9-12 18-14" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <path d="M12 52h40" stroke="#9FCBF0" strokeWidth="3" strokeLinecap="round" />
      <circle cx="50" cy="20" r="6" fill="#F27B0F" />
    </svg>
  );
}

export function Logo({ invert }: { invert?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 rounded-lg" aria-label={`${siteConfig.name} — home`}>
      <LogoMark />
      <span className={cn("text-lg font-bold tracking-tight", invert ? "text-white" : "text-ink")}>{siteConfig.name}</span>
    </Link>
  );
}
