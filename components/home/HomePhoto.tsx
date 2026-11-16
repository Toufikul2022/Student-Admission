import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { MapleLeaf } from "./MapleLeaf";

type Slot = "hero" | "steps" | "banner" | "form";

const ALT: Record<Slot, string> = {
  hero: "Smiling graduate in cap and gown holding a small Canadian flag",
  steps: "Smiling student with a backpack and a book giving a thumbs up",
  banner: "Smiling student with headphones and a backpack waving a small Canadian flag",
  form: "Smiling student with a backpack pointing to a Canadian flag",
};

/** Where the maple leaf sits behind each framed photo. */
const LEAF: Record<Slot, string> = {
  hero: "-top-[24%] -left-[14%] w-[44%] -rotate-12",
  steps: "-top-[24%] -right-[14%] w-[42%] rotate-12",
  banner: "-top-[22%] -left-[16%] w-[44%] -rotate-12",
  form: "-top-[24%] -right-[12%] w-[42%] rotate-12",
};

/**
 * Slots that use a transparent cut-out photo (person only, no background).
 * These are shown without a frame, standing in front of a large maple leaf.
 */
const CUTOUT: Partial<Record<Slot, true>> = { hero: true, steps: true, banner: true, form: true };

/**
 * Finds public/images/home/<slot>.<ext> or <slot>-<anything>.<ext> at build time.
 * A suffix such as "hero-2027.webp" gives a new URL, so caches never show an old photo.
 */
function findPhoto(slot: Slot) {
  const dir = path.join(process.cwd(), "public", "images", "home");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return null;
  }
  const match = files
    .filter((f) => new RegExp(`^${slot}(-[\\w.-]+)?\\.(webp|png|jpe?g)$`, "i").test(f))
    .sort()
    .pop();
  return match ? `/images/home/${match}` : null;
}

/**
 * Home page photo on a red maple-leaf background.
 * Use high-resolution originals (1000px+); Next.js then serves each device a
 * right-sized copy.
 * To change a photo, replace public/images/home/<slot>.webp (see README.txt there).
 * Larger originals (at least 1200px wide) will look sharper.
 */
export function HomePhoto({ slot, className, priority }: { slot: Slot; className?: string; priority?: boolean }) {
  const src = findPhoto(slot);
  if (src && CUTOUT[slot]) {
    return (
      <div className={cn("relative isolate", className)}>
        <MapleLeaf className="absolute top-0 left-1/2 -z-10 w-[92%] -translate-x-1/2 text-primary-600" />
        <div className="relative aspect-[4/5]">
          <Image src={src} alt={ALT[slot]} fill priority={priority} sizes="(min-width: 1024px) 34vw, (min-width: 768px) 45vw, 90vw" className="object-contain object-bottom" />
        </div>
      </div>
    );
  }
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
