import Link from "next/link";
import { GuideLayout, VISA_NAV } from "@/components/guides/GuideLayout";
import { FactValue, OfficialSources } from "@/components/guides/Sources";
import { pageMetadata } from "@/lib/seo";

const PATH = "/visa-immigration/study-permit";
const TITLE = "Canadian Study Permit: Eligibility, Documents and Process";
const DESCRIPTION =
  "Who needs a Canadian study permit, a documents checklist, provincial attestation letters (PAL/TAL), proof of funds, biometrics and what to expect during processing.";

export const metadata = pageMetadata({ title: "Study Permit Guide — Documents, PAL, Proof of Funds", description: DESCRIPTION, path: PATH, type: "article" });

const faqs = [
  { q: "Is a study permit the same as a visa?", a: "No. A study permit lets you study in Canada. Depending on your citizenship, you may also need a visitor visa or an electronic travel authorization (eTA) to enter Canada; these are usually issued together with your study permit approval." },
  { q: "When is the study permit actually issued?", a: "If you apply from outside Canada, you receive a letter of introduction when your application is approved. The border officer issues the study permit when you arrive in Canada." },
  { q: "Do I need a provincial attestation letter?", a: "Many study permit applicants do, but some groups are exempt. Your institution usually requests it for you. Check IRCC's current list of who needs one before applying." },
];

export default function StudyPermitPage() {
  return (
    <GuideLayout
      title={TITLE}
      description={DESCRIPTION}
      path={PATH}
      crumbs={[{ name: "Visa & Immigration", href: "/visa-immigration" }, { name: "Study permit", href: PATH }]}
      nav={VISA_NAV}
      faqs={faqs}
      answer={
        <p>
          You generally need a study permit to study in Canada for more than six months. To apply, you usually need a{" "}
          <strong>letter of acceptance from a DLI</strong>, a <strong>provincial or territorial attestation letter</strong>{" "}
          if required, <strong>proof of funds</strong>, identity documents, and <strong>biometrics</strong>. An officer
          must be satisfied that you are a genuine student who meets all requirements.
        </p>
      }
    >
      <h2 id="eligibility">Who is eligible for a study permit?</h2>
      <p>In general terms, you must:</p>
      <ul>
        <li>be accepted by a designated learning institution (DLI);</li>
        <li>show you have enough money for tuition, living expenses and return transportation;</li>
        <li>obey the law and have no criminal record that makes you inadmissible (a police certificate may be required);</li>
        <li>be in good health and complete a medical exam if asked;</li>
        <li>satisfy the officer that you will leave Canada when your authorised stay ends, unless you obtain another status.</li>
      </ul>
      <p>
        Some people can study without a permit (for example, in short programs of six months or less), and some can
        apply from inside Canada. Check IRCC&apos;s rules for your situation.
      </p>

      <h2 id="checklist">What documents do I need?</h2>
      <p>The exact list depends on your country and situation — IRCC&apos;s online application generates your personal checklist. Common documents include:</p>
      <ul>
        <li>Valid passport</li>
        <li>Letter of acceptance (LOA) from a DLI</li>
        <li>Provincial or territorial attestation letter (PAL/TAL), if required</li>
        <li>Québec Acceptance Certificate (CAQ), if you will study in Québec</li>
        <li>Proof of funds (see below)</li>
        <li>A clear study plan or statement explaining your program choice and goals</li>
        <li>Academic transcripts and language test results, where relevant</li>
        <li>Medical exam results and police certificates, if requested</li>
        <li>Documents for accompanying family members, if any</li>
      </ul>

      <h2 id="pal">What is a provincial attestation letter (PAL/TAL)?</h2>
      <p>
        A PAL (or TAL for territories) is a letter from the province or territory confirming you have a place within its
        share of the national study permit cap. Many applicants must include one. Your institution usually requests it
        after you accept your offer. Some applicants — for example, certain graduate students or those already in Canada
        in some situations — may be exempt. The current national cap is <FactValue k="study_permit_cap" />.
      </p>

      <h2 id="funds">How much money do I need to show?</h2>
      <p>
        You must show you can pay your first year&apos;s tuition plus a minimum amount for living expenses and travel.
        The current minimum living-expense amount for a single applicant (outside Québec) is{" "}
        <FactValue k="proof_of_funds_single" />, plus <FactValue k="proof_of_funds_additional_member" /> for each family
        member who comes with you. Québec sets its own amounts.
      </p>
      <p>Acceptable evidence can include bank statements, a Guaranteed Investment Certificate (GIC), education loans, scholarship letters, or proof of tuition already paid. Officers look at where the money came from, not just the balance.</p>

      <h2 id="biometrics">Do I need to give biometrics?</h2>
      <p>
        Most applicants must give fingerprints and a photo at a visa application centre or designated location after
        submitting their application. The fee is <FactValue k="biometrics_fee" />. Book your appointment promptly after
        you receive the biometrics instruction letter.
      </p>

      <h2 id="processing">How long does processing take?</h2>
      <p>
        Processing times vary by country and season, and IRCC updates them regularly. Apply as early as you can once you
        have your LOA and any required attestation letter. The application fee is <FactValue k="study_permit_fee" />.
      </p>
      <ol>
        <li>Create your IRCC account and complete the online application.</li>
        <li>Upload documents and pay the fees.</li>
        <li>Give biometrics.</li>
        <li>Complete a medical exam or provide more documents if asked.</li>
        <li>Receive a decision. If approved, travel with your letter of introduction, LOA and proof of funds.</li>
      </ol>

      <h2 id="help">How can we help?</h2>
      <p>
        Our licensed professionals can review your documents, help you present your finances and study plan clearly,
        and flag issues before you submit. <Link href="/contact">Book a free consultation</Link>.
      </p>

      <OfficialSources keys={["study_permit", "study_permit_documents", "pal", "biometrics", "processing_times", "fees"]} />
    </GuideLayout>
  );
}
