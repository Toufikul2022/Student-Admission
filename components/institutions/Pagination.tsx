"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

export function Pagination({ current, total, onChange }: { current: number; total: number; onChange: (page: number) => void }) {
  if (total <= 1) return null;
  const go = (p: number) => {
    onChange(p);
    document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <nav aria-label="Results pages" className="mt-10 flex items-center justify-center gap-2">
      <button type="button" disabled={current === 1} onClick={() => go(current - 1)} className="flex size-10 items-center justify-center rounded-full border border-line hover:bg-mist disabled:opacity-40">
        <ChevronLeft aria-hidden="true" className="size-5" />
        <span className="sr-only">Previous page</span>
      </button>
      {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => go(p)}
          aria-current={p === current ? "page" : undefined}
          className={cn("size-10 rounded-full text-sm font-semibold", p === current ? "bg-primary-600 text-white" : "border border-line hover:bg-mist")}
        >
          <span className="sr-only">Page </span>
          {p}
        </button>
      ))}
      <button type="button" disabled={current === total} onClick={() => go(current + 1)} className="flex size-10 items-center justify-center rounded-full border border-line hover:bg-mist disabled:opacity-40">
        <ChevronRight aria-hidden="true" className="size-5" />
        <span className="sr-only">Next page</span>
      </button>
    </nav>
  );
}
