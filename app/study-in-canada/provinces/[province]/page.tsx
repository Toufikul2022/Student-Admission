import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideLayout, STUDY_NAV } from "@/components/guides/GuideLayout";
import { OfficialSources } from "@/components/guides/Sources";
import { Container } from "@/components/ui/Container";
import { InstitutionCard } from "@/components/institutions/InstitutionCard";
import { institutions, provinceBySlug, provinces } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ province: string }> };

export function generateStaticParams() {
  return provinces.map((p) => ({ province: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = provinceBySlug((await params).province);
  if (!p) return {};
  return pageMetadata({
    title: `Study in ${p.name} as an International Student`,
    description: `What it's like to study in ${p.name}: major cities, institutions, climate, cost of living and things to know before you apply.`,
    path: `/study-in-canada/provinces/${p.slug}`,
    type: "article",
  });
}

export default async function ProvincePage({ params }: Props) {
  const p = provinceBySlug((await params).province);
  if (!p) notFound();
  const path = `/study-in-canada/provinces/${p.slug}`;
  const here = institutions.filter((i) => i.province === p.slug).sort((a, b) => b.popularity - a.popularity);
  const isQuebec = p.slug === "quebec";

  return (
    <GuideLayout
      title={`Study in ${p.name}`}
      description={`Studying and living in ${p.name}: main cities, what to know before you apply, and institutions you can choose from.`}
      path={path}
      crumbs={[
        { name: "Study in Canada", href: "/study-in-canada" },
        { name: p.name, href: path },
      ]}
      nav={STUDY_NAV}
      image="study-in-canada"
      answer={<p>{p.overview}</p>}
      beforeCta={
        here.length > 0 ? (
          <section aria-labelledby="province-institutions" className="bg-mist py-16">
            <Container>
              <h2 id="province-institutions" className="text-3xl font-bold tracking-tight">
                Institutions in {p.name}
              </h2>
              <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {here.slice(0, 6).map((inst) => (
                  <li key={inst.slug}>
                    <InstitutionCard inst={inst} />
                  </li>
                ))}
              </ul>
              <Link href={`/find-university?province=${p.slug}`} className="mt-8 inline-block font-semibold text-primary-700 underline">
                See all institutions in {p.name}
              </Link>
            </Container>
          </section>
        ) : null
      }
    >
      <h2 id="cities">Where do students live in {p.name}?</h2>
      <p>Main cities for post-secondary study include {p.majorCities.join(", ")}.</p>

      <h2 id="highlights">What should I know about {p.name}?</h2>
      <ul>
        {p.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      {p.specialNote && (
        <>
          <h2 id="special">Is there anything different about studying in {p.name}?</h2>
          <p>{p.specialNote}</p>
        </>
      )}

      <h2 id="apply">How do I apply to institutions in {p.name}?</h2>
      <p>
        You apply directly to each university or college, usually online. Check each program&apos;s academic and
        language requirements, intakes and deadlines on the institution&apos;s official website.{" "}
        <Link href="/contact">Get help with your applications</Link>.
      </p>

      <h2 id="explore">Find institutions in {p.name}</h2>
      <p>
        {here.length > 0 ? (
          <>
            We currently list {here.length} {here.length === 1 ? "institution" : "institutions"} in {p.name}.{" "}
            <Link href={`/find-university?province=${p.slug}`}>Browse them all</Link>.
          </>
        ) : (
          <>
            We haven&apos;t added institutions in {p.name} to our search yet.{" "}
            <Link href="/contact">Ask an advisor</Link> about options here.
          </>
        )}
      </p>

      <OfficialSources keys={isQuebec ? ["quebec_study", "educanada", "dli_list"] : ["educanada", "dli_list"]} />
      <p className="mt-6 text-sm">
        Provincial government website:{" "}
        <a href={p.officialSite} target="_blank" rel="noopener noreferrer">
          {p.officialSite.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </p>
    </GuideLayout>
  );
}
