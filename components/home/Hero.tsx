import Link from "next/link";
import { BadgeCheck, ChevronRight, GraduationCap, MapPinned, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { homeStats, quickLinks } from "@/content/home";
import { HomePhoto } from "./HomePhoto";
import { HeroSlides } from "./HeroSlides";

const statIcons = { school: GraduationCap, users: Users, map: MapPinned, badge: BadgeCheck };

/** Hero banner with slides + overlapping highlights card and quick-links bar. */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative pb-16 sm:pb-20">
      <div className="relative overflow-hidden bg-cloud">
        <Container className="relative grid items-center gap-12 pt-14 pb-36 sm:pt-20 sm:pb-44 md:grid-cols-[1.15fr_1fr] lg:pt-24">
          <div className="lg:pl-16">
            <HeroSlides />
          </div>
          {/* To change this photo, replace public/images/home/hero.webp */}
          <HomePhoto slot="hero" priority className="mx-auto -mb-36 hidden w-full max-w-sm self-end sm:-mb-44 md:block lg:max-w-md" />
        </Container>
      </div>

      <Container className="relative -mt-24 sm:-mt-24 lg:px-36">
        <div className="overflow-hidden rounded-2xl bg-white shadow-card-hover">
          <ul aria-label="Why students choose us" className="grid grid-cols-2 py-2 lg:grid-cols-4 lg:py-8">
            {homeStats.map((s, i) => {
              const Icon = statIcons[s.icon as keyof typeof statIcons];
              return (
                <li
                  key={s.label}
                  className={`flex flex-col items-center px-5 py-6 text-center lg:py-0 ${i > 0 ? "lg:border-l lg:border-line" : ""} ${i % 2 === 1 ? "border-l border-line" : ""} ${i >= 2 ? "border-t border-line lg:border-t-0" : ""}`}
                >
                  <Icon aria-hidden="true" className="size-14 text-primary-600" strokeWidth={1.5} />
                  <p className="mt-5 text-xl font-bold text-primary-700">{s.value}</p>
                  <p className="mt-4 max-w-[15rem] text-ink">{s.label}</p>
                </li>
              );
            })}
          </ul>
          <nav aria-label="Quick links" className="border-t border-line bg-primary-50">
            <ul className="flex flex-wrap justify-center gap-x-12 gap-y-3 px-4 py-7">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex items-center gap-1.5 font-bold text-primary-700 underline underline-offset-4 hover:text-primary-900">
                    {l.label}
                    <ChevronRight aria-hidden="true" className="size-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
}
