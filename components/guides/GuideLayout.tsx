import Link from "next/link";
import { CalendarClock, Lightbulb, MessageSquareText } from "lucide-react";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buttonClasses } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { Faq } from "@/components/home/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, type Crumb } from "@/lib/schema";
import { reviewInfo } from "@/content/review-dates";
import { formatDate } from "@/lib/data";
import { cn } from "@/lib/cn";

export type SectionNav = { title: string; links: { label: string; href: string }[] };

export const STUDY_NAV: SectionNav = {
  title: "Study in Canada",
  links: [
    { label: "Overview", href: "/study-in-canada" },
    { label: "Costs & budgeting", href: "/study-in-canada/costs" },
    { label: "Intakes & timelines", href: "/study-in-canada/intakes" },
    { label: "Language tests", href: "/study-in-canada/language-tests" },
    { label: "Scholarships", href: "/study-in-canada/scholarships" },
    { label: "Study in Manitoba", href: "/study-in-canada/provinces/manitoba" },
  ],
};

export const VISA_NAV: SectionNav = {
  title: "Visa & Immigration",
  links: [
    { label: "Overview", href: "/visa-immigration" },
    { label: "Study permit", href: "/visa-immigration/study-permit" },
    { label: "Spousal open work permit", href: "/visa-immigration/spousal-open-work-permit" },
    { label: "Post-Graduation Work Permit", href: "/visa-immigration/pgwp" },
    { label: "Study permit refusal", href: "/visa-immigration/study-permit-refusal" },
    { label: "Pathways to PR", href: "/visa-immigration/pathways-to-pr" },
  ],
};

/** "Last reviewed" line, driven by content/review-dates.ts */
export function ReviewLine({ path }: { path: string }) {
  const r = reviewInfo(path);
  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate">
      <CalendarClock aria-hidden="true" className="size-4 text-primary-600" />
      <span>
        Last reviewed:{" "}
        <strong className="text-ink">{r.reviewed ? formatDate(r.reviewed) : "Pending professional review"}</strong>
      </span>
      {!r.reviewed && <span>(draft written {formatDate(r.drafted)})</span>}
    </p>
  );
}

/**
 * Layout for every guide page: breadcrumbs, H1, "Last reviewed", a short direct
 * answer at the top (easy for search engines and AI assistants to quote),
 * article body, sidebar with section links + CTA, optional FAQ, bottom CTA band.
 */
export function GuideLayout({
  title,
  description,
  path,
  crumbs,
  answer,
  nav,
  faqs,
  children,
  beforeCta,
}: {
  title: string;
  description: string;
  path: string;
  crumbs: Crumb[];
  answer: ReactNode;
  nav: SectionNav;
  faqs?: { q: string; a: string }[];
  children: ReactNode;
  beforeCta?: ReactNode;
}) {
  const r = reviewInfo(path);
  return (
    <>
      <JsonLd
        data={articleSchema({
          title,
          description,
          path,
          datePublished: r.drafted,
          dateModified: r.reviewed ?? r.drafted,
        })}
      />
      <section className="border-b border-line bg-gradient-to-b from-primary-50 to-white pt-8 pb-10">
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-ink text-balance sm:text-5xl">{title}</h1>
          <div className="mt-4">
            <ReviewLine path={path} />
          </div>
        </Container>
      </section>

      <Container className="grid gap-10 py-12 lg:grid-cols-[1fr_19rem]">
        <article className="min-w-0">
          <div className="mb-10 flex gap-4 rounded-2xl border-l-4 border-accent-500 bg-accent-50 p-5 sm:p-6">
            <Lightbulb aria-hidden="true" className="mt-1 size-6 shrink-0 text-accent-700" />
            <div>
              <p className="text-sm font-bold tracking-wider text-accent-800 uppercase">The short answer</p>
              <div className="mt-2 text-lg leading-relaxed text-ink">{answer}</div>
            </div>
          </div>
          <div className="prose-guide">{children}</div>
        </article>

        <aside aria-label={`More in ${nav.title}`} className="space-y-6">
          <div className="space-y-6 lg:sticky lg:top-24">
            <nav aria-label={nav.title} className="rounded-2xl border border-line bg-white p-5">
              <p className="mb-3 text-sm font-bold tracking-wider text-slate uppercase">{nav.title}</p>
              <ul className="space-y-1">
                {nav.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      aria-current={l.href === path ? "page" : undefined}
                      className={cn(
                        "block rounded-lg px-3 py-2 text-sm font-semibold",
                        l.href === path ? "bg-primary-50 text-primary-700" : "text-ink hover:bg-mist",
                      )}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="rounded-2xl bg-primary-700 p-6 text-white shadow-card">
              <MessageSquareText aria-hidden="true" className="size-8 text-accent-400" />
              <p className="mt-3 text-lg font-bold">Have a question about your situation?</p>
              <p className="mt-2 text-sm text-primary-100">Every application is different. Talk to us before you apply.</p>
              <Link href="/contact" className={buttonClasses("accent", "md", "mt-5 w-full")}>
                Book a free consultation
              </Link>
            </div>
          </div>
        </aside>
      </Container>

      {beforeCta}
      {faqs && faqs.length > 0 && (
        <div className="border-t border-line">
          <Faq faqs={faqs} title="Questions students ask" id="guide-faq" />
        </div>
      )}
      <CtaBand />
    </>
  );
}
