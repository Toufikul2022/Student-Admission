import { Info } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import type { Crumb } from "@/lib/schema";
import type { PageImageKey } from "@/content/page-images";

/** Hero banner + sample-data notice for the institution and program listings. */
export function ListingIntro({
  crumbs,
  title,
  lede,
  image = "find-university",
}: {
  crumbs: Crumb[];
  title: string;
  lede: React.ReactNode;
  image?: PageImageKey;
}) {
  return (
    <>
      <PageHero crumbs={crumbs} title={title} intro={lede} image={image} />
      <Container className="pt-8">
        {/* TODO: remove this notice once every record has been verified and "sample" is false */}
        <p className="flex max-w-3xl gap-2 rounded-xl border border-line bg-mist p-3 text-sm text-ink">
          <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary-600" />
          <span>
            Listings marked <strong>Sample data</strong> are still being verified. Tuition and intakes shown as{" "}
            <strong>TBC</strong> must be confirmed on each institution&apos;s official website.
          </span>
        </p>
      </Container>
    </>
  );
}
