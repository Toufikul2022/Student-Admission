import { Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

const mailto = (subject: string) => `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}`;

/**
 * "Have a question? Email us" card: icon, text and button in one row;
 * on phones the button drops to its own full-width row.
 */
export function EmailCard({ className, subject = "Question about studying in Canada" }: { className?: string; subject?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-4 rounded-2xl border border-line bg-white p-5 sm:grid-cols-[auto_1fr_auto]",
        className,
      )}
    >
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
        <Mail aria-hidden="true" className="size-6" />
      </span>
      <div className="min-w-0">
        <p className="font-bold text-ink">Have a question?</p>
        <p className="text-sm text-slate">Email us and we&apos;ll reply soon.</p>
      </div>
      <EmailButton subject={subject} className="col-span-2 h-11 w-full sm:col-span-1 sm:w-auto" />
    </div>
  );
}

export function EmailButton({ className, subject = "Question about studying in Canada" }: { className?: string; subject?: string }) {
  return (
    <a
      href={mailto(subject)}
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary-600 px-6 whitespace-nowrap text-sm font-medium text-white transition-colors hover:bg-primary-700",
        className,
      )}
    >
      <Mail aria-hidden="true" className="size-4" />
      Email us
    </a>
  );
}
