import { BadgeCheck, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

/** true → "PGWP eligible"; null → "PGWP: TBC"; false → nothing. */
export function PgwpBadge({ value, label = "PGWP eligible" }: { value: boolean | null; label?: string }) {
  if (value === true)
    return (
      <Badge tone="success" icon={<BadgeCheck aria-hidden="true" className="size-3.5" />}>
        {label}
      </Badge>
    );
  if (value === null)
    return (
      <Badge tone="muted" icon={<HelpCircle aria-hidden="true" className="size-3.5" />}>
        PGWP: TBC
      </Badge>
    );
  return null;
}
