import { cn } from "@/lib/cn";

/**
 * Original placeholder artwork: brand-colour "leaf" shapes behind a simple
 * student figure. Decorative only.
 *
 * TODO: replace each use with a licensed, royalty-free photo of a student
 * (transparent PNG cut-out works best), rendered with next/image and a short alt text.
 */
export function StudentArt({ variant = "hero", className }: { variant?: "hero" | "steps" | "banner" | "form"; className?: string }) {
  const shapes = {
    hero: (
      <>
        <path d="M70 0 h230 v300 h-80 a150 150 0 0 1 -150 -150Z" fill="#0B6BDB" />
        <rect x="300" y="290" width="100" height="210" fill="#F27B0F" />
        <path d="M300 290 h100 v0 a100 100 0 0 0 -100 -100Z" fill="#F27B0F" opacity=".35" />
      </>
    ),
    steps: (
      <>
        <path d="M20 60 h170 v170 a170 170 0 0 1 -170 -170Z" fill="#F27B0F" />
        <path d="M380 40 v190 h-190 a190 190 0 0 1 190 -190Z" fill="#0B6BDB" />
        <path d="M80 250 h120 v170 a120 120 0 0 1 -120 -120Z" fill="#9FCBF0" />
      </>
    ),
    banner: (
      <>
        <path d="M60 40 h200 v220 h-60 a140 140 0 0 1 -140 -140Z" fill="#0B6BDB" />
        <path d="M250 260 h90 a90 90 0 0 0 -90 -90Z" fill="#F27B0F" />
      </>
    ),
    form: (
      <>
        <circle cx="210" cy="230" r="180" fill="#D3ECFA" />
        <path d="M330 80 a70 70 0 0 1 70 70 h-70Z" fill="#F27B0F" />
      </>
    ),
  }[variant];

  return (
    <svg viewBox="0 0 400 500" aria-hidden="true" className={cn("h-auto w-full", className)} preserveAspectRatio={variant === "hero" ? "xMaxYMax meet" : "xMidYMax meet"}>
      {shapes}
      {/* Student figure */}
      <g>
        <path d="M110 500 C110 380 150 330 205 330 C260 330 300 380 300 500Z" fill="#333333" />
        <path d="M140 500 C140 400 170 352 205 352 C240 352 270 400 270 500Z" fill="#F5F7F8" opacity=".12" />
        <rect x="190" y="290" width="30" height="50" rx="12" fill="#C68B62" />
        <ellipse cx="205" cy="250" rx="52" ry="60" fill="#C68B62" />
        <path d="M150 250 C145 185 185 165 210 168 C250 170 268 200 262 250 C255 220 238 205 205 205 C175 205 160 222 150 250Z" fill="#2B1B14" />
        <path d="M182 268 q23 18 46 0" fill="none" stroke="#333333" strokeWidth="4" strokeLinecap="round" />
        <circle cx="185" cy="242" r="5" fill="#333333" />
        <circle cx="226" cy="242" r="5" fill="#333333" />
        {/* books */}
        <rect x="150" y="400" width="80" height="95" rx="6" fill="#F27B0F" transform="rotate(-8 190 447)" />
        <rect x="160" y="395" width="80" height="95" rx="6" fill="#FFFFFF" transform="rotate(-4 200 442)" />
        <path d="M230 430 C250 420 268 430 270 450 L240 470Z" fill="#C68B62" />
      </g>
    </svg>
  );
}
