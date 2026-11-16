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
  tagline: "Admission and study permit guidance for international students choosing Canada.",
  description:
    "Find a Canadian university or college, get help with your application, and prepare your study permit with guidance from licensed immigration professionals.",
  locale: "en_CA",

  contact: {
    // TODO: replace with the inbox shown publicly on the site
    email: "[CONTACT EMAIL]",
    // TODO: replace with the public phone number (display format)
    phoneDisplay: "[PHONE]",
    // TODO: replace with the same number in international format, digits only with +, e.g. "+12045550100"
    phoneHref: "+10000000000",
    /** WhatsApp channel with Canadian immigration news updates */
    whatsappChannel: "https://whatsapp.com/channel/0029VaxucYA47Xe341Nwg60j",
    // TODO: replace with the real office address
    address: {
      line1: "[ADDRESS LINE 1]",
      line2: "[ADDRESS LINE 2]",
      city: "[CITY]",
      province: "[PROVINCE]",
      postalCode: "[POSTAL CODE]",
      country: "Canada",
    },
    // TODO: confirm business hours and time zone
    hours: [
      { days: "Monday – Friday", time: "[9:00 a.m. – 5:00 p.m.]" },
      { days: "Saturday", time: "[By appointment]" },
      { days: "Sunday & statutory holidays", time: "Closed" },
    ],
    timeZoneNote: "[Time zone, e.g. Central Time]",
  },

  operator: {
    // TODO: replace after legal review
    legalName: "[LAW FIRM LEGAL NAME]",
    city: "[CITY]",
  },

  /**
   * Required operator disclosure. Shown in the footer and on the Contact page.
   * TODO: confirm exact wording with the law firm / regulator before launch.
   */
  operatorDisclosure:
    "CanEdu Pathway is operated by [LAW FIRM LEGAL NAME], [CITY], Canada. Immigration advice is provided by licensed legal professionals.",

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
    { label: "Visa & Immigration", href: "/visa-immigration" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
