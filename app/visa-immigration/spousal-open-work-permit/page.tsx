import Link from "next/link";
import { GuideLayout, VISA_NAV } from "@/components/guides/GuideLayout";
import { FactValue, OfficialSources } from "@/components/guides/Sources";
import { pageMetadata } from "@/lib/seo";

const PATH = "/visa-immigration/spousal-open-work-permit";
const TITLE = "Spousal Open Work Permit for Partners of International Students";
const DESCRIPTION =
  "When the spouse or common-law partner of an international student may qualify for an open work permit in Canada, what has changed, and what to prepare.";

export const metadata = pageMetadata({ title: "Spousal Open Work Permit (Students)", description: DESCRIPTION, path: PATH, type: "article" });

const faqs = [
  { q: "Can my spouse come with me even if they can't get a work permit?", a: "Possibly. A spouse who doesn't qualify for an open work permit may still be able to apply as a visitor. Each application is assessed on its own facts." },
  { q: "Does my spouse need a job offer?", a: "An open work permit isn't tied to a specific employer, so a job offer isn't usually required. Eligibility depends mainly on the student's program and status." },
];

export default function SowpPage() {
  return (
    <GuideLayout
      title={TITLE}
      description={DESCRIPTION}
      path={PATH}
      crumbs={[{ name: "Visa & Immigration", href: "/visa-immigration" }, { name: "Spousal open work permit", href: PATH }]}
      nav={VISA_NAV}
      faqs={faqs}
      answer={
        <p>
          A spouse or common-law partner of an international student <strong>may</strong> qualify for an open work
          permit, letting them work for almost any employer in Canada. In recent years IRCC has narrowed eligibility so
          that it depends largely on the <strong>student&apos;s level and type of program</strong>. Check the current
          rules before you plan for your partner to work.
        </p>
      }
    >
      <h2 id="what">What is a spousal open work permit?</h2>
      <p>
        An open work permit lets the holder work for most employers in Canada without a job offer or labour market
        assessment. For students&apos; families, it is issued to an eligible spouse or common-law partner based on the
        student&apos;s situation.
      </p>

      <h2 id="eligibility">Who is eligible?</h2>
      <p>
        Eligibility rules changed significantly in recent years. In general terms, IRCC now focuses this permit on
        partners of students in certain graduate and professional programs, with some limited exceptions. Factors
        include:
      </p>
      <ul>
        <li>the student&apos;s level of study and program type;</li>
        <li>the length of the program;</li>
        <li>that the student holds a valid study permit and is enrolled full time at an eligible institution;</li>
        <li>proof of a genuine marriage or common-law relationship.</li>
      </ul>
      <p>Because these criteria change, rely on IRCC&apos;s current page — and ask us to check your case.</p>

      <h2 id="documents">What does the partner need to prepare?</h2>
      <ul>
        <li>Proof of relationship (marriage certificate, or evidence of at least one year of cohabitation for common-law partners)</li>
        <li>Proof of the student&apos;s enrolment and study permit</li>
        <li>Identity documents and any required police certificates or medical exam</li>
        <li>Proof of funds covering the family</li>
      </ul>
      <p>The open work permit holder fee is <FactValue k="open_work_permit_fee" />, in addition to the work permit processing fee.</p>

      <h2 id="plan">Plan family finances without counting on work</h2>
      <p>
        Officers expect you to show enough money to support your family without relying on your partner finding work.
        Build your budget accordingly. <Link href="/study-in-canada/costs">See our cost guide</Link>.
      </p>

      <OfficialSources keys={["spousal_owp", "fees", "processing_times"]} />
    </GuideLayout>
  );
}
