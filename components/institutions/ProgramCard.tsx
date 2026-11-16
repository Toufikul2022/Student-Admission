import Link from "next/link";
import { CalendarDays, Clock, GraduationCap, MapPin, Wallet } from "lucide-react";
import type { Program } from "@/lib/types";
import { fieldLabel, formatCad, institutionBySlug, levelLabel, monthShort, provinceName } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";
import { PgwpBadge } from "./PgwpBadge";

export function ProgramCard({ program }: { program: Program }) {
  const inst = institutionBySlug(program.institutionSlug);
  if (!inst) return null;
  return (
    <Card interactive className="flex h-full flex-col p-5">
      <h2 className="text-lg leading-snug font-bold text-ink">{program.name}</h2>
      <p className="mt-1 text-sm font-semibold text-primary-700">
        <Link href={`/find-university/${inst.slug}`} className="hover:underline">
          {inst.name}
        </Link>
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Badge tone="primary">{fieldLabel(program.field)}</Badge>
        <PgwpBadge value={program.pgwpEligible} />
        {program.sample && <Badge tone="accent">Sample data</Badge>}
      </div>
      <dl className="mt-4 space-y-2 border-t border-line pt-4 text-sm">
        <div className="flex items-center gap-2"><MapPin aria-hidden="true" className="size-4 text-primary-600" /><dt className="sr-only">Location</dt><dd>{inst.city}, {provinceName(inst.province)}</dd></div>
        <div className="flex items-center gap-2"><GraduationCap aria-hidden="true" className="size-4 text-primary-600" /><dt className="sr-only">Level</dt><dd>{levelLabel(program.level)}</dd></div>
        <div className="flex items-center gap-2"><Wallet aria-hidden="true" className="size-4 text-primary-600" /><dt className="text-slate">Tuition:</dt><dd className="font-semibold">{formatCad(program.tuitionPerYearCad)}</dd></div>
        <div className="flex items-center gap-2"><Clock aria-hidden="true" className="size-4 text-primary-600" /><dt className="text-slate">Duration:</dt><dd className="font-semibold">{program.durationMonths ? `${program.durationMonths} months` : "TBC"}</dd></div>
        <div className="flex items-center gap-2"><CalendarDays aria-hidden="true" className="size-4 text-primary-600" /><dt className="text-slate">Intakes:</dt><dd className="font-semibold">{program.intakes.map(monthShort).join(", ") || "TBC"}</dd></div>
      </dl>
      <div className="mt-auto grid gap-2 pt-5">
        <Link href={`/find-university/${inst.slug}#programs`} className={buttonClasses("outline", "sm", "w-full")}>
          View details<span className="sr-only"> for {program.name}</span>
        </Link>
        <Link href={`/contact?institution=${inst.slug}`} className={buttonClasses("primary", "sm", "w-full")}>
          Get help applying<span className="sr-only"> to {program.name}</span>
        </Link>
      </div>
    </Card>
  );
}
