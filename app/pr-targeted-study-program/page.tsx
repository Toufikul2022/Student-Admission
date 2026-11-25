import { ComingSoon } from "@/components/ui/ComingSoon";
import { pageMetadata } from "@/lib/seo";

// TODO (draft): replace with the final content. Kept out of search results until then.
export const metadata = pageMetadata({
  title: "PR Targeted Study Program",
  description: "PR Targeted Study Program — CanEdu Pathway.",
  path: "/pr-targeted-study-program",
  noindex: true,
});

export default function PrTargetedStudyProgramPage() {
  return <ComingSoon title="PR Targeted Study Program" path="/pr-targeted-study-program" />;
}
