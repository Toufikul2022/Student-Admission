import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EmailCard } from "@/components/ui/EmailCard";
import { HomePhoto } from "@/components/home/HomePhoto";
import { LeadForm } from "./LeadForm";

/** "Speak to an advisor" band: short form on the left, photo on the right. */
export function LeadFormSection({
  title = "Speak to an advisor today",
  description = "Thinking about studying at a Canadian college or university? Speak to an advisor. We'll help at every stage, from choosing a program to accepting your offer, and everything in between.",
  institution,
  id = "talk-to-an-advisor",
}: {
  title?: string;
  description?: string;
  institution?: string;
  id?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="bg-mist py-16 sm:py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6 xl:col-span-6">
          <SectionHeading
            id={`${id}-title`}
            title={title}
            description={<span className="text-base sm:text-lg">{description}</span>}
            underline
            className="mb-8"
          />
          <LeadForm institution={institution} idPrefix={id} variant="compact" />
        </div>
        <div className="lg:col-span-6 lg:pl-8">
          {/* To change this photo, replace public/images/home/form-*.webp */}
          <HomePhoto slot="form" className="mx-auto hidden max-w-md px-4 lg:block" />
          <EmailCard className="mx-auto mt-8 max-w-md" />
        </div>
      </Container>
    </section>
  );
}
