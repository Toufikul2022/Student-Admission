import Link from "next/link";
import { GuideLayout, STUDY_NAV } from "@/components/guides/GuideLayout";
import { OfficialSources } from "@/components/guides/Sources";
import { provinces } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

const PATH = "/study-in-canada";
const TITLE = "Study in Canada: A Complete Guide for International Students";
const DESCRIPTION =
  "Why students choose Canada, how universities and colleges differ, intakes, typical costs, language tests, scholarships, applying and life in each province.";

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
      image="study-in-canada"
      faqs={faqs}
      answer={
        <p>
          Canada offers internationally recognised qualifications, high-quality teaching and a safe, welcoming
          society. To study here as an international student, you apply directly to a{" "}
          <strong>designated learning institution (DLI)</strong> — a university or college approved to accept
          international students — and meet its <strong>academic</strong> and <strong>language</strong> requirements.
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
        <li><strong>Hands-on learning</strong> — many programs include co-op terms, internships or applied projects with industry partners.</li>
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
        A DLI is a school approved by a provincial or territorial government to accept international students. Make
        sure every institution on your shortlist is a DLI before you apply.{" "}
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
        costs (housing, food, transport, insurance), and one-time costs such as application fees, deposits and
        travel.{" "}
        <Link href="/study-in-canada/costs">See the full cost breakdown</Link>.
      </p>

      <h2 id="language">Which English or French tests are accepted?</h2>
      <p>
        Institutions set their own language requirements. Commonly accepted English tests include <strong>IELTS</strong>,{" "}
        <strong>TOEFL iBT</strong>, <strong>PTE Academic</strong>, <strong>CELPIP</strong> and, at some institutions,{" "}
        <strong>Duolingo English Test</strong>. French-language institutions may accept tests such as{" "}
        <strong>TEF</strong> or <strong>TCF</strong>. Minimum scores vary by institution and program.{" "}
        <Link href="/study-in-canada/language-tests">Compare language tests</Link>.
      </p>

      <h2 id="scholarships">Are there scholarships for international students?</h2>
      <p>
        Yes, though they are competitive. Most funding comes from the institutions themselves (entrance and merit
        awards), with some government and external scholarships. Applying early and for the fall intake usually gives
        you the most options. <Link href="/study-in-canada/scholarships">Explore scholarship types</Link>.
      </p>

      <h2 id="apply">How do I apply to a Canadian university or college?</h2>
      <p>
        You apply directly to each institution, usually online. Most ask for academic transcripts, proof of English or
        French proficiency, and an application fee; some programs also want a statement of purpose, references or a
        portfolio. In Ontario, many applications go through central application services. After you accept an offer,
        the institution sends a <strong>letter of acceptance</strong> and next steps.{" "}
        <Link href="/contact">Get help with your applications</Link>.
      </p>

      <h2 id="provinces">What is life like in each province?</h2>
      <p>
        Climate, cost of living, language and job markets vary a lot across Canada. Choose a province and city that
        suit your budget and plans, not just a well-known name.
      </p>
      <ul className="grid! list-none! grid-cols-2 gap-2 pl-0! sm:grid-cols-3">
        {provinces.map((p) => (
          <li key={p.slug} className="m-0!">
            <Link href={`/study-in-canada/provinces/${p.slug}`} className="inline-block py-2">{p.name}</Link>
          </li>
        ))}
      </ul>

      <OfficialSources keys={["educanada", "dli_list", "educanada_programs", "educanada_scholarships"]} />
    </GuideLayout>
  );
}
