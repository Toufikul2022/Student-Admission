import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { studySteps } from "@/content/home";

export function StudySteps() {
  return (
    <section aria-labelledby="steps-title" className="bg-mist py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            id="steps-title"
            eyebrow="Your study steps"
            title="Six steps from choosing a program to landing in Canada"
            description="Every student's timeline is different, but most journeys follow this order. Open each step to see what's involved."
          />
          <Button href="/contact" variant="primary">
            Get a personalised timeline
          </Button>
        </div>
        <div className="lg:col-span-7">
          <Accordion
            defaultOpen={["choose"]}
            items={studySteps.map((s, i) => ({
              id: s.id,
              badge: (
                <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent-500 text-sm font-extrabold text-ink">
                  {i + 1}
                </span>
              ),
              title: (
                <>
                  <span className="sr-only">Step {i + 1}: </span>
                  {s.title}
                </>
              ),
              content: (
                <>
                  <p>{s.body}</p>
                  {s.link && (
                    <Link href={s.link.href} className="mt-3 inline-flex items-center gap-1 font-semibold text-primary-700 hover:underline">
                      {s.link.label} <ArrowRight aria-hidden="true" className="size-4" />
                    </Link>
                  )}
                </>
              ),
            }))}
          />
        </div>
      </Container>
    </section>
  );
}
