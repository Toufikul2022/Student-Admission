"use client";

import { cn } from "@/lib/cn";

/** On/off switch (role="switch") with a visible text label. */
export function Toggle({
  id,
  label,
  description,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-start gap-3">
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-describedby={description ? `${id}-desc` : undefined}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative mt-0.5 inline-flex h-6 w-11 shrink-0 items-center rounded-full border-2 transition-colors",
          checked ? "border-primary-600 bg-primary-600" : "border-slate/60 bg-white",
        )}
      >
        <span className="sr-only">{label}</span>
        <span
          aria-hidden="true"
          className={cn(
            "inline-block size-4 rounded-full transition-transform",
            checked ? "translate-x-5 bg-white" : "translate-x-0.5 bg-slate",
          )}
        />
      </button>
      <label htmlFor={id} className="cursor-pointer text-sm">
        <span className="font-semibold text-ink">{label}</span>
        {description && (
          <span id={`${id}-desc`} className="block text-xs text-slate">
            {description}
          </span>
        )}
      </label>
    </div>
  );
}
