import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

/** CanEdu Pathway logo: maple leaf / graduation cap / book mark + two-tone wordmark. */
export function Logo({ invert }: { invert?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 rounded-lg" aria-label={`${siteConfig.name} — home`}>
      <span className={cn("flex shrink-0 items-center justify-center", invert && "rounded-lg bg-white p-1")}>
        <Image
          src="/images/brand/canedu-mark.webp"
          alt=""
          width={256}
          height={242}
          priority
          className={invert ? "h-9 w-auto" : "h-9 w-auto sm:h-11 lg:h-12"}
        />
      </span>
      <span className="text-base leading-none font-extrabold tracking-tight whitespace-nowrap min-[400px]:text-lg sm:text-[1.4rem]">
        <span className={invert ? "text-white" : "text-primary-600"}>CanEdu</span>{" "}
        <span className={invert ? "text-white" : "text-ink"}>Pathway</span>
      </span>
    </Link>
  );
}
