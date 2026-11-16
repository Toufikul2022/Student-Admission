import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StudentArt } from "./StudentArt";

/** Light call-to-action banner with artwork on the right. */
export function PromoBanner() {
  return (
    <section aria-labelledby="promo-title" className="py-14 sm:py-16">
      <Container>
        <div className="relative flex flex-col overflow-hidden rounded-3xl bg-primary-50 sm:flex-row sm:items-center">
          <div className="flex-1 p-8 sm:p-10 lg:p-12">
            <h2 id="promo-title" className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Not sure if you&apos;re ready to apply?
            </h2>
            <p className="mt-3 max-w-xl text-ink/80">
              Get an honest review of your grades, budget and documents before you spend money on applications. We&apos;ll
              tell you where you stand and what to improve.
            </p>
            <Button href="/contact" className="mt-6">Check my readiness</Button>
          </div>
          <div className="mx-auto w-56 shrink-0 self-end sm:mr-12 sm:w-64">
            {/* TODO: replace with a licensed student photo */}
            <StudentArt variant="banner" />
          </div>
        </div>
      </Container>
    </section>
  );
}
