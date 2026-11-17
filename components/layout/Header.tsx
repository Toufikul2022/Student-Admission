"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import { buttonClasses } from "@/components/ui/Button";
import { Logo } from "./Logo";

function matches(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

/** Active if it matches and no longer (more specific) nav item also matches. */
function isActive(pathname: string, href: string) {
  return (
    matches(pathname, href) &&
    !siteConfig.nav.some((n) => n.href.length > href.length && matches(pathname, n.href))
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="flex h-16 w-full items-center gap-2 px-3 sm:gap-4 sm:px-4 sm:px-6 lg:h-[5.5rem] lg:px-8">
        <Logo />

        <nav aria-label="Main" className="ml-10 hidden lg:block">
          <ul className="flex items-center gap-1">
            {siteConfig.nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors",
                      active ? "text-primary-700 underline decoration-2 underline-offset-8" : "text-ink hover:text-primary-700",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link href="/contact" className={buttonClasses("accent", "sm", "px-3 sm:h-11 sm:px-6 sm:text-base")}>
            Contact Us
          </Link>
          <button
            type="button"
            className="rounded-full p-2 text-ink hover:bg-mist lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Main (mobile)"
        hidden={!open}
        className="border-t border-line bg-white lg:hidden"
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
          {siteConfig.nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-base font-semibold",
                    active ? "bg-primary-50 text-primary-700" : "text-ink hover:bg-mist",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
