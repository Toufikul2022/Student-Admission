import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { InstitutionCard } from "@/components/institutions/InstitutionCard";
import { institutions } from "@/lib/data";

export function FeaturedInstitutions() {
  const featured = institutions
    .filter((i) => i.featured)
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 6);
  return (
    <section aria-labelledby="featured-title" className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            id="featured-title"
            eyebrow="Featured institutions"
            title="Explore universities and colleges"
            description="A starting point — use the full search to filter by province, level, field and budget."
            className="mb-0"
          />
          <Button href="/find-university" variant="outline" className="shrink-0">
            View all institutions <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((inst) => (
            <li key={inst.slug}>
              <InstitutionCard inst={inst} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
