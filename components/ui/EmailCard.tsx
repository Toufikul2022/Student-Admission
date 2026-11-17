import { Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

const mailto = (subject: string) => `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}`;

/** "Need more information? Send us an email" card. */
export function EmailCard({ className, subject = "Question about studying in Canada" }: { className?: string; subject?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-4 rounded-2xl border border-line bg-white p-5", className)}>
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
        <Mail aria-hidden="true" className="size-6" />
      </span>
      <div className="min-w-0 flex-1 basis-48">
        <p className="font-bold text-ink">Need more information?</p>
        <p className="text-sm text-slate">Email us your questions and an advisor will get back to you.</p>
      </div>
      <EmailButton subject={subject} className="h-11 w-full shrink-0 sm:w-auto" />
    </div>
  );
}

export function EmailButton({ className, subject = "Question about studying in Canada" }: { className?: string; subject?: string }) {
  return (
    <a
      href={mailto(subject)}
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary-600 px-5 text-sm font-medium text-white transition-colors hover:bg-primary-700",
        className,
      )}
    >
      <Mail aria-hidden="true" className="size-4" />
      Send email
    </a>
  );
}
