import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";

/** Visible breadcrumb trail + BreadcrumbList JSON-LD. "Home" is added automatically. */
export function Breadcrumbs({ items, invert }: { items: Crumb[]; invert?: boolean }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-1">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-1">
                {last ? (
                  <span aria-current="page" className={invert ? "font-semibold text-white" : "font-semibold text-ink"}>
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={c.href}
                      className={invert ? "text-primary-100 underline-offset-4 hover:text-white hover:underline" : "text-slate underline-offset-4 hover:text-primary-700 hover:underline"}
                    >
                      {c.name}
                    </Link>
                    <ChevronRight aria-hidden="true" className={invert ? "size-4 text-primary-200" : "size-4 text-slate/70"} />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(all)} />
    </>
  );
}
