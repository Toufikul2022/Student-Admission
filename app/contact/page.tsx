import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone, Scale } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { LeadForm } from "@/components/forms/LeadForm";
import { LeadFormFromUrl } from "@/components/forms/LeadFormFromUrl";
import { siteConfig } from "@/config/site";
import { WhatsAppChannelCard } from "@/components/ui/WhatsAppChannel";
import { institutions } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us — Book a Free Consultation",
  description: `Talk to ${siteConfig.name} about studying in Canada. Book a free consultation by form, phone or email.`,
  path: "/contact",
});

const institutionNames = Object.fromEntries(institutions.map((i) => [i.slug, i.name]));

export default function ContactPage() {
  const c = siteConfig.contact;
  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 to-white pt-8 pb-10">
        <Container>
          <Breadcrumbs items={[{ name: "Contact Us", href: "/contact" }]} />
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl">Talk to an advisor</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate">
            Tell us about your study plans and we&apos;ll get back to you with clear next steps. The first consultation is
            free. {/* TODO: confirm free-consultation offer */}
          </p>
        </Container>
      </section>

      <Container className="grid gap-10 pb-20 lg:grid-cols-12">
        <Card className="p-6 sm:p-8 lg:col-span-7" id="lead-form">
          <h2 className="mb-6 text-2xl font-bold">Send us your enquiry</h2>
          <Suspense fallback={<LeadForm idPrefix="contact" />}>
            <LeadFormFromUrl institutionNames={institutionNames} idPrefix="contact" />
          </Suspense>
        </Card>

        <div className="space-y-6 lg:col-span-5">
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
            <WhatsAppChannelCard className="mt-6 flex-wrap" />
          </Card>

          {/* TODO: replace with a map embed (iframe with a descriptive title) of the office location */}
          <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-line bg-mist text-slate">
            <p className="text-center">
              <MapPin aria-hidden="true" className="mx-auto mb-2 size-8 text-primary-200" />
              Office map placeholder
            </p>
          </div>

          <div className="flex gap-3 rounded-2xl border border-line bg-white p-5 text-sm">
            <Scale aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary-600" />
            <p className="text-slate">
              <strong className="text-ink">{siteConfig.operatorDisclosure}</strong> Contacting us does not by itself create
              a lawyer-client relationship.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
