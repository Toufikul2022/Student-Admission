import { Clock, MessageCircle, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HomePhoto } from "@/components/home/HomePhoto";
import { whatsappLink } from "@/config/site";
import { LeadForm } from "./LeadForm";

/** "Talk to an advisor" band: heading + form on the left, artwork and reassurance on the right. */
export function LeadFormSection({
  title = "Speak to an advisor today",
  description = "Thinking about a Canadian college or university? Book a free consultation. We'll help at every stage — from choosing a program to preparing your study permit.", // TODO: confirm free-consultation offer
  institution,
  id = "talk-to-an-advisor",
}: {
  title?: string;
  description?: string;
  institution?: string;
  id?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="bg-primary-50 py-16 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading id={`${id}-title`} title={title} description={description} underline className="mb-8" />
          <LeadForm institution={institution} idPrefix={id} />
        </div>
        <div className="hidden lg:col-span-5 lg:block">
          <div className="sticky top-24">
            {/* Photo slot: add public/images/home/form.png (see README.txt there) */}
            <HomePhoto slot="form" className="mx-auto max-w-sm" />
            <ul className="mt-8 space-y-4">
              <li className="flex gap-3">
                <ShieldCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary-600" />
                <p className="text-sm text-ink">
                  <strong>Licensed professionals.</strong> Immigration advice comes from licensed legal professionals.
                </p>
              </li>
              <li className="flex gap-3">
                <Clock aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary-600" />
                {/* TODO: confirm the response time you can commit to */}
                <p className="text-sm text-ink">
                  <strong>A quick reply.</strong> We aim to reply within one business day.
                </p>
              </li>
              <li className="flex gap-3">
                <MessageCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary-600" />
                <p className="text-sm text-ink">
                  <strong>Prefer to chat?</strong>{" "}
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-700 underline">
                    Message us on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
