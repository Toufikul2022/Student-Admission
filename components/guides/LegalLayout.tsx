import type { ReactNode } from "react";
import { FileWarning } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ReviewLine } from "./GuideLayout";

export function LegalLayout({ title, path, draft = true, children }: { title: string; path: string; draft?: boolean; children: ReactNode }) {
  return (
    <>
      <section className="border-b border-line bg-mist pt-8 pb-10">
        <Container className="max-w-4xl">
          <Breadcrumbs items={[{ name: title, href: path }]} />
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink">{title}</h1>
          <div className="mt-4">
            <ReviewLine path={path} />
          </div>
        </Container>
      </section>
      <Container className="max-w-4xl py-12">
        {/* TODO: remove this banner (draft={false}) only after legal review */}
        {draft && (
          <p role="note" className="mb-10 flex gap-3 rounded-2xl border border-accent-100 bg-accent-50 p-4 text-sm font-semibold text-accent-800">
            <FileWarning aria-hidden="true" className="size-5 shrink-0" />
            DRAFT — requires legal review. This text is a starting point and has not been approved.
          </p>
        )}
        <div className="prose-guide">{children}</div>
      </Container>
    </>
  );
}
