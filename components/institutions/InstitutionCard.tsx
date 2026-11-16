import Link from "next/link";
import { CalendarDays, MapPin, Wallet } from "lucide-react";
import type { Institution } from "@/lib/types";
import { formatTuitionRange, monthShort, provinceName } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";
import { InstitutionLogo } from "./InstitutionLogo";
import { PgwpBadge } from "./PgwpBadge";

export function InstitutionCard({ inst, headingLevel = 3 }: { inst: Institution; headingLevel?: 2 | 3 }) {
  const H = `h${headingLevel}` as "h2" | "h3";
  return (
    <Card interactive className="flex h-full flex-col p-5">
      <div className="flex items-start gap-4">
        <InstitutionLogo inst={inst} />
        <div className="min-w-0">
          <H className="text-lg leading-snug font-bold text-ink">
            <Link href={`/find-university/${inst.slug}`} className="hover:text-primary-700 hover:underline">
              {inst.name}
            </Link>
          </H>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate">
            <MapPin aria-hidden="true" className="size-4 shrink-0" />
            {inst.city}, {provinceName(inst.province)}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge tone="primary">{inst.type}</Badge>
        <PgwpBadge value={inst.hasPgwpEligiblePrograms} />
        {inst.sample && <Badge tone="accent">Sample data</Badge>}
      </div>

      <dl className="mt-4 space-y-2 border-t border-line pt-4 text-sm">
        <div className="flex items-center gap-2">
          <Wallet aria-hidden="true" className="size-4 shrink-0 text-primary-600" />
          <dt className="text-slate">Tuition:</dt>
          <dd className="font-semibold text-ink">{formatTuitionRange(inst.tuitionRangeCad)}</dd>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays aria-hidden="true" className="size-4 shrink-0 text-primary-600" />
          <dt className="text-slate">Intakes:</dt>
          <dd className="font-semibold text-ink">{inst.intakes.length ? inst.intakes.map(monthShort).join(", ") : "TBC"}</dd>
        </div>
      </dl>

      <div className="mt-auto grid gap-2 pt-5">
        <Link href={`/find-university/${inst.slug}`} className={buttonClasses("outline", "sm", "w-full")}>
          View details<span className="sr-only"> for {inst.name}</span>
        </Link>
        <Link href={`/contact?institution=${inst.slug}`} className={buttonClasses("primary", "sm", "w-full")}>
          Get help applying<span className="sr-only"> to {inst.name}</span>
        </Link>
      </div>
    </Card>
  );
}
