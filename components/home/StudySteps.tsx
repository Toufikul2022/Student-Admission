import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { studySteps } from "@/content/home";
import { HomePhoto } from "./HomePhoto";

export function StudySteps() {
  return (
    <section aria-labelledby="steps-title" className="overflow-hidden bg-mist pt-16 sm:pt-20">
      <Container>
        <SectionHeading id="steps-title" title="Your study steps" underline />
        <div className="grid items-center gap-14 pb-16 sm:pb-20 lg:grid-cols-2">
          <div className="order-2 mx-auto -mb-16 w-full max-w-sm self-end px-6 pt-8 sm:-mb-20 lg:order-1">
            {/* To change this photo, replace public/images/home/steps.webp */}
            <HomePhoto slot="steps" />
          </div>
          <div className="order-1 lg:order-2">
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
