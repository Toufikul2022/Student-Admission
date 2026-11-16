import Link from "next/link";
import { GuideLayout, STUDY_NAV } from "@/components/guides/GuideLayout";
import { FactValue, OfficialSources } from "@/components/guides/Sources";
import { provinces } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

const PATH = "/study-in-canada";
const TITLE = "Study in Canada: A Complete Guide for International Students";
const DESCRIPTION =
  "Why students choose Canada, how universities and colleges differ, intakes, typical costs, language tests, scholarships, working while you study and life in each province.";

export const metadata = pageMetadata({ title: "Study in Canada — Guide for International Students", description: DESCRIPTION, path: PATH, type: "article" });

const faqs = [
  {
    q: "What is the difference between a university and a college in Canada?",
    a: "Universities mainly offer academic degrees (bachelor's, master's and doctoral). Colleges and polytechnics focus on applied, career-oriented diplomas and certificates, and some also grant degrees. Both can be good routes, depending on your goals.",
  },
  {
    q: "Which intake is best for international students?",
    a: "The fall (September) intake usually has the widest choice of programs and scholarships. Winter (January) is the second main intake, and some colleges also start programs in summer (May).",
  },
  {
    q: "Do I need IELTS to study in Canada?",
    a: "Most institutions require proof of English (or French) proficiency. Many accept several tests, such as IELTS, TOEFL, PTE, CELPIP or Duolingo, but accepted tests and minimum scores vary by institution and program.",
  },
];

export default function StudyInCanadaPage() {
  return (
    <GuideLayout
      title={TITLE}
      description={DESCRIPTION}
      path={PATH}
      crumbs={[{ name: "Study in Canada", href: PATH }]}
      nav={STUDY_NAV}
      faqs={faqs}
      answer={
        <p>
          Canada offers internationally recognised qualifications, a safe and welcoming society, and options to work
          during and after your studies. To study here for more than six months you&apos;ll usually need an offer from a{" "}
          <strong>designated learning institution (DLI)</strong>, proof that you can pay for tuition and living costs, and a{" "}
          <strong>study permit</strong>.
        </p>
      }
    >
      <h2 id="why-canada">Why do students choose Canada?</h2>
      <p>
        Students pick Canada for a mix of quality, safety and opportunity. Qualifications from Canadian public
        institutions are widely recognised, class sizes are often smaller than in other popular destinations, and
        campuses are diverse and multicultural.
      </p>
      <ul>
        <li><strong>Recognised qualifications</strong> from public universities, colleges and polytechnics.</li>
        <li><strong>Work experience</strong> — many students can work part time while studying, and eligible graduates may apply for a post-graduation work permit.</li>
        <li><strong>Two official languages</strong> — study in English, French, or both.</li>
        <li><strong>Quality of life</strong> — safe cities, public services, and access to nature.</li>
      </ul>

      <h2 id="education-system">How does the Canadian education system work?</h2>
      <p>
        Education in Canada is managed by each province and territory, so details differ across the country. For
        international students, the main types of post-secondary institution are:
      </p>
      <table>
        <thead>
          <tr><th scope="col">Type</th><th scope="col">What they offer</th><th scope="col">Typical length</th></tr>
        </thead>
        <tbody>
          <tr><td>Universities</td><td>Bachelor&apos;s, master&apos;s and doctoral degrees with an academic and research focus</td><td>Bachelor&apos;s usually 3–4 years; master&apos;s 1–2 years</td></tr>
          <tr><td>Colleges</td><td>Career-focused certificates, diplomas, advanced diplomas and postgraduate certificates</td><td>Usually 1–3 years</td></tr>
          <tr><td>Polytechnics</td><td>Applied diplomas and degrees with strong industry links and hands-on learning</td><td>1–4 years</td></tr>
        </tbody>
      </table>
      <h3>What is a designated learning institution (DLI)?</h3>
      <p>
        A DLI is a school approved by a provincial or territorial government to host international students. You
        generally need a letter of acceptance from a DLI to apply for a study permit. Not every program at a DLI leads
        to a post-graduation work permit, so check program eligibility separately.{" "}
        <Link href="/find-university">Search institutions</Link>.
      </p>

      <h2 id="intakes">When can I start? (Intakes)</h2>
      <p>
        Most institutions have a <strong>fall intake (September)</strong> and a <strong>winter intake (January)</strong>;
        some colleges also offer a <strong>summer intake (May)</strong>. Plan to apply 9–12 months before your start
        date. <Link href="/study-in-canada/intakes">Read our intakes and timeline guide</Link>.
      </p>

      <h2 id="costs">How much does it cost to study in Canada?</h2>
      <p>
        Your budget has three main parts: tuition (which varies widely by institution, program and level), living
        costs (housing, food, transport, insurance), and one-time costs such as application fees, the study permit fee
        and biometrics. For your study permit, IRCC also asks you to show a minimum amount of money for living expenses
        in addition to tuition. The current amount for a single student is <FactValue k="proof_of_funds_single" />.{" "}
        <Link href="/study-in-canada/costs">See the full cost breakdown</Link>.
      </p>

      <h2 id="language">Which English or French tests are accepted?</h2>
      <p>
        Institutions set their own language requirements. Commonly accepted English tests include <strong>IELTS</strong>,{" "}
        <strong>TOEFL iBT</strong>, <strong>PTE Academic</strong>, <strong>CELPIP</strong> and, at some institutions,{" "}
        <strong>Duolingo English Test</strong>. French-language institutions may accept tests such as{" "}
        <strong>TEF</strong> or <strong>TCF</strong>. Requirements for admission and for immigration purposes can differ.{" "}
        <Link href="/study-in-canada/language-tests">Compare language tests</Link>.
      </p>

      <h2 id="scholarships">Are there scholarships for international students?</h2>
      <p>
        Yes, though they are competitive. Most funding comes from the institutions themselves (entrance and merit
        awards), with some government and external scholarships. Applying early and for the fall intake usually gives
        you the most options. <Link href="/study-in-canada/scholarships">Explore scholarship types</Link>.
      </p>

      <h2 id="work">Can I work while I study?</h2>
      <p>
        Many full-time students at eligible institutions can work on campus, and off campus for up to{" "}
        <FactValue k="off_campus_work_hours" /> during regular academic sessions, with full-time work allowed during
        scheduled breaks. Your study permit conditions decide whether you can work, so read them carefully. Co-op and
        internship placements that are part of your program may need a separate work permit.
      </p>

      <h2 id="provinces">What is life like in each province?</h2>
      <p>
        Climate, cost of living, language and job markets vary a lot across Canada. Choose a province and city that
        suit your budget and plans, not just a well-known name.
      </p>
      <ul className="grid! list-none! grid-cols-2 gap-2 pl-0! sm:grid-cols-3">
        {provinces.map((p) => (
          <li key={p.slug} className="m-0!">
            <Link href={`/study-in-canada/provinces/${p.slug}`}>{p.name}</Link>
          </li>
        ))}
      </ul>

      <OfficialSources keys={["study_permit", "dli_list", "work_off_campus", "educanada_scholarships"]} />
    </GuideLayout>
  );
}
