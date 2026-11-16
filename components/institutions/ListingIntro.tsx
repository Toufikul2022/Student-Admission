import { Info } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Crumb } from "@/lib/schema";

export function ListingIntro({ crumbs, lede }: { crumbs: Crumb[]; lede: React.ReactNode }) {
  return (
    <div className="mb-8 space-y-4">
      <Breadcrumbs items={crumbs} />
      <p className="max-w-3xl text-lg text-slate">{lede}</p>
      {/* TODO: remove this notice once every record has been verified and "sample" is false */}
      <p className="flex max-w-3xl gap-2 rounded-xl border border-accent-100 bg-accent-50 p-3 text-sm text-accent-800">
        <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
        <span>
          Listings marked <strong>Sample data</strong> are still being verified. Tuition, intakes and PGWP status shown
          as <strong>TBC</strong> must be confirmed on each institution&apos;s official website and the{" "}
          <Link href="/visa-immigration/study-permit" className="font-semibold underline">IRCC DLI list</Link>.
        </span>
      </p>
    </div>
  );
}
