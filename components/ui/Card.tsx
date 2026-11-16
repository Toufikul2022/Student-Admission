import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function Card({ className, interactive, ...props }: ComponentProps<"div"> & { interactive?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-white shadow-card",
        interactive && "transition-shadow duration-200 hover:shadow-card-hover",
        className,
      )}
      {...props}
    />
  );
}
