import Link from "next/link";
import { LegalLayout } from "@/components/guides/LegalLayout";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Disclaimer",
  description: `Important information about how to use the content on ${siteConfig.name}: general information only, no guarantees, and no lawyer-client relationship.`,
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalLayout title="Disclaimer" path="/disclaimer">
      <p>{siteConfig.operatorDisclosure}</p>

      <h2>General information, not legal advice</h2>
      <p>
        The content on this website — including guides, institution listings, figures and answers to common questions —
        is general information only. It is not legal advice and should not be relied on as a substitute for advice about
        your specific circumstances from a licensed professional.
      </p>

      <h2>No guarantee of admission or visa approval</h2>
      <p>
        Admission decisions are made solely by educational institutions. Study permits, work permits, visas and
        permanent residence are decided solely by Immigration, Refugees and Citizenship Canada (IRCC) and other
        government authorities. {siteConfig.name} cannot and does not guarantee admission, a scholarship, a permit, a
        visa or any other outcome.
      </p>

      <h2>No lawyer-client relationship</h2>
      <p>
        Using this website, contacting us, or submitting an enquiry form does not create a lawyer-client or
        representative-client relationship. Such a relationship begins only when we confirm it in a signed written
        retainer agreement. Until then, please do not send confidential or time-sensitive information, and do not rely
        on us to meet any deadline for you.
      </p>

      <h2>Accuracy and changes</h2>
      <p>
        Immigration rules, fees, caps, processing times and institution details change frequently. We try to keep this
        website accurate and show when pages were last reviewed, but information may be out of date or incomplete.
        Always confirm details with official sources, including IRCC and each institution&apos;s official website.
        Institution listings marked &quot;sample data&quot; have not been verified.
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
