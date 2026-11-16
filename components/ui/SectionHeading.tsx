import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  id,
  className,
  invert,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  id?: string;
  className?: string;
  invert?: boolean;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-2xl text-center", "mb-10", className)}>
      {eyebrow && (
        <p className={cn("mb-2 text-sm font-bold uppercase tracking-wider", invert ? "text-accent-400" : "text-accent-700")}>
          {eyebrow}
        </p>
      )}
      <Tag id={id} className={cn("text-3xl font-extrabold tracking-tight text-balance sm:text-4xl", invert ? "text-white" : "text-ink")}>
        {title}
      </Tag>
      {description && (
        <p className={cn("mt-4 text-lg leading-relaxed text-pretty", invert ? "text-primary-100" : "text-slate")}>{description}</p>
      )}
    </div>
  );
}
