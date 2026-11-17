import Link from "next/link";
import { GuideLayout, STUDY_NAV } from "@/components/guides/GuideLayout";
import { OfficialSources } from "@/components/guides/Sources";
import { pageMetadata } from "@/lib/seo";

const PATH = "/study-in-canada/costs";
const TITLE = "How Much Does It Cost to Study in Canada?";
const DESCRIPTION =
  "A practical breakdown of tuition, living costs, health insurance and application costs for international students in Canada, with a budgeting worksheet.";

export const metadata = pageMetadata({ title: "Cost of Studying in Canada", description: DESCRIPTION, path: PATH, type: "article" });

const faqs = [
  {
    q: "Is tuition the same for every program?",
    a: "No. International tuition varies by institution, province, level and program. Professional and lab-based programs often cost more. Always check the official fee page for your exact program and year.",
  },
  {
    q: "When do I pay tuition?",
    a: "Usually a deposit when you accept your offer, then the rest by the institution's fee deadline before each term. Payment schedules differ, so check your offer letter and the institution's fee page.",
  },
];

export default function CostsPage() {
  return (
    <GuideLayout
      title={TITLE}
      description={DESCRIPTION}
      path={PATH}
      crumbs={[{ name: "Study in Canada", href: "/study-in-canada" }, { name: "Costs", href: PATH }]}
      nav={STUDY_NAV}
      faqs={faqs}
      answer={
        <p>
          Plan for <strong>tuition</strong> (set by each institution), <strong>living costs</strong> (mostly housing,
          which varies sharply by city), <strong>health insurance</strong>, and <strong>one-time fees</strong> such as
          applications, language tests and deposits. Build a budget for your whole first year before you accept an
          offer.
        </p>
      }
    >
      <h2 id="tuition">How much is tuition for international students?</h2>
      <p>
        Each institution publishes its own international tuition, usually per year or per term. Fees depend on the
        program, level, and province. Undergraduate programs at universities, professional programs and some graduate
        programs are often at the higher end; many college diplomas and postgraduate certificates cost less per year
        but may still be significant.
      </p>
      <p>
        Our <Link href="/find-university">institution search</Link> shows tuition as &quot;TBC&quot; until we have
        verified it against the institution&apos;s official fee page.
      </p>

      <h2 id="living">What are typical living costs?</h2>
      <p>The biggest variable is housing. Large cities such as Toronto and Vancouver usually cost more than smaller cities.</p>
      <ul>
        <li><strong>Housing:</strong> on-campus residence, a shared apartment, or a homestay. Ask about deposits and lease length.</li>
        <li><strong>Food and groceries:</strong> cooking at home is much cheaper than eating out.</li>
        <li><strong>Transport:</strong> many institutions include or discount a public transit pass.</li>
        <li><strong>Phone and internet</strong>, <strong>books and supplies</strong>, and <strong>winter clothing</strong>.</li>
      </ul>

      <h2 id="insurance">Do I need health insurance?</h2>
      <p>
        Yes. Some provinces include international students in their public health plan (sometimes after a waiting
        period); others don&apos;t, and many institutions require you to join a school health plan. Check the rules for
        your province and institution before you arrive.
      </p>

      <h2 id="application-costs">What does it cost to apply?</h2>
      <ul>
        <li><strong>Application fees:</strong> most institutions charge a non-refundable fee for each application.</li>
        <li><strong>Language tests:</strong> IELTS, TOEFL, PTE and other tests each have their own booking fee.</li>
        <li><strong>Documents:</strong> official transcripts, certified translations and courier costs.</li>
        <li><strong>Tuition deposit:</strong> many institutions ask for a deposit when you accept your offer. Check whether it is refundable.</li>
      </ul>

      <h2 id="worksheet">Budget worksheet</h2>
      <p>Use this as a checklist. Fill in figures from official sources for your chosen program and city.</p>
      <table>
        <thead><tr><th scope="col">Category</th><th scope="col">Where to find the figure</th><th scope="col">Your estimate (CAD)</th></tr></thead>
        <tbody>
          <tr><td>First-year tuition</td><td>Institution&apos;s official fee page</td><td>&nbsp;</td></tr>
          <tr><td>Application fees</td><td>Each institution&apos;s admissions page</td><td>&nbsp;</td></tr>
          <tr><td>Housing (12 months)</td><td>Residence office or local listings</td><td>&nbsp;</td></tr>
          <tr><td>Food, transport, phone</td><td>Institution&apos;s international student cost estimate</td><td>&nbsp;</td></tr>
          <tr><td>Health insurance</td><td>Provincial plan or school health plan</td><td>&nbsp;</td></tr>
          <tr><td>Language test</td><td>Test provider&apos;s website</td><td>&nbsp;</td></tr>
          <tr><td>Flights and arrival costs</td><td>Airlines, temporary accommodation</td><td>&nbsp;</td></tr>
        </tbody>
      </table>

      <OfficialSources keys={["educanada", "educanada_scholarships"]} />
    </GuideLayout>
  );
}
