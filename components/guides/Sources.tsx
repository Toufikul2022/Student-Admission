import { ExternalLink, Info } from "lucide-react";
import { link } from "@/lib/data";

/** "Rules change — check official sources" note with a list of official links. */
export function OfficialSources({ keys, title = "Official sources" }: { keys: string[]; title?: string }) {
  return (
    <section aria-labelledby="official-sources" className="not-prose mt-12 rounded-2xl border border-line bg-mist p-6">
      <h2 id="official-sources" className="flex items-center gap-2 text-lg font-bold text-ink">
        <Info aria-hidden="true" className="size-5 text-primary-600" />
        {title}
      </h2>
      <p className="mt-2 text-sm text-slate">
        Programs, fees, deadlines and admission requirements change from year to year. This page is general
        information. Always confirm details with each institution and the official sources below before you apply.
      </p>
      <ul className="mt-4 space-y-2">
        {keys.map((k) => {
          const l = link(k);
          return (
            <li key={k}>
              <a href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 py-1.5 text-sm font-semibold text-primary-700 underline sm:py-0">
                <ExternalLink aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                {l.label}
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
