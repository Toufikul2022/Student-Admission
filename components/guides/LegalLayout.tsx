import type { ReactNode } from "react";
import { FileWarning } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ReviewLine } from "./GuideLayout";

export function LegalLayout({ title, path, draft = true, children }: { title: string; path: string; draft?: boolean; children: ReactNode }) {
  return (
    <>
      <PageHero crumbs={[{ name: title, href: path }]} title={title}>
        <ReviewLine path={path} />
      </PageHero>
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
