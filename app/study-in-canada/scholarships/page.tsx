import { GuideLayout, STUDY_NAV } from "@/components/guides/GuideLayout";
import { OfficialSources } from "@/components/guides/Sources";
import { pageMetadata } from "@/lib/seo";

const PATH = "/study-in-canada/scholarships";
const TITLE = "Scholarships for International Students in Canada";
const DESCRIPTION =
  "Where scholarships for international students in Canada come from, who can apply, when to apply, and how to write a stronger scholarship application.";

export const metadata = pageMetadata({ title: "Scholarships in Canada for International Students", description: DESCRIPTION, path: PATH, type: "article" });

const faqs = [
  { q: "Can a scholarship cover my full costs?", a: "Full scholarships exist but are rare and very competitive. Most international students combine partial awards with savings, family support or other funding." },
  { q: "Do I apply for scholarships separately?", a: "Sometimes. Many entrance awards are considered automatically when you apply for admission, but competitive and external scholarships usually need their own application, essay or references." },
];

export default function ScholarshipsPage() {
  return (
    <GuideLayout
      title={TITLE}
      description={DESCRIPTION}
      path={PATH}
      crumbs={[{ name: "Study in Canada", href: "/study-in-canada" }, { name: "Scholarships", href: PATH }]}
      nav={STUDY_NAV}
      faqs={faqs}
      answer={
        <p>
          Most scholarships for international students come from <strong>institutions</strong> (automatic entrance
          awards and competitive merit awards). Others come from <strong>government programs</strong>,{" "}
          <strong>your home country</strong>, or <strong>private organisations</strong>. Graduate students may also
          receive research funding. Apply early — many deadlines fall well before admission deadlines.
        </p>
      }
    >
      <h2 id="types">What types of scholarships are available?</h2>
      <ul>
        <li><strong>Entrance scholarships:</strong> often awarded automatically based on your admission grades.</li>
        <li><strong>Merit and leadership awards:</strong> competitive, usually need a separate application, essay or references.</li>
        <li><strong>Need-based bursaries:</strong> fewer are open to international students, but some institutions offer them after the first term.</li>
        <li><strong>Graduate funding:</strong> research and teaching assistantships, and funding packages for thesis-based programs.</li>
        <li><strong>Government and external scholarships:</strong> from the Government of Canada, your home government, or foundations.</li>
      </ul>

      <h2 id="when">When should I apply?</h2>
      <p>
        Apply for admission as early as possible, ideally for the fall intake. Some institutions consider you for
        entrance awards only if you apply by an early deadline. Keep a calendar of every scholarship deadline separately
        from admission deadlines.
      </p>

      <h2 id="stronger">How can I make my application stronger?</h2>
      <ul>
        <li>Read the eligibility rules carefully and only apply where you clearly qualify.</li>
        <li>Show impact: leadership, community involvement, research or work achievements with concrete results.</li>
        <li>Write each essay for the specific award — avoid one generic essay for everything.</li>
        <li>Ask referees early and give them a summary of your achievements.</li>
      </ul>

      <h2 id="beware">How do I avoid scholarship scams?</h2>
      <p>
        Genuine scholarships never ask you to pay a fee to receive them. Be wary of anyone who guarantees a scholarship.
        Confirm every award on the institution&apos;s or funder&apos;s official website.
      </p>

      <OfficialSources keys={["educanada_scholarships"]} title="Useful official sources" />
    </GuideLayout>
  );
}
