import { PageHero } from "./PageHero";
import { CtaBand } from "./CtaBand";
import { Container } from "./Container";
import { Button } from "./Button";

/**
 * Temporary page for sections still being written (draft redesign).
 * TODO: replace each use with the final page content before going live.
 */
export function ComingSoon({ title, path }: { title: string; path: string }) {
  return (
    <>
      <PageHero crumbs={[{ name: title, href: path }]} title={title} />
      <Container className="py-16 text-center">
        <p className="mx-auto max-w-xl text-lg text-slate">This page is being prepared. In the meantime, our advisors are happy to help.</p>
        <Button href="/contact" size="lg" className="mt-8">
          Speak to an Advisor
        </Button>
      </Container>
      <CtaBand />
    </>
  );
}
