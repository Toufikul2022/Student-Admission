import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { studySteps } from "@/content/home";
import { StudentArt } from "./StudentArt";

export function StudySteps() {
  return (
    <section aria-labelledby="steps-title" className="overflow-hidden bg-mist pt-16 sm:pt-20">
      <Container>
        <SectionHeading id="steps-title" title="Your study steps" underline />
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <div className="order-2 mx-auto w-full max-w-md lg:order-1">
            {/* TODO: replace with a licensed student photo */}
            <StudentArt variant="steps" />
          </div>
          <div className="order-1 pb-0 lg:order-2 lg:self-start lg:pb-16">
            <Accordion
              variant="separated"
              items={studySteps.map((s, i) => ({
                id: s.id,
                title: (
                  <span className="text-base font-medium">
                    <span className="sr-only">Step {i + 1}: </span>
                    {s.title}
                  </span>
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
        </div>
      </Container>
    </section>
  );
}
