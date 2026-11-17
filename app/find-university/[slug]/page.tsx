import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AlertTriangle, ArrowRight, ExternalLink, MapPin, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button, buttonClasses } from "@/components/ui/Button";
import { InstitutionLogo } from "@/components/institutions/InstitutionLogo";
import { LastVerified } from "@/components/institutions/LastVerified";
import { LeadFormSection } from "@/components/forms/LeadFormSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { MapleLeaf } from "@/components/home/MapleLeaf";
import {
  fieldLabel,
  formatCad,
  formatTuitionRange,
  institutionBySlug,
  institutions,
  levelLabel,
  link,
  monthLabel,
  provinceName,
  programsFor,
} from "@/lib/data";
import { institutionSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return institutions.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const inst = institutionBySlug(slug);
  if (!inst) return {};
  return pageMetadata({
    title: `${inst.name} — Programs, Admission & How to Apply`,
    description: `${inst.name} in ${inst.city}, ${provinceName(inst.province)}: programs, intakes, admission requirements and help applying as an international student.`,
    path: `/find-university/${inst.slug}`,
  });
}

export default async function InstitutionPage({ params }: Props) {
  const { slug } = await params;
  const inst = institutionBySlug(slug);
  if (!inst) notFound();
  const progs = programsFor(inst.slug);
  const dli = link("dli_list");

  return (
    <>
      <JsonLd data={institutionSchema(inst)} />

      <section className="relative overflow-hidden bg-cloud pt-8 pb-10">
        <MapleLeaf className="pointer-events-none absolute -top-16 -right-16 w-[22rem] rotate-12 text-primary-600/10 sm:w-[30rem]" />
        <Container className="relative">
          <Breadcrumbs
            items={[
              { name: "Find University", href: "/find-university" },
              { name: inst.name, href: `/find-university/${inst.slug}` },
            ]}
          />
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
            <InstitutionLogo inst={inst} size="lg" />
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight text-ink text-balance sm:text-4xl">{inst.name}</h1>
              <p className="mt-2 flex items-center gap-1.5 text-slate">
                <MapPin aria-hidden="true" className="size-4" />
                {inst.city}, {provinceName(inst.province)}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge tone="primary">{inst.type}</Badge>
                {inst.sample && <Badge tone="accent">Sample data</Badge>}
              </div>
            </div>
          </div>
          <div className="mt-6">
            <LastVerified date={inst.last_verified} sourceUrl={inst.source_url} />
          </div>
        </Container>
      </section>

      <Container className="grid gap-10 py-12 lg:grid-cols-[1fr_20rem]">
        <div className="min-w-0 space-y-12">
          {inst.sample && (
            <div role="note" className="flex gap-3 rounded-2xl border border-accent-100 bg-accent-50 p-4 text-sm text-accent-800">
              <AlertTriangle aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
              <p>
                <strong>This is a sample profile.</strong> Details have not yet been verified against official sources.
                Always confirm programs, fees, deadlines and requirements on the{" "}
                <a href={inst.website} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                  institution&apos;s official website<span className="sr-only"> (opens in a new tab)</span>
                </a>
                .
              </p>
            </div>
          )}

          <section aria-labelledby="overview">
            <h2 id="overview" className="text-2xl font-bold">Overview</h2>
            <p className="mt-3 text-lg leading-relaxed text-slate">{inst.overview}</p>
            <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {[
                ["Institution type", inst.type],
                ["Location", `${inst.city}, ${provinceName(inst.province)}`],
                ["Designated learning institution (DLI) number", inst.dliNumber ?? "To be confirmed"],
                ["Annual tuition (international)", formatTuitionRange(inst.tuitionRangeCad)],
                ["Intakes", inst.intakes.length ? inst.intakes.map(monthLabel).join(", ") : "To be confirmed"],
                ["Study levels", inst.levels.map(levelLabel).join(", ")],
              ].map(([k, v]) => (
                <div key={k} className="bg-white p-4">
                  <dt className="text-sm text-slate">{k}</dt>
                  <dd className="mt-1 font-semibold text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-sm text-slate">
              A DLI is a school approved to accept international students. Check any DLI number against the official{" "}
              <a href={dli.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-700 underline">
                Government of Canada designated learning institutions list<span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="programs" id="programs-section">
            <h2 id="programs" className="text-2xl font-bold">Programs</h2>
            <p className="mt-2 text-slate">Fields offered: {inst.fields.map(fieldLabel).join(", ")}.</p>
            {progs.length ? (
              <div className="mt-5 overflow-x-auto rounded-2xl border border-line">
                <table className="w-full min-w-[40rem] text-left text-sm">
                  <caption className="sr-only">Programs at {inst.name}</caption>
                  <thead className="bg-mist text-ink">
                    <tr>
                      <th scope="col" className="p-3 font-bold">Program</th>
                      <th scope="col" className="p-3 font-bold">Level</th>
                      <th scope="col" className="p-3 font-bold">Duration</th>
                      <th scope="col" className="p-3 font-bold">Tuition</th>
                      <th scope="col" className="p-3 font-bold">Intakes</th>
                      <th scope="col" className="p-3 font-bold">Language requirement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {progs.map((p) => (
                      <tr key={p.id}>
                        <th scope="row" className="p-3 font-semibold text-ink">{p.name}</th>
                        <td className="p-3">{levelLabel(p.level)}</td>
                        <td className="p-3">{p.durationMonths ? `${p.durationMonths} months` : "TBC"}</td>
                        <td className="p-3">{formatCad(p.tuitionPerYearCad)}</td>
                        <td className="p-3">{p.intakes.map(monthLabel).join(", ") || "TBC"}</td>
                        <td className="p-3">{p.languageRequirement ?? "TBC"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="mt-4 rounded-2xl bg-mist p-5 text-slate">Program details for this institution are coming soon. Ask an advisor for current options.</p>
            )}
            <Link href={`/find-university/programs?q=${encodeURIComponent(inst.name)}`} className="mt-4 inline-flex items-center gap-1 font-semibold text-primary-700 hover:underline">
              Search all programs <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </section>

          <section aria-labelledby="admission">
            <h2 id="admission" className="text-2xl font-bold">Admission requirements</h2>
            <ul className="mt-4 space-y-2">
              {inst.admissionRequirements.map((r) => (
                <li key={r} className="flex gap-3 text-slate">
                  <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-accent-500" />
                  {r}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="location">
            <h2 id="location" className="text-2xl font-bold">Location</h2>
            <p className="mt-2 text-slate">
              {inst.campusAddress ?? `${inst.city}, ${provinceName(inst.province)}`} ·{" "}
              <Link href={`/study-in-canada/provinces/${inst.province}`} className="font-semibold text-primary-700 underline">
                Living in {provinceName(inst.province)}
              </Link>
            </p>
            {/* TODO: replace with a Google Maps / OpenStreetMap embed (iframe with a title attribute) for the main campus */}
            <div className="mt-4 flex aspect-[16/7] items-center justify-center rounded-2xl border border-dashed border-line bg-mist text-center text-slate">
              <p>
                <MapPin aria-hidden="true" className="mx-auto mb-2 size-8 text-primary-200" />
                Map placeholder
              </p>
            </div>
          </section>

          <section aria-labelledby="official">
            <h2 id="official" className="text-2xl font-bold">Official website</h2>
            <p className="mt-2 text-slate">For the latest programs, fees and deadlines, always check the institution directly.</p>
            <Button href={inst.website} variant="outline" className="mt-4">
              Visit {inst.name} <ExternalLink aria-hidden="true" className="size-4" />
              <span className="sr-only">(opens in a new tab)</span>
            </Button>
          </section>
        </div>

        {/* Sticky CTA (desktop) */}
        <aside aria-label="Apply with our help" className="hidden lg:block">
          <Card className="sticky top-24 p-6">
            <p className="text-lg font-bold text-ink">Apply to {inst.name} with our help</p>
            <p className="mt-2 text-sm text-slate">
              We can help you check your fit, choose the right program and prepare a strong application.
            </p>
            <a href="#apply" className={buttonClasses("primary", "md", "mt-5 w-full")}>
              <Send aria-hidden="true" className="size-4" />
              Apply with our help
            </a>
          </Card>
        </aside>
      </Container>

      {/* Sticky CTA (mobile) */}
      <div className="sticky bottom-0 z-30 border-t border-line bg-white/95 p-3 backdrop-blur lg:hidden">
        <a href="#apply" className={buttonClasses("primary", "md", "w-full")}>
          <Send aria-hidden="true" className="size-4" />
          Apply with our help
        </a>
      </div>

      <LeadFormSection
        id="apply"
        title={`Get help applying to ${inst.name}`}
        description="Send us a few details and an advisor will contact you about this institution and your program options."
        institution={inst.name}
      />
    </>
  );
}
