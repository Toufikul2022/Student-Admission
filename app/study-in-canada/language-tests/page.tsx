import { GuideLayout, STUDY_NAV } from "@/components/guides/GuideLayout";
import { OfficialSources } from "@/components/guides/Sources";
import { pageMetadata } from "@/lib/seo";

const PATH = "/study-in-canada/language-tests";
const TITLE = "English and French Language Tests for Studying in Canada";
const DESCRIPTION =
  "IELTS, CELPIP, TOEFL, PTE, Duolingo, TEF and TCF: which tests Canadian institutions accept, how admission and immigration test rules differ, and how to choose.";

export const metadata = pageMetadata({ title: "Language Tests for Canada — IELTS, CELPIP, TOEFL, PTE, Duolingo", description: DESCRIPTION, path: PATH, type: "article" });

// TODO: verify each test's official URL and the institution/IRCC acceptance notes before launch.
const tests = [
  { name: "IELTS", lang: "English", url: "https://ielts.org/", note: "Academic version is widely accepted for admission. IRCC accepts the General Training version for some immigration purposes." },
  { name: "CELPIP", lang: "English", url: "https://www.celpip.ca/", note: "Canadian test. Accepted by IRCC for many immigration programs; accepted for admission by some institutions." },
  { name: "TOEFL iBT", lang: "English", url: "https://www.ets.org/toefl.html", note: "Widely accepted for admission, especially at universities." },
  { name: "PTE Academic / PTE Core", lang: "English", url: "https://www.pearsonpte.com/", note: "PTE Academic is accepted for admission at many institutions; PTE Core is designed for immigration use." },
  { name: "Duolingo English Test", lang: "English", url: "https://englishtest.duolingo.com/", note: "Accepted for admission by some institutions. Not generally accepted by IRCC for immigration purposes." },
  { name: "TEF / TCF", lang: "French", url: "https://www.lefrancaisdesaffaires.fr/", note: "Used by French-language institutions and for immigration purposes in French." },
];

const faqs = [
  { q: "Which English test should I take?", a: "Choose a test accepted by every institution on your shortlist. If you plan to work or immigrate after graduating, consider whether IRCC accepts that test too, as you may need an approved test later." },
  { q: "How long are test results valid?", a: "Most tests report results as valid for two years, but institutions and IRCC may apply their own rules. Check the requirement for your program and application." },
];

export default function LanguageTestsPage() {
  return (
    <GuideLayout
      title={TITLE}
      description={DESCRIPTION}
      path={PATH}
      crumbs={[{ name: "Study in Canada", href: "/study-in-canada" }, { name: "Language tests", href: PATH }]}
      nav={STUDY_NAV}
      faqs={faqs}
      answer={
        <p>
          Most institutions accept several English tests — commonly <strong>IELTS Academic, TOEFL iBT, PTE Academic</strong>,
          and sometimes <strong>CELPIP</strong> or <strong>Duolingo</strong>. Minimum scores vary by program. Tests
          accepted for <em>admission</em> are not always accepted by IRCC for <em>immigration</em> purposes, such as a
          later work permit or permanent residence.
        </p>
      }
    >
      <h2 id="which-tests">Which language tests are commonly accepted?</h2>
      <table>
        <thead><tr><th scope="col">Test</th><th scope="col">Language</th><th scope="col">Notes</th></tr></thead>
        <tbody>
          {tests.map((t) => (
            <tr key={t.name}>
              <td><a href={t.url} target="_blank" rel="noopener noreferrer">{t.name}<span className="sr-only"> (opens in a new tab)</span></a></td>
              <td>{t.lang}</td>
              <td>{t.note}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 id="admission-vs-immigration">Why do admission and immigration rules differ?</h2>
      <p>
        Institutions decide which tests they accept for admission. IRCC keeps its own list of approved tests for
        immigration programs, and that list is shorter. If you may later apply for a Post-Graduation Work Permit or
        permanent residence, you may need a result from an IRCC-approved test.
      </p>

      <h2 id="exemptions">Can I be exempt from a language test?</h2>
      <p>
        Some institutions waive the test if you completed previous studies in English in certain countries, or if you
        complete their own English pathway program. Ask each institution for its exemption policy in writing.
      </p>

      <h2 id="tips">Tips for choosing and preparing</h2>
      <ul>
        <li>List the tests accepted by every institution on your shortlist, then choose one they all accept.</li>
        <li>Check the minimum overall score and any minimum per skill (reading, writing, listening, speaking).</li>
        <li>Book early — test dates fill up before major intake deadlines.</li>
        <li>Allow time for a retake if you need a higher score.</li>
      </ul>

      <OfficialSources keys={["study_permit", "pgwp"]} />
    </GuideLayout>
  );
}
