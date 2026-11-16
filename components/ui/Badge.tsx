import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "neutral" | "primary" | "accent" | "success" | "muted";

const tones: Record<Tone, string> = {
  neutral: "bg-mist text-ink border-line",
  primary: "bg-primary-50 text-primary-700 border-primary-100",
  accent: "bg-accent-50 text-accent-800 border-accent-100",
  success: "bg-success-50 text-success-700 border-success-50",
  muted: "bg-white text-slate border-line border-dashed",
};

export function Badge({ tone = "neutral", icon, children, className }: { tone?: Tone; icon?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold leading-5",
        tones[tone],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
