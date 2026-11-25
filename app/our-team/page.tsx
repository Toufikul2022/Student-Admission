import { ComingSoon } from "@/components/ui/ComingSoon";
import { pageMetadata } from "@/lib/seo";

// TODO (draft): replace with the final content. Kept out of search results until then.
export const metadata = pageMetadata({
  title: "Our Team",
  description: "Our Team — CanEdu Pathway.",
  path: "/our-team",
  noindex: true,
});

export default function OurTeamPage() {
  return <ComingSoon title="Our Team" path="/our-team" />;
}
