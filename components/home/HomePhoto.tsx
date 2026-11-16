import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { MapleLeaf } from "./MapleLeaf";

type Slot = "hero" | "steps" | "banner" | "form";

const ALT: Record<Slot, string> = {
  hero: "Smiling student giving a thumbs up in front of the Canadian flag",
  steps: "Graduate in cap and gown holding a small Canadian flag",
  banner: "Student with a backpack waving a Canadian flag",
  form: "Books and a graduation cap in front of the Canadian flag",
};

/** Where the maple leaf sits behind each photo. */
const LEAF: Record<Slot, string> = {
  hero: "-top-[24%] -left-[14%] w-[44%] -rotate-12",
  steps: "-top-[24%] -right-[14%] w-[42%] rotate-12",
  banner: "-top-[22%] -left-[16%] w-[44%] -rotate-12",
  form: "-top-[24%] -right-[12%] w-[42%] rotate-12",
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
 * Home page photo on a red maple-leaf background.
 * To change a photo, replace public/images/home/<slot>.webp (see README.txt there).
 * Larger originals (at least 1200px wide) will look sharper.
 */
export function HomePhoto({ slot, className, priority }: { slot: Slot; className?: string; priority?: boolean }) {
  const src = findPhoto(slot);
  return (
    <div className={cn("relative isolate", className)}>
      <MapleLeaf className={cn("absolute -z-10 text-primary-600", LEAF[slot])} />
      {src ? (
        <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-card-hover ring-4 ring-white">
          <Image src={src} alt={ALT[slot]} fill priority={priority} sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
        </div>
      ) : (
        <div className="relative aspect-[3/2]" />
      )}
    </div>
  );
}
