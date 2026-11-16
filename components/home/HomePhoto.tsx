import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { StudentArt } from "./StudentArt";

type Slot = "hero" | "steps" | "banner" | "form";

const ALT: Record<Slot, string> = {
  // TODO: adjust alt text to describe your actual photos
  hero: "Smiling international student",
  steps: "Student holding books and a laptop",
  banner: "Student with arms crossed, smiling",
  form: "Student holding a notebook",
};

/** Looks for public/images/home/<slot>.(webp|png|jpg|jpeg) at build time. */
function findPhoto(slot: Slot) {
  for (const ext of ["webp", "png", "jpg", "jpeg"]) {
    const rel = `/images/home/${slot}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", rel))) return rel;
  }
  return null;
}

/**
 * Photo slot for the home page. Drop your own licensed photo into
 * public/images/home/ (hero, steps, banner or form + .webp/.png/.jpg) and it
 * replaces the placeholder drawing automatically on the next build.
 * Cut-out photos with a transparent background (PNG/WebP) look best.
 */
export function HomePhoto({ slot, className, priority }: { slot: Slot; className?: string; priority?: boolean }) {
  const src = findPhoto(slot);
  if (!src) return <StudentArt variant={slot} className={className} />;
  return (
    <Image
      src={src}
      alt={ALT[slot]}
      width={800}
      height={1000}
      priority={priority}
      sizes="(min-width: 1024px) 40vw, 80vw"
      className={className ? `${className} object-contain object-bottom` : "h-auto w-full object-contain object-bottom"}
    />
  );
}
