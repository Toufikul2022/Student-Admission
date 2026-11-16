import Image from "next/image";
import { MapleLeaf } from "@/components/home/MapleLeaf";
import { pageImages, type PageImageKey } from "@/content/page-images";
import { cn } from "@/lib/cn";

/**
 * A page photo with the maple-leaf brand mark.
 * Cut-out photos stand in front of a large leaf; framed photos get a leaf
 * peeking out from behind the top-right corner.
 */
export function LeafPhoto({ image, priority, className }: { image: PageImageKey; priority?: boolean; className?: string }) {
  const img = pageImages[image];
  if (img.cutout) {
    return (
      <div className={cn("relative isolate", className)}>
        <MapleLeaf className="absolute top-0 left-1/2 -z-10 w-[88%] -translate-x-1/2 text-primary-600" />
        <Image
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          priority={priority}
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="relative h-auto w-full"
        />
      </div>
    );
  }
  return (
    <div className={cn("relative isolate", className)}>
      <MapleLeaf className="absolute -top-[15%] -right-[4%] -z-10 w-[34%] rotate-12 text-primary-600 sm:-right-[9%] sm:w-[38%]" />
      <Image
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        priority={priority}
        sizes="(min-width: 1024px) 45vw, 90vw"
        className="relative h-auto w-full rounded-2xl shadow-card-hover ring-4 ring-white"
      />
    </div>
  );
}
