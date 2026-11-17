import { absoluteUrl, siteConfig } from "@/config/site";
import type { Institution } from "./types";
import { provinceName } from "./data";

/** JSON-LD builders (schema.org). */

export function organizationSchema() {
  const a = siteConfig.contact.address;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/images/brand/canedu-logo.webp"),
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneHref,
    address: {
      "@type": "PostalAddress",
      streetAddress: [a.line1, a.line2].filter(Boolean).join(", "),
      addressLocality: a.city,
      addressRegion: a.province,
      postalCode: a.postalCode,
      addressCountry: "CA",
    },
    sameAs: siteConfig.social.map((s) => s.href),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": absoluteUrl("/#organization") },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${absoluteUrl("/find-university")}?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export type Crumb = { name: string; href: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.href),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: absoluteUrl(path),
    datePublished,
    dateModified,
    author: { "@id": absoluteUrl("/#organization") },
    publisher: { "@id": absoluteUrl("/#organization") },
    inLanguage: "en-CA",
  };
}

export function institutionSchema(inst: Institution) {
  return {
    "@context": "https://schema.org",
    "@type": inst.type === "University" ? "CollegeOrUniversity" : "EducationalOrganization",
    name: inst.name,
    url: inst.website,
    description: inst.overview,
    address: {
      "@type": "PostalAddress",
      addressLocality: inst.city,
      addressRegion: provinceName(inst.province),
      addressCountry: "CA",
    },
  };
}
