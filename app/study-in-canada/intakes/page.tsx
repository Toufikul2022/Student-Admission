import Link from "next/link";
import { GuideLayout, STUDY_NAV } from "@/components/guides/GuideLayout";
import { OfficialSources } from "@/components/guides/Sources";
import { pageMetadata } from "@/lib/seo";

const PATH = "/study-in-canada/intakes";
const TITLE = "Canadian Intakes Explained: Fall, Winter and Summer";
const DESCRIPTION =
  "Compare the fall, winter and summer intakes at Canadian universities and colleges, and follow a month-by-month timeline from research to arrival.";

export const metadata = pageMetadata({ title: "Intakes in Canada — Fall, Winter, Summer", description: DESCRIPTION, path: PATH, type: "article" });

const faqs = [
  { q: "Can I switch to a later intake?", a: "Many institutions allow you to defer your offer to a later intake, but policies differ. Contact the admissions office as early as possible, and get a new or updated letter of acceptance if needed." },
  { q: "Is the January intake harder to get into?", a: "Not necessarily, but fewer programs start in January, so your choice may be narrower and some scholarships are only offered for fall." },
];

export default function IntakesPage() {
  return (
    <GuideLayout
      title={TITLE}
      description={DESCRIPTION}
      path={PATH}
      crumbs={[{ name: "Study in Canada", href: "/study-in-canada" }, { name: "Intakes", href: PATH }]}
      nav={STUDY_NAV}
      faqs={faqs}
      answer={
        <p>
          Canada has three intakes: <strong>Fall (September)</strong> — the largest, with the most programs and
          scholarships; <strong>Winter (January)</strong> — the second-largest; and <strong>Summer (May)</strong> —
          mainly at colleges. Start preparing <strong>12–18 months</strong> before your intended start date.
        </p>
      }
    >
      <h2 id="compare">How do the three intakes compare?</h2>
      <table>
        <thead><tr><th scope="col">Intake</th><th scope="col">Starts</th><th scope="col">Good to know</th></tr></thead>
        <tbody>
          <tr><td>Fall</td><td>September</td><td>Widest program choice and most entrance scholarships. Deadlines can be early, especially for competitive programs.</td></tr>
          <tr><td>Winter</td><td>January</td><td>A good second chance if you miss fall. Fewer programs; arriving in mid-winter takes preparation.</td></tr>
          <tr><td>Summer</td><td>May</td><td>Mostly college programs. Limited choice; useful for some diplomas and postgraduate certificates.</td></tr>
        </tbody>
      </table>

      <h2 id="timeline">What should my timeline look like?</h2>
      <p>Count backwards from your start date. Times are approximate — always check each institution&apos;s official deadlines.</p>
      <ol>
        <li><strong>12–18 months before:</strong> research programs and institutions; check entry and language requirements; book a language test.</li>
        <li><strong>9–12 months before:</strong> prepare transcripts, a statement of purpose and references; submit applications.</li>
        <li><strong>6–9 months before:</strong> receive offers, compare them, accept one and pay any deposit.</li>
        <li><strong>4–6 months before:</strong> apply for scholarships and housing; send any final transcripts the institution asks for.</li>
        <li><strong>1–3 months before:</strong> confirm housing, insurance and travel; register for courses and orientation.</li>
      </ol>
      <p>
        Popular programs can fill up well before the official deadline, so apply early.{" "}
        <Link href="/contact">Get a personalised timeline</Link>.
      </p>

      <OfficialSources keys={["educanada", "educanada_programs"]} />
    </GuideLayout>
  );
}
