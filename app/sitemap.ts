import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { institutions, provinces } from "@/lib/data";
import { DRAFTED, reviewDates } from "@/content/review-dates";

/** Generated at build time. Dates come from content/review-dates.ts and each record's last_verified. */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/find-university",
    "/find-university/programs",
    "/contact",
    "/study-in-canada",
    "/study-in-canada/costs",
    "/study-in-canada/intakes",
    "/study-in-canada/language-tests",
    "/study-in-canada/scholarships",
    "/disclaimer",
    "/privacy-policy",
    "/terms",
  ];
  const modified = (path: string) => reviewDates[path]?.reviewed ?? reviewDates[path]?.drafted ?? DRAFTED;

  return [
    ...staticPaths.map((path) => ({
      url: absoluteUrl(path),
      lastModified: modified(path),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path.split("/").length === 2 ? 0.8 : 0.6,
    })),
    ...provinces.map((p) => ({
      url: absoluteUrl(`/study-in-canada/provinces/${p.slug}`),
      lastModified: modified("/study-in-canada/provinces"),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...institutions.map((i) => ({
      url: absoluteUrl(`/find-university/${i.slug}`),
      lastModified: i.last_verified ?? DRAFTED,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
