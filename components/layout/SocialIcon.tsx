/** Simple original social icons (Lucide no longer ships brand logos). */
export function SocialIcon({ name, className }: { name: string; className?: string }) {
  const common = { className, viewBox: "0 0 24 24", "aria-hidden": true, fill: "currentColor" } as const;
  switch (name) {
    case "facebook":
      return (
        <svg {...common}>
          <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H7.9v3h2.6V21h3Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M6.9 8.8H3.8V20h3.1V8.8ZM5.4 3.8a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM20.2 13.6c0-3-1.6-5-4.2-5-1.5 0-2.4.8-2.8 1.5V8.8h-3V20h3.1v-5.6c0-1.5.6-2.6 2-2.6 1.3 0 1.8 1 1.8 2.6V20h3.1v-6.4Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <path d="M21.6 7.7a2.6 2.6 0 0 0-1.8-1.8C18.2 5.5 12 5.5 12 5.5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.7 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.3 2.6 2.6 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.3ZM10 15V9l5.2 3L10 15Z" />
        </svg>
      );
    default:
      return null;
  }
}
