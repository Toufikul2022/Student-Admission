import Image from "next/image";
import type { Institution } from "@/lib/types";
import { cn } from "@/lib/cn";
import logos from "@/data/logos.json";

/** Shows the institution logo, or initials as a placeholder until a logo is added. */
/**
 * Logo source: a file in public/logos/ named after the slug (see README.txt there),
 * or the "logo" field in institutions.json.
 */
export function InstitutionLogo({ inst, size = "md" }: { inst: Pick<Institution, "slug" | "name" | "logo">; size?: "md" | "lg" }) {
  const dims = size === "lg" ? "size-20 text-2xl" : "size-14 text-lg";
  const src = (logos as Record<string, string>)[inst.slug] ?? inst.logo;
  if (src) {
    return (
      <Image
        src={src}
        unoptimized={src.endsWith(".svg")}
        alt={`${inst.name} logo`}
        width={size === "lg" ? 80 : 56}
        height={size === "lg" ? 80 : 56}
        className={cn(dims, "rounded-xl border border-line bg-white object-contain p-1")}
      />
    );
  }
  const initials = inst.name
    .split(/\s+/)
    .filter((w) => /^[A-ZÀ-Ý]/.test(w))
    .slice(0, 3)
    .map((w) => w[0])
    .join("");
  // TODO: add official logos (with permission) to public/logos/ — see README.txt there
  return (
    <div aria-hidden="true" className={cn(dims, "flex shrink-0 items-center justify-center rounded-xl bg-primary-50 font-bold text-primary-700")}>
      {initials}
    </div>
  );
}
