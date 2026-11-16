import Link from "next/link";
import { GuideLayout, VISA_NAV } from "@/components/guides/GuideLayout";
import { OfficialSources } from "@/components/guides/Sources";
import { pageMetadata } from "@/lib/seo";

const PATH = "/visa-immigration/pathways-to-pr";
const TITLE = "From Student to Permanent Resident: Pathways to PR in Canada";
const DESCRIPTION =
  "How Canadian study and work experience may support permanent residence through Express Entry (including the Canadian Experience Class) and Provincial Nominee Programs.";

export const metadata = pageMetadata({ title: "Pathways to Permanent Residence for Students", description: DESCRIPTION, path: PATH, type: "article" });

const faqs = [
  { q: "Does studying in Canada guarantee permanent residence?", a: "No. Studying in Canada can help, but permanent residence programs have their own criteria and many are competitive. Plan your program and career with this in mind." },
  { q: "Does time spent studying count as Canadian work experience?", a: "Generally, work done while you were a full-time student does not count toward the Canadian Experience Class. Work after graduation, for example on a PGWP, may count if it meets the program's requirements." },
];

export default function PathwaysPage() {
  return (
    <GuideLayout
      title={TITLE}
      description={DESCRIPTION}
      path={PATH}
      crumbs={[{ name: "Visa & Immigration", href: "/visa-immigration" }, { name: "Pathways to PR", href: PATH }]}
      nav={VISA_NAV}
      faqs={faqs}
      answer={
        <p>
          A common route is: <strong>study</strong> at a DLI → <strong>work</strong> in Canada (often on a Post-Graduation
          Work Permit) → apply for permanent residence through <strong>Express Entry</strong> (for example, the Canadian
          Experience Class) or a <strong>Provincial Nominee Program</strong>. Selection is competitive and criteria change,
          so there is no guaranteed path.
        </p>
      }
    >
      <h2 id="express-entry">What is Express Entry?</h2>
      <p>
        Express Entry is the federal online system for managing applications under several economic immigration
        programs. Candidates are ranked using a points system that considers factors such as age, education, language
        ability and work experience. IRCC invites top-ranked candidates, sometimes in category-based draws.
      </p>
      <h3>Canadian Experience Class (CEC)</h3>
      <p>
        The CEC is aimed at people with skilled work experience in Canada. Many former international students apply
        under this program after gaining eligible work experience following graduation. Canadian education can also add
        points to an Express Entry profile.
      </p>

      <h2 id="pnp">What are Provincial Nominee Programs?</h2>
      <p>
        Most provinces and territories run their own nominee programs, and many have streams for international
        graduates of their own institutions. A provincial nomination can significantly help an Express Entry profile or
        support a separate application. Québec runs its own immigration selection system.
      </p>
      <p>
        For example, Manitoba operates the Manitoba Provincial Nominee Program, which includes options for international
        education graduates. <Link href="/study-in-canada/provinces/manitoba">Learn about studying in Manitoba</Link>.
      </p>

      <h2 id="plan">How can I plan ahead while I study?</h2>
      <ul>
        <li>Choose a program that fits your career goals and is likely to be PGWP-eligible.</li>
        <li>Consider which province you may want to settle in, and check its nominee program streams.</li>
        <li>Improve your English or French — language scores carry significant weight.</li>
        <li>Keep your status valid and keep records of study and work.</li>
      </ul>

      <OfficialSources keys={["express_entry", "pnp", "pgwp", "manitoba_pnp"]} />
    </GuideLayout>
  );
}
