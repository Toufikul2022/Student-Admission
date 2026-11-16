import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Field, controlClasses, describedBy } from "./Field";

type Props = Omit<ComponentProps<"input">, "id"> & {
  id: string;
  label: ReactNode;
  hint?: ReactNode;
  error?: string;
  wrapperClassName?: string;
  hideOptional?: boolean;
  srOnlyLabel?: boolean;
};

export function Input({ id, label, hint, error, required, className, wrapperClassName, hideOptional, srOnlyLabel, ...props }: Props) {
  return (
    <Field id={id} label={label} hint={hint} error={error} required={required} className={wrapperClassName} hideOptional={hideOptional} srOnlyLabel={srOnlyLabel}>
      <input
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, hint, error)}
        className={cn(controlClasses, className)}
        {...props}
      />
    </Field>
  );
}
