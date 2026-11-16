import Link from "next/link";
import { ArrowRight, FileCheck2, GraduationCap, NotebookPen, RefreshCcw, Route, Stamp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { services } from "@/content/home";

const icons = { school: GraduationCap, file: FileCheck2, pen: NotebookPen, passport: Stamp, refresh: RefreshCcw, route: Route };

export function ServiceGrid() {
  return (
    <section aria-labelledby="services-title" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          id="services-title"
          eyebrow="How we help"
          title="Support from first shortlist to first day on campus"
          description="Use one service or all of them. We'll be clear about what we can do, what's up to you, and what's decided by institutions and IRCC."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = icons[s.icon];
            return (
              <li key={s.title}>
                <Card interactive className="group relative flex h-full flex-col p-6">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">
                    <Link href={s.href} className="after:absolute after:inset-0 after:rounded-2xl">
                      {s.title}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 leading-relaxed text-slate">{s.body}</p>
                  <span aria-hidden="true" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-700">
                    Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Card>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
