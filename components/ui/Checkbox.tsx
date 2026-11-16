import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = Omit<ComponentProps<"input">, "id" | "type"> & {
  id: string;
  label: ReactNode;
  description?: ReactNode;
  error?: string;
  wrapperClassName?: string;
};

export function Checkbox({ id, label, description, error, className, wrapperClassName, ...props }: Props) {
  const describedBy = [description ? `${id}-desc` : null, error ? `${id}-error` : null].filter(Boolean).join(" ") || undefined;
  return (
    <div className={cn("flex flex-col gap-1", wrapperClassName)}>
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn("mt-0.5 size-5 shrink-0 cursor-pointer rounded border-line accent-primary-600", className)}
          {...props}
        />
        <label htmlFor={id} className="cursor-pointer text-sm leading-snug text-ink">
          {label}
          {description && (
            <span id={`${id}-desc`} className="mt-0.5 block text-xs text-slate">
              {description}
            </span>
          )}
        </label>
      </div>
      {error && (
        <p id={`${id}-error`} className="pl-8 text-sm font-medium text-danger-700">
          {error}
        </p>
      )}
    </div>
  );
}
