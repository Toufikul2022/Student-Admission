import { ComingSoon } from "@/components/ui/ComingSoon";
import { pageMetadata } from "@/lib/seo";

// TODO (draft): replace with the final content. Kept out of search results until then.
export const metadata = pageMetadata({
  title: "Best Province for Student PR",
  description: "Best Province for Student PR — CanEdu Pathway.",
  path: "/best-province-for-student-pr",
  noindex: true,
});

export default function BestProvinceForStudentPrPage() {
  return <ComingSoon title="Best Province for Student PR" path="/best-province-for-student-pr" />;
}
