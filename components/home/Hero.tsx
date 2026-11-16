import Image from "next/image";
import { CalendarCheck, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white">
      <Container className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white px-3 py-1 text-sm font-semibold text-primary-700">
            <ShieldCheck aria-hidden="true" className="size-4" />
            Guidance from licensed immigration professionals
          </p>
          <h1 id="hero-title" className="mt-5 text-4xl font-extrabold tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl">
            Your path to studying in Canada <span className="text-primary-600">starts here</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate sm:text-xl">
            Choose the right university or college, apply with confidence, and prepare your study permit with people
            who understand both admissions and immigration.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/find-university" size="lg">
              <Search aria-hidden="true" className="size-5" />
              Find a University
            </Button>
            <Button href="/contact" size="lg" variant="outline">
              <CalendarCheck aria-hidden="true" className="size-5" />
              Book a Free Consultation
            </Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xl">
          {/* TODO: replace with the final brand illustration or a licensed, royalty-free photo (keep descriptive alt text). */}
          <Image
            src="/images/hero-illustration.svg"
            alt="Illustration of a winding path across lakes and hills leading to a campus building"
            width={560}
            height={480}
            priority
            unoptimized
            className="h-auto w-full drop-shadow-xl"
          />
        </div>
      </Container>
    </section>
  );
}
