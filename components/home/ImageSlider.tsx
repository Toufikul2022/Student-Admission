"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Slide = { src: string; width: number; height: number; alt: string };

const INTERVAL_MS = 6000;

/**
 * Accessible auto-advancing image slider.
 * Pauses while hovered or keyboard-focused; does not
 * auto-advance for visitors who prefer reduced motion.
 */
export function ImageSlider({ slides, label }: { slides: Slide[]; label: string }) {
  const [index, setIndex] = useState(0);
    const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const go = useCallback((i: number) => setIndex((i + slides.length) % slides.length), [slides.length]);

  const running = !hovered && !focused && !reducedMotion;
  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => go(index + 1), INTERVAL_MS);
    return () => clearTimeout(t);
  }, [running, index, go]);

  const arrow = "flex size-11 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ink shadow-card hover:border-primary-600 hover:text-primary-700";

  return (
    <section
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setFocused(false);
      }}
    >
      <div className="flex items-center gap-2 sm:gap-6">
        <button type="button" onClick={() => go(index - 1)} className={cn(arrow, "hidden sm:flex")}>
          <ChevronLeft aria-hidden="true" className="size-6" />
          <span className="sr-only">Previous slide</span>
        </button>

        <div className="relative aspect-[16/9] w-full">
          {slides.map((s, i) => (
            <div
              key={s.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
              aria-hidden={i !== index}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none",
                i === index ? "opacity-100" : "pointer-events-none opacity-0",
              )}
            >
              <Image src={s.src} alt={s.alt} fill priority={i === 0} sizes="(min-width: 1280px) 1100px, 95vw" className="object-contain" />
            </div>
          ))}
        </div>

        <button type="button" onClick={() => go(index + 1)} className={cn(arrow, "hidden sm:flex")}>
          <ChevronRight aria-hidden="true" className="size-6" />
          <span className="sr-only">Next slide</span>
        </button>
      </div>

      {/* Phones: arrows sit under the image so they don't cover it */}
      <div className="mt-3 flex justify-center gap-4 sm:hidden">
        <button type="button" onClick={() => go(index - 1)} className={arrow}>
          <ChevronLeft aria-hidden="true" className="size-6" />
          <span className="sr-only">Previous slide</span>
        </button>
        <button type="button" onClick={() => go(index + 1)} className={arrow}>
          <ChevronRight aria-hidden="true" className="size-6" />
          <span className="sr-only">Next slide</span>
        </button>
      </div>
    </section>
  );
}