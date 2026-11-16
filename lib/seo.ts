import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/config/site";

/**
 * Builds per-page metadata: title, description, canonical URL, Open Graph and Twitter.
 * The default social image comes from app/opengraph-image.tsx.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  noindex,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noindex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}
