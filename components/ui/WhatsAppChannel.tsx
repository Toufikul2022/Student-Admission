import { siteConfig } from "@/config/site";
import { SocialIcon } from "@/components/layout/SocialIcon";
import { cn } from "@/lib/cn";

/** "Follow our WhatsApp channel" card for Canadian immigration news updates. */
export function WhatsAppChannelCard({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4 rounded-2xl border border-line bg-white p-5", className)}>
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
        <SocialIcon name="whatsapp" className="size-6" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-bold text-ink">Canadian immigration news on WhatsApp</p>
        <p className="text-sm text-slate">Rule changes and updates, straight to your phone.</p>
      </div>
      <WhatsAppChannelButton className="shrink-0" />
    </div>
  );
}

export function WhatsAppChannelButton({ className, label = "Follow" }: { className?: string; label?: string }) {
  return (
    <a
      href={siteConfig.contact.whatsappChannel}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-full bg-green-600 px-5 text-sm font-medium text-white transition-colors hover:bg-green-700",
        className,
      )}
    >
      <SocialIcon name="whatsapp" className="size-4" />
      {label}
      <span className="sr-only"> our WhatsApp channel (opens in a new tab)</span>
    </a>
  );
}
