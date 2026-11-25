"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/cn";

type Slide = { src: string; width: number; height: number; alt: string };

const INTERVAL_MS = 6000;

/**
 * Accessible auto-advancing image slider.
 * Pauses on hover, on keyboard focus, and via the pause button; does not
 * auto-advance for visitors who prefer reduced motion.
 */
export function ImageSlider({ slides, label }: { slides: Slide[]; label: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
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

  const running = !paused && !hovered && !focused && !reducedMotion;
  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => go(index + 1), INTERVAL_MS);
    return () => clearTimeout(t);
  }, [running, index, go]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label={label}
      className="overflow-hidden rounded-2xl bg-white shadow-card-hover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setFocused(false);
      }}
    >
      <div className="relative aspect-[16/10] w-full bg-white sm:aspect-[16/8]">
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
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              sizes="(min-width: 1280px) 1100px, 95vw"
              className="object-contain p-2 sm:p-4"
            />
          </div>
        ))}

        <button
          type="button"
          onClick={() => go(index - 1)}
          className="absolute top-1/2 left-4 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-card hover:bg-white sm:flex"
        >
          <ChevronLeft aria-hidden="true" className="size-6" />
          <span className="sr-only">Previous slide</span>
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          className="absolute top-1/2 right-4 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-card hover:bg-white sm:flex"
        >
          <ChevronRight aria-hidden="true" className="size-6" />
          <span className="sr-only">Next slide</span>
        </button>
      </div>

      <div className="flex items-center justify-center gap-1 border-t border-line bg-primary-50 px-2 py-2 sm:px-4">
        {/* On phones the arrows live here so they don't cover the image */}
        <button
          type="button"
          onClick={() => go(index - 1)}
          className="flex size-11 items-center justify-center rounded-full text-primary-700 hover:bg-white sm:hidden"
        >
          <ChevronLeft aria-hidden="true" className="size-5" />
          <span className="sr-only">Previous slide</span>
        </button>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          className="flex size-11 items-center justify-center rounded-full text-primary-700 hover:bg-white"
        >
          {paused ? <Play aria-hidden="true" className="size-4" /> : <Pause aria-hidden="true" className="size-4" />}
          <span className="sr-only">{paused ? "Play slideshow" : "Pause slideshow"}</span>
        </button>
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => go(i)}
            aria-current={i === index ? "true" : undefined}
            className="flex size-11 items-center justify-center rounded-full"
          >
            <span className={cn("block h-2.5 rounded-full transition-all", i === index ? "w-7 bg-primary-600" : "w-2.5 bg-slate/40")} />
            <span className="sr-only">Show slide {i + 1}</span>
          </button>
        ))}
        <button
          type="button"
          onClick={() => go(index + 1)}
          className="flex size-11 items-center justify-center rounded-full text-primary-700 hover:bg-white sm:hidden"
        >
          <ChevronRight aria-hidden="true" className="size-5" />
          <span className="sr-only">Next slide</span>
        </button>
      </div>
    </section>
  );
}
