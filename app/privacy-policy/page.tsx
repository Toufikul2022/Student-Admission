import { LegalLayout } from "@/components/guides/LegalLayout";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, stores and protects your personal information, and how to request access or correction.`,
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  const c = siteConfig.contact;
  return (
    <LegalLayout title="Privacy Policy" path="/privacy-policy">
      <p>
        {siteConfig.name} (&quot;we&quot;, &quot;us&quot;) is
        committed to protecting your personal information and handling it in line with Canada&apos;s{" "}
        <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA) and applicable provincial law.
        {/* TODO: legal to confirm applicable provincial privacy law and professional regulatory obligations */}
      </p>

      <h2>Who is responsible for your information?</h2>
      <p>
        Our Privacy Officer is accountable for our compliance with this policy. You can contact them at{" "}
        <a href={`mailto:${c.email}`}>{c.email}</a> or by mail at {c.address.line1}, {c.address.city},{" "}
        {c.address.province} {c.address.postalCode}. {/* TODO: name a Privacy Officer and a dedicated privacy email if possible */}
      </p>

      <h2>What we collect</h2>
      <ul>
        <li><strong>Enquiry information</strong> you give us through forms, email or phone: name, email, phone number, country of residence, study preferences, education history, language test results and your message.</li>
        <li><strong>Context of your enquiry</strong>: the page you submitted from and any institution you selected.</li>
        <li><strong>Technical information</strong>: basic server logs (such as IP address and browser type) used for security and to prevent spam.</li>
        <li><strong>Analytics</strong>: only if enabled and, where cookies are used, only with your consent. See &quot;Cookies and analytics&quot; below.</li>
      </ul>
      <p>Please don&apos;t send identity documents or other sensitive information through the website form.</p>

      <h2>Why we collect it</h2>
      <ul>
        <li>To respond to your enquiry and arrange a consultation.</li>
        <li>To assess how we may be able to help you, and to check for conflicts of interest before taking you on as a client.</li>
        <li>To send you occasional updates, <strong>only if</strong> you opted in to marketing. You can unsubscribe at any time.</li>
        <li>To keep our website secure and improve it.</li>
        <li>To meet legal and professional obligations.</li>
      </ul>

      <h2>Consent</h2>
      <p>
        We collect, use and disclose your information with your consent, which you give when you submit an enquiry. You
        may withdraw consent at any time, subject to legal or contractual restrictions, by contacting us. Marketing
        consent is separate and optional.
      </p>

      <h2>Who we share it with</h2>
      <p>
        We do not sell your personal information. We share it only as needed with service providers who help us run our
        business (for example, our email delivery provider and website host), under agreements that require them to
        protect it; with institutions or authorities only when you ask us to act for you; or when required by law. Some
        providers may store information outside Canada, where it may be subject to the laws of that country.
        {/* TODO: list actual providers and locations, e.g. Resend (email), Vercel (hosting) */}
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiry information only as long as needed for the purposes above. If you do not become a client, we
        aim to delete enquiry information within [24 months] of our last contact. Client files are kept for the period
        required by our professional and legal obligations. {/* TODO: confirm retention periods */}
      </p>

      <h2>How we protect it</h2>
      <p>
        We use reasonable physical, organisational and technical safeguards, including encrypted connections (HTTPS) and
        access restricted to staff who need it.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        This website does not use advertising cookies. If we enable analytics, we either use a cookieless service or ask
        for your consent before setting analytics cookies. You can decline and the site will work the same.
      </p>

      <h2>Your rights: access and correction</h2>
      <p>
        You may ask to see the personal information we hold about you, ask how it has been used and shared, and ask us
        to correct it. Send your request to our Privacy Officer at <a href={`mailto:${c.email}`}>{c.email}</a>. We will
        respond within 30 days, as PIPEDA generally requires, and may need to verify your identity first. If you are not
        satisfied with our response, you may contact the Office of the Privacy Commissioner of Canada.
      </p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy. The &quot;Last reviewed&quot; date at the top of this page shows when it last changed.</p>
    </LegalLayout>
  );
}
