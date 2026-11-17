import { GuideLayout, STUDY_NAV } from "@/components/guides/GuideLayout";
import { OfficialSources } from "@/components/guides/Sources";
import { pageMetadata } from "@/lib/seo";

const PATH = "/study-in-canada/language-tests";
const TITLE = "English and French Language Tests for Studying in Canada";
const DESCRIPTION =
  "IELTS, CELPIP, TOEFL, PTE, Duolingo, TEF and TCF: which tests Canadian institutions accept, minimum scores, exemptions and how to choose.";

export const metadata = pageMetadata({ title: "Language Tests for Canada — IELTS, CELPIP, TOEFL, PTE, Duolingo", description: DESCRIPTION, path: PATH, type: "article" });

// TODO: verify each test's official URL and the acceptance notes before launch.
const tests = [
  { name: "IELTS", lang: "English", url: "https://ielts.org/", note: "The Academic version is widely accepted by universities and colleges." },
  { name: "CELPIP", lang: "English", url: "https://www.celpip.ca/", note: "Canadian test, accepted for admission by some institutions." },
  { name: "TOEFL iBT", lang: "English", url: "https://www.ets.org/toefl.html", note: "Widely accepted for admission, especially at universities." },
  { name: "PTE Academic", lang: "English", url: "https://www.pearsonpte.com/", note: "PTE Academic is accepted for admission at many institutions." },
  { name: "Duolingo English Test", lang: "English", url: "https://englishtest.duolingo.com/", note: "Online test accepted for admission by some institutions." },
  { name: "TEF / TCF", lang: "French", url: "https://www.lefrancaisdesaffaires.fr/", note: "Used by many French-language institutions." },
];

const faqs = [
  { q: "Which English test should I take?", a: "Choose a test accepted by every institution on your shortlist. Check the minimum overall score and any minimum per skill for each program." },
  { q: "How long are test results valid?", a: "Most tests report results as valid for two years, but institutions may apply their own rules. Check the requirement for your program and application." },
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
          and sometimes <strong>CELPIP</strong> or <strong>Duolingo</strong>. Minimum scores vary by institution and
          program, so check each one on your shortlist before you book a test.
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

      <h2 id="scores">What scores do I need?</h2>
      <p>
        Each institution sets its own minimum scores, and graduate and professional programs often ask for more than
        undergraduate or college programs. Many also set a minimum for each skill (reading, writing, listening and
        speaking), not just an overall score. Check the exact requirement on each program&apos;s admissions page.
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

      <OfficialSources keys={["educanada", "educanada_programs"]} />
    </GuideLayout>
  );
}
