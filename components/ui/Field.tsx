import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Shared label / hint / error wrapper so every control is announced correctly. */
export function Field({
  id,
  label,
  hint,
  error,
  required,
  children,
  className,
  hideOptional,
  srOnlyLabel,
}: {
  id: string;
  label: ReactNode;
  hint?: ReactNode;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
  /** Don't show "(optional)" — for search and filter controls */
  hideOptional?: boolean;
  /** Visually hide the label (still read by screen readers) */
  srOnlyLabel?: boolean;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className={srOnlyLabel ? "sr-only" : "text-sm font-semibold text-ink"}>
        {label}
        {required ? (
          <span className="text-danger-700" aria-hidden="true">
            {" "}*
          </span>
        ) : hideOptional ? null : (
          <span className="font-normal text-slate"> (optional)</span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs text-slate">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-sm font-medium text-danger-700">
          {error}
        </p>
      )}
    </div>
  );
}

export const controlClasses =
  "w-full rounded-xl border border-line bg-white min-h-12 px-3.5 py-2.5 text-base text-ink sm:min-h-0 sm:text-[0.95rem] placeholder:text-slate/70 transition-colors hover:border-primary-200 focus:border-primary-600 focus:outline-none focus-visible:outline-3 focus-visible:outline-offset-1 aria-[invalid=true]:border-danger-700";

export function describedBy(id: string, hint?: unknown, error?: string) {
  return error ? `${id}-error` : hint ? `${id}-hint` : undefined;
}
