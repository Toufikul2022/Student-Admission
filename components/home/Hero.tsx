import Link from "next/link";
import { BadgeCheck, ChevronRight, GraduationCap, MapPinned, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { homeStats, quickLinks } from "@/content/home";
import { StudentArt } from "./StudentArt";

const statIcons = { school: GraduationCap, users: Users, map: MapPinned, badge: BadgeCheck };

/** Hero banner + overlapping stats card with a quick-links bar. */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative pb-16 sm:pb-20">
      <div className="relative overflow-hidden bg-[#e9edef]">
        {/* TODO: replace StudentArt with a licensed student photo (next/image, priority, alt text) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] max-w-2xl md:block">
          <StudentArt variant="hero" className="absolute right-0 bottom-0 h-full w-auto" />
        </div>
        <Container className="relative pt-14 pb-36 sm:pt-20 sm:pb-44 lg:pt-24">
          <div className="max-w-xl lg:max-w-2xl">
            <h1 id="hero-title" className="text-4xl font-extrabold tracking-tight text-ink text-balance sm:text-5xl">
              Your path to studying in Canada starts here
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink/80 sm:text-xl">
              Choose the right university or college, apply with confidence, and prepare your study permit with people
              who understand both admissions and immigration.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/find-university" size="lg">Find a University</Button>
              <Button href="/contact" size="lg" variant="outline">Book a Free Consultation</Button>
            </div>
          </div>
        </Container>
      </div>

      <Container className="relative -mt-24 sm:-mt-28">
        <div className="overflow-hidden rounded-2xl bg-white shadow-card-hover">
          {/* TODO: placeholder figures — edit content/home.ts with real, verifiable numbers */}
          <ul aria-label="At a glance" className="grid grid-cols-2 lg:grid-cols-4">
            {homeStats.map((s, i) => {
              const Icon = statIcons[s.icon as keyof typeof statIcons];
              return (
                <li
                  key={s.label}
                  className={`flex flex-col items-center px-4 py-7 text-center ${i % 2 === 1 ? "border-l border-line" : ""} ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
                >
                  <Icon aria-hidden="true" className="size-11 text-primary-600" strokeWidth={1.5} />
                  <p className="mt-3 text-2xl font-extrabold text-primary-700">{s.value}</p>
                  <p className="mt-2 max-w-[14rem] text-sm text-ink">{s.label}</p>
                </li>
              );
            })}
          </ul>
          <nav aria-label="Quick links" className="border-t border-line bg-primary-50">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 px-4 py-5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex items-center gap-1 font-semibold text-primary-700 underline underline-offset-4 hover:text-primary-900">
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
