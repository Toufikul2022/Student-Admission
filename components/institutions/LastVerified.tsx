import { CalendarCheck } from "lucide-react";
import { formatDate } from "@/lib/data";

export function LastVerified({ date, sourceUrl }: { date: string | null; sourceUrl: string }) {
  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate">
      <CalendarCheck aria-hidden="true" className="size-4 text-primary-600" />
      <span>
        Last verified: <strong className="text-ink">{formatDate(date) ?? "Not yet verified"}</strong>
      </span>
      <span aria-hidden="true">·</span>
      <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-700 underline">
        Source<span className="sr-only"> (opens in a new tab)</span>
      </a>
    </p>
  );
}
