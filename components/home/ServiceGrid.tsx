import Link from "next/link";
import { Award, ChevronRight, FileCheck2, GraduationCap, Languages, NotebookPen, Route } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/home";

const icons = { school: GraduationCap, file: FileCheck2, pen: NotebookPen, award: Award, languages: Languages, route: Route };

export function ServiceGrid() {
  return (
    <section aria-labelledby="services-title" className="bg-cloud py-16 sm:py-20">
      <Container>
        <SectionHeading id="services-title" title="How we can help you" underline />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = icons[s.icon];
            return (
              <li key={s.title} className="flex flex-col rounded-2xl border border-slate/30 bg-white p-7">
                <Icon aria-hidden="true" className="size-9 text-primary-600" strokeWidth={1.75} />
                <h3 className="mt-4 text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-ink/80">{s.body}</p>
                <Link href={s.href} className="mt-6 inline-flex items-center gap-1 self-start font-semibold text-primary-700 hover:underline">
                  Learn more<span className="sr-only"> about {s.title.toLowerCase()}</span>
                  <ChevronRight aria-hidden="true" className="size-4" />
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
