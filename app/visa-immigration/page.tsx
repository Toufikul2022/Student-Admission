import Link from "next/link";
import { ArrowRight, Briefcase, FileWarning, Heart, Route, Stamp } from "lucide-react";
import { GuideLayout, VISA_NAV } from "@/components/guides/GuideLayout";
import { OfficialSources } from "@/components/guides/Sources";
import { pageMetadata } from "@/lib/seo";

const PATH = "/visa-immigration";
const TITLE = "Visa & Immigration for International Students in Canada";
const DESCRIPTION =
  "An overview of study permits, spousal open work permits, the Post-Graduation Work Permit, refusals and pathways to permanent residence for international students.";

export const metadata = pageMetadata({ title: "Visa & Immigration for Students", description: DESCRIPTION, path: PATH, type: "article" });

const topics = [
  { icon: Stamp, title: "Study permit", href: "/visa-immigration/study-permit", body: "Eligibility, documents, attestation letters, proof of funds, biometrics and processing." },
  { icon: Heart, title: "Spousal open work permit", href: "/visa-immigration/spousal-open-work-permit", body: "When a student's spouse or common-law partner may be able to work in Canada." },
  { icon: Briefcase, title: "Post-Graduation Work Permit", href: "/visa-immigration/pgwp", body: "Working in Canada after you graduate, and how to protect your eligibility." },
  { icon: FileWarning, title: "Study permit refusal", href: "/visa-immigration/study-permit-refusal", body: "Common refusal reasons and your options: reapply, respond, or challenge the decision." },
  { icon: Route, title: "Pathways to PR", href: "/visa-immigration/pathways-to-pr", body: "How Canadian study and work experience can support a permanent residence application." },
];

export default function VisaHubPage() {
  return (
    <GuideLayout
      title={TITLE}
      description={DESCRIPTION}
      path={PATH}
      crumbs={[{ name: "Visa & Immigration", href: PATH }]}
      nav={VISA_NAV}
      answer={
        <p>
          Most international students need a <strong>study permit</strong> to study in Canada for more than six months.
          Depending on your situation, you may later need a work permit (such as a <strong>Post-Graduation Work Permit</strong>)
          and, if you want to stay, a <strong>permanent residence</strong> application. Each step has its own rules, which
          IRCC updates frequently.
        </p>
      }
    >
      <h2 id="topics">What immigration steps might apply to me?</h2>
      <ul className="grid! list-none! gap-4 pl-0! sm:grid-cols-2">
        {topics.map((t) => (
          <li key={t.href} className="m-0! rounded-2xl border border-line bg-white p-5">
            <t.icon aria-hidden="true" className="size-7 text-primary-600" />
            <p className="mt-2 text-lg font-bold">
              <Link href={t.href} className="no-underline!">{t.title}</Link>
            </p>
            <p className="mt-1 text-base text-slate">{t.body}</p>
            <Link href={t.href} className="mt-2 inline-flex items-center gap-1 text-sm" aria-hidden="true" tabIndex={-1}>
              Read guide <ArrowRight className="size-4" />
            </Link>
          </li>
        ))}
      </ul>

      <h2 id="who-can-help">Who can give immigration advice?</h2>
      <p>
        In Canada, only authorised representatives — such as lawyers and paralegals who are members of a provincial or
        territorial law society, Québec notaries, and licensed immigration consultants — may charge a fee to represent
        or advise you on an immigration application. {" "}
        <Link href="/contact">Talk to our licensed professionals</Link>.
      </p>

      <h2 id="important">Important</h2>
      <p>
        This section is general information, not legal advice. Immigration rules, fees and caps change frequently and
        your own circumstances matter. Nobody can guarantee a visa or permit — decisions are made by IRCC officers.
      </p>

      <OfficialSources keys={["study_permit", "pgwp", "express_entry", "find_representative"]} />
    </GuideLayout>
  );
}
