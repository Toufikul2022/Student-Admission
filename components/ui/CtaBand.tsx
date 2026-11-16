import { CalendarCheck, MessageCircle } from "lucide-react";
import { Button } from "./Button";
import { Container } from "./Container";
import { whatsappLink } from "@/config/site";

/** Full-width call-to-action band used at the bottom of most pages. */
export function CtaBand({
  title = "Not sure where to start?",
  description = "Book a free consultation. We'll talk through your goals, budget and timeline, and explain your options in plain language.",
  primaryLabel = "Book a Free Consultation",
  primaryHref = "/contact",
  showWhatsapp = true,
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  showWhatsapp?: boolean;
}) {
  return (
    <section aria-labelledby="cta-band-title" className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-primary-700 px-6 py-12 sm:px-12 sm:py-14">
          <div aria-hidden="true" className="absolute -top-24 -right-24 size-72 rounded-full bg-primary-600/60" />
          <div aria-hidden="true" className="absolute -bottom-32 left-1/3 size-72 rounded-full bg-accent-500/15" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 id="cta-band-title" className="text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl">
                {title}
              </h2>
              <p className="mt-3 text-lg text-primary-100">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={primaryHref} variant="accent" size="lg">
                <CalendarCheck aria-hidden="true" className="size-5" />
                {primaryLabel}
              </Button>
              {showWhatsapp && (
                <Button href={whatsappLink()} variant="white" size="lg">
                  <MessageCircle aria-hidden="true" className="size-5" />
                  Chat on WhatsApp
                  <span className="sr-only"> (opens in a new tab)</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
