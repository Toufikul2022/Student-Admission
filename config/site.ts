/**
 * Site-wide settings. Almost everything a non-developer needs to change
 * (brand name, contact details, disclosure wording) lives in this one file.
 *
 * TODO: replace every value in [SQUARE BRACKETS] before launch.
 */

export const siteConfig = {
  name: "CanEdu Pathway",
  domain: "canedup.ca",
  /**
   * Full public URL, used for canonical links, sitemap and social previews.
   * Set NEXT_PUBLIC_SITE_URL in your hosting dashboard (see .env.example).
   */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.canedup.ca").replace(/\/$/, ""),
  tagline: "Admission guidance for international students choosing Canada.",
  description:
    "Find the right Canadian university, college and program, and get expert help with your admission application.",
  locale: "en_CA",

  contact: {
    email: "info@canedup.ca",
    phoneDisplay: "(204) 869-9786",
    phoneHref: "+12048699786",
    address: {
      line1: "1651 Chancellor Dr",
      line2: "",
      city: "Winnipeg",
      province: "MB",
      postalCode: "R3T 4B8",
      country: "Canada",
    },
    hours: [
      { days: "Monday – Friday", time: "11:00 a.m. – 7:00 p.m." },
      { days: "Saturday – Sunday", time: "Closed" },
    ],
    timeZoneNote: "Central Time (Winnipeg)",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Admission in Canada", href: "/study-in-canada" },
    { label: "PR Targeted Study Program", href: "/pr-targeted-study-program" },
    { label: "Best Province for Student PR", href: "/best-province-for-student-pr" },
    { label: "Our Team", href: "/our-team" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
