import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "green" | "accent" | "outline" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800",
  green: "bg-green-600 text-white hover:bg-green-700",
  accent: "bg-black text-white hover:bg-[#333333]",
  outline: "border border-ink text-ink bg-white hover:bg-mist",
  ghost: "text-primary-700 hover:bg-primary-50",
  white: "bg-white text-primary-700 hover:bg-primary-50",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-13 px-7 text-base",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type CommonProps = { variant?: Variant; size?: Size; className?: string; children: ReactNode };

type ButtonAsButton = CommonProps & Omit<ComponentProps<"button">, "className" | "children"> & { href?: undefined };
type ButtonAsLink = CommonProps & Omit<ComponentProps<typeof Link>, "className" | "children"> & { href: string };

/** Renders a <Link> when `href` is given, otherwise a <button>. */
export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant, size, className, children, ...rest } = props;
  const classes = buttonClasses(variant, size, className);
  if (typeof rest.href === "string") {
    const { href, ...linkRest } = rest as ButtonAsLink;
    const external = /^https?:\/\//.test(href);
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...(linkRest as ComponentProps<"a">)}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }
  const { type = "button", ...buttonRest } = rest as ButtonAsButton;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
