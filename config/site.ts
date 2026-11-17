/**
 * Site-wide settings. Almost everything a non-developer needs to change
 * (brand name, contact details, disclosure wording) lives in this one file.
 *
 * TODO: replace every value in [SQUARE BRACKETS] before launch.
 */

export const siteConfig = {
  name: "CanEdu Pathway",
  // TODO: replace with the real domain, e.g. "examplebrand.ca"
  domain: "[DOMAIN.ca]",
  /**
   * Full public URL, used for canonical links, sitemap and social previews.
   * Set NEXT_PUBLIC_SITE_URL in your hosting dashboard (see .env.example).
   */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.ca").replace(/\/$/, ""),
  tagline: "Admission guidance for international students choosing Canada.",
  description:
    "Find the right Canadian university, college and program, and get expert help with your admission application.",
  locale: "en_CA",

  contact: {
    // TODO: replace with the inbox shown publicly on the site
    email: "[CONTACT EMAIL]",
    phoneDisplay: "(204) 869-9786",
    phoneHref: "+12048699786",
    /** WhatsApp channel for news and updates */
    whatsappChannel: "https://whatsapp.com/channel/0029VaxucYA47Xe341Nwg60j",
    address: {
      line1: "1651 Chancellor Dr",
      line2: "",
      city: "Winnipeg",
      province: "MB",
      postalCode: "R3T 4B8",
      country: "Canada",
    },
    // TODO: confirm business hours and time zone
    hours: [
      { days: "Monday – Friday", time: "[9:00 a.m. – 5:00 p.m.]" },
      { days: "Saturday", time: "[By appointment]" },
      { days: "Sunday & statutory holidays", time: "Closed" },
    ],
    timeZoneNote: "Central Time (Winnipeg)",
  },

  // TODO: replace with real profile URLs, or delete any you don't use
  social: [
    { label: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
    { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
    { label: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
    { label: "WhatsApp channel", href: "https://whatsapp.com/channel/0029VaxucYA47Xe341Nwg60j", icon: "whatsapp" },
  ] as const,

  nav: [
    { label: "Home", href: "/" },
    { label: "Study in Canada", href: "/study-in-canada" },
    { label: "Find University", href: "/find-university" },
    { label: "Programs", href: "/find-university/programs" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
