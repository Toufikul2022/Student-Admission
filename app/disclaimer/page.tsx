import Link from "next/link";
import { LegalLayout } from "@/components/guides/LegalLayout";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Disclaimer",
  description: `Important information about how to use the content on ${siteConfig.name}: general information only, no guarantee of admission, and no client relationship until agreed in writing.`,
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalLayout title="Disclaimer" path="/disclaimer">
      <h2>General information only</h2>
      <p>
        The content on this website — including guides, institution listings, figures and answers to common questions —
        is general information only. It should not be relied on as a substitute for advice about your specific
        circumstances.
      </p>

      <h2>No guarantee of admission</h2>
      <p>
        Admission decisions are made solely by educational institutions. {siteConfig.name} cannot and does not
        guarantee admission, a scholarship or any other outcome.
      </p>

      <h2>No client relationship until agreed in writing</h2>
      <p>
        Using this website, contacting us, or submitting an enquiry form does not create a client relationship. Such a
        relationship begins only when we confirm it in a signed written service agreement. Until then, please do not
        send confidential or time-sensitive information, and do not rely on us to meet any deadline for you.
      </p>

      <h2>Accuracy and changes</h2>
      <p>
        Programs, tuition, intakes, deadlines and admission requirements change frequently. We try to keep this
        website accurate and show when pages were last reviewed, but information may be out of date or incomplete.
        Always confirm details with each institution&apos;s official website. Institution listings marked &quot;sample
        data&quot; have not been verified.
      </p>

      <h2>Third-party websites</h2>
      <p>
        Links to government, institution and other external websites are provided for convenience. We are not
        responsible for their content, and a link does not mean an endorsement or partnership. Unless stated otherwise,
        we are not affiliated with the institutions listed on this website.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this disclaimer? <Link href="/contact">Contact us</Link>.
      </p>
    </LegalLayout>
  );
}
