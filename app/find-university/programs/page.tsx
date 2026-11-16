import { Suspense } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { ProgramExplorer } from "@/components/institutions/ProgramExplorer";
import { ProgramCard } from "@/components/institutions/ProgramCard";
import { ListingIntro } from "@/components/institutions/ListingIntro";
import { programs } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Search Programs at Canadian Universities and Colleges",
  description:
    "Search diplomas, bachelor's, postgraduate certificates, master's and PhD programs in Canada by field, level, location, tuition and intake.",
  path: "/find-university/programs",
});

function StaticList() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{programs.length} programs in Canada</h1>
      <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {programs.map((p) => (
          <li key={p.id}>
            <ProgramCard program={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProgramsPage() {
  return (
    <>
      <section className="pt-8 pb-4 sm:pt-10">
        <Container>
          <ListingIntro
            crumbs={[
              { name: "Find University", href: "/find-university" },
              { name: "Programs", href: "/find-university/programs" },
            ]}
            lede={
              <>
                Search individual programs across Canadian institutions. Prefer to browse by school?{" "}
                <Link href="/find-university" className="font-semibold text-primary-700 underline">
                  Search institutions
                </Link>
                .
              </>
            }
          />
          <Suspense fallback={<StaticList />}>
            <ProgramExplorer />
          </Suspense>
        </Container>
      </section>
      <CtaBand title="Not sure which program fits?" description="We'll look at your background and goals and help you compare programs — including how each choice may affect work and immigration options later." />
    </>
  );
}
