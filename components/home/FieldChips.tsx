import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fields } from "@/lib/data";

export function FieldChips() {
  return (
    <section aria-labelledby="fields-title" className="bg-primary-800 py-16 sm:py-20">
      <Container>
        <SectionHeading
          id="fields-title"
          invert
          eyebrow="Popular fields of study"
          title="What do you want to study?"
          description="Pick a field to see institutions that offer it."
        />
        <ul className="flex flex-wrap gap-3">
          {fields.map((f) => (
            <li key={f.slug}>
              <Link
                href={`/find-university?field=${f.slug}`}
                className="inline-flex rounded-full border border-white/25 bg-white/10 px-5 py-2.5 font-semibold text-white transition-colors hover:border-accent-400 hover:bg-accent-500 hover:text-ink"
              >
                {f.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
