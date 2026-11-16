import { ExternalLink, Info } from "lucide-react";
import { fact, formatDate, link } from "@/lib/data";

/** "Rules change — check official sources" note with a list of official links. */
export function OfficialSources({ keys, title = "Official sources" }: { keys: string[]; title?: string }) {
  return (
    <section aria-labelledby="official-sources" className="not-prose mt-12 rounded-2xl border border-line bg-mist p-6">
      <h2 id="official-sources" className="flex items-center gap-2 text-lg font-bold text-ink">
        <Info aria-hidden="true" className="size-5 text-primary-600" />
        {title}
      </h2>
      <p className="mt-2 text-sm text-slate">
        Immigration rules, fees and processing times change frequently. This page is general information, not legal
        advice. Always check the official Government of Canada (IRCC) pages before you apply.
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

/**
 * Shows a figure from data/immigration-facts.json. If it hasn't been verified yet
 * (value is null), shows "to be confirmed" with a link to the official source.
 */
export function FactValue({ k }: { k: string }) {
  const f = fact(k);
  if (!f) return <span>[unknown fact: {k}]</span>;
  if (f.value == null) {
    return (
      <span className="rounded bg-accent-50 px-1.5 py-0.5 font-semibold text-accent-800">
        [to be confirmed —{" "}
        <a href={f.source_url} target="_blank" rel="noopener noreferrer" className="text-accent-800! underline">
          see current figure on the official site<span className="sr-only"> (opens in a new tab)</span>
        </a>
        ]
      </span>
    );
  }
  return (
    <span>
      <strong>{f.value}</strong>{" "}
      <span className="text-sm text-slate">
        (as of {formatDate(f.last_verified)},{" "}
        <a href={f.source_url} target="_blank" rel="noopener noreferrer">
          source
        </a>
        )
      </span>
    </span>
  );
}
