import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { STUDY_LEVELS, provinces } from "@/lib/data";
import { Logo } from "./Logo";
import { CurrentYear } from "./CurrentYear";

const POPULAR_PROVINCES = ["manitoba", "ontario", "british-columbia", "alberta", "quebec", "nova-scotia"];

function FooterList({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-bold tracking-wider text-white uppercase">{title}</h2>
      <ul className="mt-3 sm:mt-4 sm:space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="block py-2 text-[0.95rem] text-[#e5e5e5] underline-offset-4 hover:text-white hover:underline sm:inline sm:py-0 sm:text-sm">
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
    <footer className="bg-[#111111] text-[#e5e5e5]">
      <div className="mx-auto w-full max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo invert />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              {siteConfig.name} helps international students find the right Canadian university, college and program,
              and apply with confidence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:col-span-5 lg:grid-cols-3">
            <FooterList
              title="Quick links"
              links={[
                { label: "Study in Canada", href: "/study-in-canada" },
                { label: "Find a University", href: "/find-university" },
                { label: "Search Programs", href: "/find-university/programs" },
                { label: "Scholarships", href: "/study-in-canada/scholarships" },
                { label: "Intakes", href: "/study-in-canada/intakes" },
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
            <ul className="mt-4 space-y-1 text-[0.95rem] sm:space-y-3 sm:text-sm">
              <li className="flex items-center gap-3 py-1.5 sm:items-start sm:py-0">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-white" />
                <address className="not-italic">
                  {c.address.line1}
                  <br />
                  {c.address.city}, {c.address.province} {c.address.postalCode}
                </address>
              </li>
              <li className="flex items-center gap-3 py-1.5 sm:items-start sm:py-0">
                <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-white" />
                <a href={`tel:${c.phoneHref}`} className="hover:text-white hover:underline">
                  {c.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3 py-1.5 sm:items-start sm:py-0">
                <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-white" />
                <a href={`mailto:${c.email}`} className="break-all hover:text-white hover:underline">
                  {c.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8">
          <p className="max-w-4xl text-xs leading-relaxed">
            Information on this website is general in nature. Admission decisions are made by each institution, not by
            us. Always confirm program details, fees and deadlines with the institution.
          </p>
          <div className="mt-6 flex flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between">
            <p>
              © <CurrentYear /> {siteConfig.name}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              <li><Link href="/privacy-policy" className="inline-block py-2 hover:text-white hover:underline sm:py-0">Privacy Policy</Link></li>
              <li><Link href="/terms" className="inline-block py-2 hover:text-white hover:underline sm:py-0">Terms of Use</Link></li>
              <li><Link href="/disclaimer" className="inline-block py-2 hover:text-white hover:underline sm:py-0">Disclaimer</Link></li>
              <li><Link href="/sitemap.xml" className="inline-block py-2 hover:text-white hover:underline sm:py-0">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
