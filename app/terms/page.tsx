import Link from "next/link";
import { LegalLayout } from "@/components/guides/LegalLayout";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description: `The terms that apply when you use the ${siteConfig.name} website.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use" path="/terms">
      <p>
        These terms apply to your use of the {siteConfig.name} website at {siteConfig.domain} (&quot;we&quot;, &quot;us&quot;). By using the website, you agree to these
        terms. If you do not agree, please do not use the website.
      </p>

      <h2>1. Information only</h2>
      <p>
        The website provides general information about studying and immigrating to Canada. It is not legal advice. Please
        read our <Link href="/disclaimer">Disclaimer</Link>, which forms part of these terms.
      </p>

      <h2>2. Services are provided under a separate agreement</h2>
      <p>
        Any admission or immigration services we provide are governed by a separate written retainer or service
        agreement. Nothing on this website is an offer to provide services, and no professional relationship exists
        until such an agreement is signed.
      </p>

      <h2>3. Acceptable use</h2>
      <ul>
        <li>Provide accurate information when you contact us.</li>
        <li>Do not misuse the website, including by sending spam, attempting to gain unauthorised access, or interfering with its operation.</li>
        <li>Do not copy, scrape or republish content from this website without our written permission.</li>
      </ul>

      <h2>4. Intellectual property</h2>
      <p>
        The website&apos;s text, design and graphics belong to us or our licensors. Institution names and trademarks
        belong to their respective owners and are used for identification only; their use does not imply endorsement or
        affiliation.
      </p>

      <h2>5. External links</h2>
      <p>We link to third-party websites for convenience. We are not responsible for their content or practices.</p>

      <h2>6. Limitation of liability</h2>
      <p>
        To the extent permitted by law, we are not liable for any loss arising from your use of, or reliance on, the
        website or its content, including information that is out of date or incomplete.
      </p>

      <h2>7. Privacy</h2>
      <p>
        Our <Link href="/privacy-policy">Privacy Policy</Link> explains how we handle personal information.
      </p>

      <h2>8. Governing law</h2>
      <p>
        These terms are governed by the laws of the Province of [PROVINCE] and the federal laws of Canada that apply
        there. {/* TODO: confirm province with legal */}
      </p>

      <h2>9. Changes</h2>
      <p>We may update these terms at any time. Continued use of the website means you accept the updated terms.</p>

      <h2>10. Contact</h2>
      <p>
        Questions? <Link href="/contact">Contact us</Link>.
      </p>
    </LegalLayout>
  );
}
