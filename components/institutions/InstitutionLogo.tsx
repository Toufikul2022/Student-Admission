import Image from "next/image";
import type { Institution } from "@/lib/types";
import { cn } from "@/lib/cn";

/** Shows the institution logo, or initials as a placeholder until a logo is added. */
export function InstitutionLogo({ inst, size = "md" }: { inst: Pick<Institution, "name" | "logo">; size?: "md" | "lg" }) {
  const dims = size === "lg" ? "size-20 text-2xl" : "size-14 text-lg";
  if (inst.logo) {
    return (
      <Image
        src={inst.logo}
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
  // TODO: add official logos (with permission) to /public/logos and set "logo" in institutions.json
  return (
    <div aria-hidden="true" className={cn(dims, "flex shrink-0 items-center justify-center rounded-xl bg-primary-50 font-extrabold text-primary-700")}>
      {initials}
    </div>
  );
}
