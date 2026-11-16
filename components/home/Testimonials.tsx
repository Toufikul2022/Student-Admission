import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

/**
 * TODO: replace with real, consented testimonials.
 * Never publish invented reviews or names. Keep written consent on file for
 * each testimonial, and avoid quotes that imply guaranteed outcomes.
 */
type Testimonial = { quote: string; name: string; detail: string };

const testimonials: Testimonial[] = [];

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="py-16 sm:py-20">
      <Container>
        <SectionHeading id="testimonials-title" eyebrow="Student stories" title="In their own words" align="center" />
        <ul className="grid gap-5 md:grid-cols-3">
          {testimonials.length > 0
            ? testimonials.map((t) => (
                <li key={t.name}>
                  <Card className="h-full p-6">
                    <Quote aria-hidden="true" className="size-8 text-accent-500" />
                    <blockquote className="mt-4 leading-relaxed text-ink">“{t.quote}”</blockquote>
                    <p className="mt-4 font-semibold text-ink">{t.name}</p>
                    <p className="text-sm text-slate">{t.detail}</p>
                  </Card>
                </li>
              ))
            : [1, 2, 3].map((n) => (
                <li key={n}>
                  <Card className="flex h-full flex-col border-dashed p-6">
                    <Quote aria-hidden="true" className="size-8 text-primary-200" />
                    <p className="mt-4 flex-1 leading-relaxed text-slate">
                      Testimonial placeholder. Real student stories will appear here once we have their written consent
                      to share them.
                    </p>
                    <p className="mt-4 text-sm font-semibold text-slate">Coming soon</p>
                  </Card>
                </li>
              ))}
        </ul>
      </Container>
    </section>
  );
}
