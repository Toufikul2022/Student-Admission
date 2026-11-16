import Link from "next/link";
import { GuideLayout, VISA_NAV } from "@/components/guides/GuideLayout";
import { FactValue, OfficialSources } from "@/components/guides/Sources";
import { pageMetadata } from "@/lib/seo";

const PATH = "/visa-immigration/pgwp";
const TITLE = "Post-Graduation Work Permit (PGWP): What Students Should Know";
const DESCRIPTION =
  "How the Post-Graduation Work Permit works, how long it may last, the eligibility conditions to watch for when choosing a program, and when to apply.";

export const metadata = pageMetadata({ title: "Post-Graduation Work Permit (PGWP)", description: DESCRIPTION, path: PATH, type: "article" });

const faqs = [
  { q: "Can I get more than one PGWP?", a: "Generally, a PGWP is issued only once in a lifetime. Plan your program choice and timing with that in mind." },
  { q: "Does online study count toward PGWP eligibility?", a: "Rules on distance learning have changed over time and may limit eligibility. Check IRCC's current guidance for your program and dates of study." },
  { q: "Is every program at a DLI eligible for a PGWP?", a: "No. Eligibility depends on the institution, the program, its length, and other conditions. Confirm with IRCC's current rules and your institution before you enrol." },
];

export default function PgwpPage() {
  return (
    <GuideLayout
      title={TITLE}
      description={DESCRIPTION}
      path={PATH}
      crumbs={[{ name: "Visa & Immigration", href: "/visa-immigration" }, { name: "PGWP", href: PATH }]}
      nav={VISA_NAV}
      faqs={faqs}
      answer={
        <p>
          The PGWP is an open work permit for eligible graduates of eligible programs at Canadian DLIs. Its length is
          generally linked to the length of your program. Eligibility depends on your <strong>institution and program</strong>,
          your <strong>study history</strong>, and — under rules introduced in recent years — <strong>language test results</strong>{" "}
          and, for some programs, your <strong>field of study</strong>. Check eligibility <em>before</em> you choose a program.
        </p>
      }
    >
      <h2 id="what">What is the PGWP?</h2>
      <p>
        It is an open work permit, so you can work for most employers in any job. Canadian work experience gained on a
        PGWP can help you qualify for some permanent residence programs.{" "}
        <Link href="/visa-immigration/pathways-to-pr">Read about pathways to PR</Link>.
      </p>

      <h2 id="eligibility">What makes a graduate eligible?</h2>
      <p>In general terms, IRCC looks at:</p>
      <ul>
        <li>whether your institution and program are eligible;</li>
        <li>the length of your program and whether you studied full time;</li>
        <li>whether you maintained valid status and met your study permit conditions;</li>
        <li>language test results at the required level — currently <FactValue k="pgwp_language_requirement" />;</li>
        <li>for some non-degree programs, whether your field of study is on IRCC&apos;s eligible list.</li>
      </ul>

      <h2 id="length">How long is a PGWP?</h2>
      <p>
        The permit length is generally tied to the length of your program, up to a maximum. Graduates of some longer
        degree programs may receive a longer permit. Your permit cannot extend beyond your passport&apos;s expiry, so
        renew your passport early if needed.
      </p>

      <h2 id="when">When should I apply?</h2>
      <p>
        You must apply within <FactValue k="pgwp_application_window" /> after receiving confirmation that you completed
        your program. Have your final transcript or completion letter and language results ready. The fee is{" "}
        <FactValue k="pgwp_fee" /> plus the open work permit holder fee.
      </p>

      <h2 id="protect">How can I protect my eligibility?</h2>
      <ul>
        <li>Choose a program after checking PGWP eligibility, not before.</li>
        <li>Stay enrolled full time and keep your study permit valid.</li>
        <li>Keep copies of transcripts, enrolment letters and completion letters.</li>
        <li>Take an IRCC-approved language test early enough to apply on time.</li>
      </ul>

      <OfficialSources keys={["pgwp", "fees", "processing_times"]} />
    </GuideLayout>
  );
}
