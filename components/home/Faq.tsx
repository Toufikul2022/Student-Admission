import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";

/** FAQ accordion + FAQPage JSON-LD. Answers are plain text so they match the schema exactly. */
export function Faq({
  faqs,
  title = "Frequently asked questions",
  id = "faq",
}: {
  faqs: { q: string; a: string }[];
  title?: string;
  id?: string;
}) {
  return (
    <section aria-labelledby={`${id}-title`} className="py-16 sm:py-20">
      <Container className="max-w-4xl">
        <SectionHeading id={`${id}-title`} eyebrow="FAQ" title={title} align="center" />
        <Accordion items={faqs.map((f, i) => ({ id: `${id}-${i}`, title: f.q, content: <p>{f.a}</p> }))} />
        <JsonLd data={faqSchema(faqs)} />
      </Container>
    </section>
  );
}
