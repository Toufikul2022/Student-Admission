import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomePhoto } from "./HomePhoto";

/** Light call-to-action banner with artwork on the right. */
export function PromoBanner() {
  return (
    <section aria-labelledby="promo-title" className="py-14 sm:py-16">
      <Container>
        <div className="relative flex flex-col overflow-hidden rounded-3xl bg-mist sm:flex-row sm:items-center">
          <div className="flex-1 p-8 sm:p-10 lg:p-12">
            <h2 id="promo-title" className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Not sure if you&apos;re ready to apply?
            </h2>
            <p className="mt-3 max-w-xl text-ink/80">
              Get an honest review of your grades, budget and documents before you spend money on applications. We&apos;ll
              tell you where you stand and what to improve.
            </p>
            <Button href="/contact" className="mt-6">Check my readiness</Button>
          </div>
          <div className="mx-auto w-72 shrink-0 px-8 pb-10 sm:mr-6 sm:w-80 sm:pt-14 sm:pb-10 sm:pr-10 sm:pl-0">
            {/* To change this photo, replace public/images/home/banner.webp */}
            <HomePhoto slot="banner" />
          </div>
        </div>
      </Container>
    </section>
  );
}
