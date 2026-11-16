import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";
import { STUDY_LEVELS, provinces } from "@/lib/data";
import { Logo } from "./Logo";
import { SocialIcon } from "./SocialIcon";
import { CurrentYear } from "./CurrentYear";

const POPULAR_PROVINCES = ["manitoba", "ontario", "british-columbia", "alberta", "quebec", "nova-scotia"];

function FooterList({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-bold tracking-wider text-white uppercase">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-primary-100 underline-offset-4 hover:text-white hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const c = siteConfig.contact;
  return (
    <footer className="bg-primary-900 text-primary-100">
      <div className="mx-auto w-full max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo invert />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              {siteConfig.name} helps international students choose a Canadian university or college, apply with
              confidence, and prepare a strong study permit application.
            </p>
            <ul className="mt-6 flex gap-2" aria-label="Social media">
              {siteConfig.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  >
                    <SocialIcon name={s.icon} className="size-5" />
                    <span className="sr-only">{s.label} (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-3">
            <FooterList
              title="Quick links"
              links={[
                { label: "Study in Canada", href: "/study-in-canada" },
                { label: "Find a University", href: "/find-university" },
                { label: "Search Programs", href: "/find-university/programs" },
                { label: "Visa & Immigration", href: "/visa-immigration" },
                { label: "Study Permit Guide", href: "/visa-immigration/study-permit" },
                { label: "Contact Us", href: "/contact" },
              ]}
            />
            <FooterList
              title="Provinces"
              links={POPULAR_PROVINCES.map((slug) => ({
                label: provinces.find((p) => p.slug === slug)?.name ?? slug,
                href: `/study-in-canada/provinces/${slug}`,
              }))}
            />
            <FooterList
              title="Study levels"
              links={STUDY_LEVELS.map((l) => ({ label: l.label, href: `/find-university?level=${l.value}` }))}
            />
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold tracking-wider text-white uppercase">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-400" />
                <address className="not-italic">
                  {c.address.line1}
                  <br />
                  {c.address.city}, {c.address.province} {c.address.postalCode}
                </address>
              </li>
              <li className="flex gap-3">
                <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-400" />
                <a href={`tel:${c.phoneHref}`} className="hover:text-white hover:underline">
                  {c.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-400" />
                <a href={`mailto:${c.email}`} className="break-all hover:text-white hover:underline">
                  {c.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MessageCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-400" />
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">
                  WhatsApp us<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8">
          <p className="max-w-4xl text-sm leading-relaxed text-white">{siteConfig.operatorDisclosure}</p>
          <p className="mt-2 max-w-4xl text-xs leading-relaxed">
            Information on this website is general in nature and is not legal advice. Admission and visa decisions are
            made by institutions and by Immigration, Refugees and Citizenship Canada (IRCC), not by us.
          </p>
          <div className="mt-6 flex flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between">
            <p>
              © <CurrentYear /> {siteConfig.name}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              <li><Link href="/privacy-policy" className="hover:text-white hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white hover:underline">Terms of Use</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white hover:underline">Disclaimer</Link></li>
              <li><Link href="/sitemap.xml" className="hover:text-white hover:underline">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
