import type { ReactNode } from "react";
import { Container } from "./Container";
import { Breadcrumbs } from "./Breadcrumbs";
import { LeafPhoto } from "./LeafPhoto";
import { MapleLeaf } from "@/components/home/MapleLeaf";
import { pageImages, type PageImageKey } from "@/content/page-images";
import type { Crumb } from "@/lib/schema";
import { cn } from "@/lib/cn";

/**
 * Grey hero banner for inner pages, matching the home page:
 * breadcrumbs, H1, intro and extras on the left; maple-leaf photo on the right.
 * Without an image, a faint maple leaf watermark is shown instead.
 */
export function PageHero({
  crumbs,
  title,
  intro,
  image,
  children,
}: {
  crumbs: Crumb[];
  title: ReactNode;
  intro?: ReactNode;
  image?: PageImageKey;
  children?: ReactNode;
}) {
  const cutout = image ? pageImages[image].cutout : false;
  return (
    <section className="relative overflow-hidden bg-cloud">
      {!image && (
        <MapleLeaf className="pointer-events-none absolute -top-16 -right-16 w-[22rem] rotate-12 text-primary-600/10 sm:w-[30rem]" />
      )}
      <Container
        className={cn(
          "relative grid gap-10 md:items-center",
          image ? "md:grid-cols-[1.1fr_1fr]" : "",
          cutout ? "pt-8 sm:pt-10" : "py-8 sm:py-12",
        )}
      >
        <div className={cn(cutout && "pb-10 sm:pb-14")}>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 max-w-3xl text-4xl font-bold text-ink text-balance sm:text-5xl">{title}</h1>
          {intro && <div className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/80 sm:text-xl">{intro}</div>}
          {children && <div className="mt-6">{children}</div>}
        </div>
        {image && (
          <LeafPhoto
            image={image}
            priority
            className={cn(
              "mx-auto hidden w-full md:block",
              cutout ? "max-w-md self-end pt-6" : "max-w-xl pt-20 pb-6",
            )}
          />
        )}
      </Container>
    </section>
  );
}
