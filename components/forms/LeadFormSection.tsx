import { Clock, MessageCircle, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { whatsappLink } from "@/config/site";
import { LeadForm } from "./LeadForm";

/** "Talk to an advisor" band: heading + reassurance points + the lead form. */
export function LeadFormSection({
  title = "Talk to an advisor",
  description = "Tell us a little about your plans and we'll get back to you with next steps. The first consultation is free.", // TODO: confirm free-consultation offer
  institution,
  id = "talk-to-an-advisor",
}: {
  title?: string;
  description?: string;
  institution?: string;
  id?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="bg-mist py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading id={`${id}-title`} eyebrow="Free consultation" title={title} description={description} />
          <ul className="space-y-5">
            <li className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary-600 shadow-card">
                <ShieldCheck aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="font-semibold text-ink">Licensed professionals</p>
                <p className="text-sm text-slate">Immigration advice comes from licensed legal professionals — not unregulated agents.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary-600 shadow-card">
                <Clock aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="font-semibold text-ink">A quick reply</p>
                {/* TODO: confirm the response time you can commit to */}
                <p className="text-sm text-slate">We aim to reply within one business day.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary-600 shadow-card">
                <MessageCircle aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="font-semibold text-ink">Prefer to chat?</p>
                <p className="text-sm text-slate">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-700 underline">
                    Message us on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <Card className="p-6 sm:p-8 lg:col-span-7">
          <LeadForm institution={institution} idPrefix={id} />
        </Card>
      </Container>
    </section>
  );
}
