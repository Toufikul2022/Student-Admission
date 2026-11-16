import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { popularFields } from "@/content/home";

/** "Popular fields of study" — bordered link tiles that open a filtered search. */
export function FieldChips() {
  return (
    <section aria-labelledby="fields-title" className="bg-mist py-16 sm:py-20">
      <Container>
        <SectionHeading id="fields-title" title="Popular fields of study" underline />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularFields.map((f) => (
            <li key={f.href}>
              <Link
                href={f.href}
                className="flex items-center justify-between rounded-xl border border-slate/40 bg-white px-6 py-5 text-ink transition-colors hover:border-primary-600 hover:text-primary-700"
              >
                {f.label}
                <ChevronRight aria-hidden="true" className="size-5" />
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/find-university/programs" className="mt-8 inline-flex items-center gap-1 font-semibold text-primary-700 hover:underline">
          View all programs <ChevronRight aria-hidden="true" className="size-4" />
        </Link>
      </Container>
    </section>
  );
}
