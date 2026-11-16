import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { InstitutionExplorer } from "@/components/institutions/InstitutionExplorer";
import { InstitutionCard } from "@/components/institutions/InstitutionCard";
import { ListingIntro } from "@/components/institutions/ListingIntro";
import { buttonClasses } from "@/components/ui/Button";
import { institutions } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Find a University or College in Canada",
  description:
    "Search Canadian universities, colleges and polytechnics by province, city, study level, field, tuition, intake and PGWP eligibility.",
  path: "/find-university",
});

/** Server-rendered list shown before filters load (and to crawlers). */
function StaticList() {
  const sorted = [...institutions].sort((a, b) => b.popularity - a.popularity);
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {sorted.length} institutions in Canada
      </h1>
      <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {sorted.map((inst) => (
          <li key={inst.slug}>
            <InstitutionCard inst={inst} headingLevel={2} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FindUniversityPage() {
  return (
    <>
      <section className="pt-8 pb-4 sm:pt-10">
        <Container>
          <ListingIntro
            crumbs={[{ name: "Find University", href: "/find-university" }]}
            lede={
              <>
                Compare Canadian universities, colleges and polytechnics. Use the filters to narrow by location, level,
                field of study and budget — or{" "}
                <Link href="/find-university/programs" className="font-semibold text-primary-700 underline">
                  search individual programs
                </Link>
                .
              </>
            }
          />
          <Suspense fallback={<StaticList />}>
            <InstitutionExplorer />
          </Suspense>
          <div className="mt-10 text-center">
            <Link href="/find-university/programs" className={buttonClasses("outline")}>
              Search by program instead
            </Link>
          </div>
        </Container>
      </section>
      <CtaBand title="Want help building your shortlist?" description="Tell us your grades, budget and goals. We'll suggest institutions and programs worth a closer look — and flag any that may not suit your plans." />
    </>
  );
}
