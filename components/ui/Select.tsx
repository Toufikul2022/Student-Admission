import type { ComponentProps, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { Field, controlClasses, describedBy } from "./Field";

export type Option = { value: string; label: string };

type Props = Omit<ComponentProps<"select">, "id"> & {
  id: string;
  label: ReactNode;
  options: Option[];
  placeholder?: string;
  hint?: ReactNode;
  error?: string;
  wrapperClassName?: string;
  hideOptional?: boolean;
  srOnlyLabel?: boolean;
};

export function Select({ id, label, options, placeholder, hint, error, required, className, wrapperClassName, hideOptional, srOnlyLabel, ...props }: Props) {
  return (
    <Field id={id} label={label} hint={hint} error={error} required={required} className={wrapperClassName} hideOptional={hideOptional} srOnlyLabel={srOnlyLabel}>
      <div className="relative">
        <select
          id={id}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(id, hint, error)}
          className={cn(controlClasses, "appearance-none pr-10", className)}
          {...props}
        >
          {placeholder !== undefined && <option value="">{placeholder}</option>}
          {options.map((o) => (
            <option key={`${o.value}-${o.label}`} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown aria-hidden="true" className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-slate" />
      </div>
    </Field>
  );
}
