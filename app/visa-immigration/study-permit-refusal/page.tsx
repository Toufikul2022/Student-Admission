import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { GuideLayout, VISA_NAV } from "@/components/guides/GuideLayout";
import { FactValue, OfficialSources } from "@/components/guides/Sources";
import { buttonClasses } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/seo";

const PATH = "/visa-immigration/study-permit-refusal";
const TITLE = "Study Permit Refused? Reasons and Your Options";
const DESCRIPTION =
  "Common reasons Canadian study permits are refused, and the options that may be available: reapplying, responding to a procedural fairness letter, or seeking judicial review.";

export const metadata = pageMetadata({ title: "Study Permit Refusal — Reasons and Options", description: DESCRIPTION, path: PATH, type: "article" });

const faqs = [
  { q: "Should I reapply straight away?", a: "Usually not without changes. Reapplying with the same documents often leads to the same result. First understand the officer's reasons, then address them with new or better evidence." },
  { q: "Can I appeal a study permit refusal?", a: "There is no general appeal for study permit refusals. Options may include reapplying, asking for reconsideration in limited situations, or applying to the Federal Court for leave and judicial review within strict deadlines." },
  { q: "Will a refusal hurt future applications?", a: "You must disclose previous refusals. A refusal doesn't automatically block future applications, but later applications should address the earlier concerns honestly." },
];

export default function RefusalPage() {
  return (
    <GuideLayout
      title={TITLE}
      description={DESCRIPTION}
      path={PATH}
      crumbs={[{ name: "Visa & Immigration", href: "/visa-immigration" }, { name: "Study permit refusal", href: PATH }]}
      nav={VISA_NAV}
      faqs={faqs}
      answer={
        <p>
          A refusal is not always the end of your plans. Start by understanding <strong>exactly why</strong> the officer
          refused your application. Depending on the reasons, you may be able to <strong>reapply with a stronger
          application</strong> or <strong>challenge the decision</strong> in Federal Court. Time limits for a challenge
          are very short, so <strong>speak to a licensed professional promptly</strong>.
        </p>
      }
    >
      <div className="not-prose my-8 flex gap-4 rounded-2xl border border-danger-700/25 bg-danger-50 p-5">
        <AlertTriangle aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-danger-700" />
        <div>
          <p className="font-bold text-ink">Deadlines matter</p>
          <p className="mt-1 text-sm text-slate">
            The deadline to seek leave for judicial review is <FactValue k="judicial_review_deadline_outside" /> for
            decisions made outside Canada and <FactValue k="judicial_review_deadline_inside" /> for decisions made in
            Canada, counted from when you are notified of the decision.
          </p>
          <Link href="/contact" className={buttonClasses("primary", "sm", "mt-4")}>
            Get your refusal reviewed
          </Link>
        </div>
      </div>

      <h2 id="reasons">Why are study permits refused?</h2>
      <p>Refusal letters usually list one or more grounds. Common themes include:</p>
      <ul>
        <li><strong>Financial concerns:</strong> funds not shown clearly, sources not explained, or large unexplained deposits.</li>
        <li><strong>Purpose of study:</strong> the program doesn&apos;t seem to fit your background, or the study plan is vague.</li>
        <li><strong>Ties and intentions:</strong> the officer isn&apos;t satisfied you will leave Canada at the end of your authorised stay.</li>
        <li><strong>Missing or inconsistent documents:</strong> gaps, translation issues, or details that don&apos;t match.</li>
        <li><strong>Admissibility:</strong> medical, criminal or misrepresentation concerns — these are serious and need legal advice.</li>
      </ul>

      <h2 id="notes">How do I find out the officer&apos;s full reasons?</h2>
      <p>
        The refusal letter is often brief. You may be able to obtain the officer&apos;s notes, either with your decision
        or by making an access to information request. Reviewing these notes is usually the first step in deciding what
        to do next.
      </p>

      <h2 id="options">What are my options?</h2>
      <h3>1. Reapply with a stronger application</h3>
      <p>
        If you can address the officer&apos;s concerns with new or better evidence — clearer finances, a more convincing
        study plan, or missing documents — reapplying may be the fastest route. Explain what has changed.
      </p>
      <h3>2. Procedural fairness</h3>
      <p>
        If IRCC sends a <strong>procedural fairness letter</strong> before deciding, it is giving you a chance to respond
        to specific concerns. Respond carefully and within the deadline. If you believe you were refused without a fair
        chance to answer a concern you could not have anticipated, that may be relevant to a legal challenge.
      </p>
      <h3>3. Judicial review at the Federal Court</h3>
      <p>
        You may ask the Federal Court to review whether the decision was reasonable and fair. This is a legal
        proceeding with strict deadlines and procedures. If successful, the decision is usually sent back to a
        different officer to decide again — the Court does not issue the permit itself.
      </p>

      <h2 id="help">Get advice before you act</h2>
      <p>
        The right option depends on your refusal reasons, your timeline and your evidence. Our licensed legal
        professionals can review your refusal and explain your options. <Link href="/contact">Contact us</Link>.
      </p>

      <OfficialSources keys={["study_permit", "atip", "federal_court", "find_representative"]} />
    </GuideLayout>
  );
}
