import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { OfficeMap } from "@/components/ui/OfficeMap";
import { LeadForm } from "@/components/forms/LeadForm";
import { LeadFormFromUrl } from "@/components/forms/LeadFormFromUrl";
import { siteConfig } from "@/config/site";
import { EmailCard } from "@/components/ui/EmailCard";
import { institutions } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us — Speak to an Advisor",
  description: `Talk to ${siteConfig.name} about studying in Canada. Speak to an advisor by form, phone or email.`,
  path: "/contact",
});

const institutionNames = Object.fromEntries(institutions.map((i) => [i.slug, i.name]));

export default function ContactPage() {
  const c = siteConfig.contact;
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact Us", href: "/contact" }]}
        title="Talk to an advisor"
        intro={
          <>
            Tell us about your study plans and we&apos;ll get back to you with clear next steps. The first consultation
            is free. {/* TODO: confirm free-consultation offer */}
          </>
        }
        image="contact"
      />

      <section aria-labelledby="contact-form-title" className="bg-mist py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6" id="lead-form">
            <SectionHeading
              id="contact-form-title"
              title="Speak to an advisor today"
              description={
                <span className="text-base sm:text-lg">
                  Thinking about studying at a Canadian college or university? Speak to an advisor. We&apos;ll help
                  at every stage, from choosing a program to accepting your offer.
                </span>
              }
              underline
              className="mb-8"
            />
            <Suspense fallback={<LeadForm idPrefix="contact" variant="compact" />}>
              <LeadFormFromUrl institutionNames={institutionNames} idPrefix="contact" variant="compact" />
            </Suspense>
          </div>

          <div className="space-y-6 lg:col-span-6 lg:pl-8">
            <Card className="p-6 sm:p-8">
              <h2 className="text-xl font-bold">Other ways to reach us</h2>
              <ul className="mt-5 space-y-5">
                <li className="flex gap-4">
                  <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary-600" />
                  <div>
                    <p className="font-semibold">Office</p>
                    <address className="text-slate not-italic">
                      {c.address.line1}
                      <br />
                      {c.address.line2 && (
                        <>
                          {c.address.line2}
                          <br />
                        </>
                      )}
                      {c.address.city}, {c.address.province} {c.address.postalCode}
                      <br />
                      {c.address.country}
                    </address>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary-600" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href={`tel:${c.phoneHref}`} className="text-primary-700 underline">{c.phoneDisplay}</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary-600" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href={`mailto:${c.email}`} className="break-all text-primary-700 underline">{c.email}</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary-600" />
                  <div className="flex-1">
                    <p className="font-semibold">Business hours</p>
                    <dl className="mt-1 space-y-1 text-sm">
                      {c.hours.map((h) => (
                        <div key={h.days} className="flex justify-between gap-4">
                          <dt className="text-slate">{h.days}</dt>
                          <dd className="text-right font-medium text-ink">{h.time}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-1 text-xs text-slate">{c.timeZoneNote}</p>
                  </div>
                </li>
              </ul>
              <EmailCard className="mt-6" />
            </Card>

            <OfficeMap />

          </div>
        </Container>
      </section>
    </>
  );
}
