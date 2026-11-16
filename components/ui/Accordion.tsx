"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export type AccordionItem = { id: string; title: ReactNode; content: ReactNode; badge?: ReactNode };

/**
 * Accessible accordion (WAI-ARIA pattern): each header is a <button> with
 * aria-expanded / aria-controls. Collapsed panels stay in the HTML (using the
 * `hidden` attribute) so search engines can still read them.
 */
export function Accordion({
  items,
  headingLevel = 3,
  defaultOpen = [],
  allowMultiple = true,
  className,
}: {
  items: AccordionItem[];
  headingLevel?: 2 | 3 | 4;
  defaultOpen?: string[];
  allowMultiple?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState<string[]>(defaultOpen);
  const uid = useId();
  const H = `h${headingLevel}` as "h2" | "h3" | "h4";

  const toggle = (id: string) =>
    setOpen((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : allowMultiple ? [...cur, id] : [id]));

  return (
    <div className={cn("divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white", className)}>
      {items.map((item) => {
        const isOpen = open.includes(item.id);
        const btnId = `${uid}-${item.id}-button`;
        const panelId = `${uid}-${item.id}-panel`;
        return (
          <div key={item.id}>
            <H className="m-0">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center gap-4 px-5 py-4 text-left text-base font-semibold text-ink transition-colors hover:bg-mist sm:px-6 sm:py-5 sm:text-lg"
              >
                {item.badge}
                <span className="flex-1">{item.title}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn("size-5 shrink-0 text-primary-600 transition-transform", isOpen && "rotate-180")}
                />
              </button>
            </H>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="px-5 pb-5 text-slate leading-relaxed sm:px-6 sm:pb-6"
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
