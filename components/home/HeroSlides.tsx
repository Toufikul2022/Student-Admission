"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { heroSlides } from "@/content/home";

/**
 * Hero text slides with dot controls. Slides change only when a dot is chosen
 * (no auto-rotation), so nothing moves unexpectedly for readers.
 */
export function HeroSlides() {
  const [active, setActive] = useState(0);
  return (
    <div role="region" aria-roledescription="carousel" aria-label="Highlights">
      {heroSlides.map((slide, i) => {
        const Heading = i === 0 ? "h1" : "h2";
        return (
          <div
            key={slide.title}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${heroSlides.length}`}
            hidden={i !== active}
          >
            <Heading id={i === 0 ? "hero-title" : undefined} className="text-4xl font-extrabold tracking-tight text-ink text-balance sm:text-5xl">
              {slide.title}
            </Heading>
            <p className="mt-6 text-lg leading-relaxed text-ink/80 sm:text-2xl sm:leading-snug">{slide.body}</p>
            <Button href={slide.cta.href} size="lg" className="mt-8">
              {slide.cta.label}
            </Button>
          </div>
        );
      })}
      <div className="mt-8 flex gap-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}: ${slide.title}`}
            aria-current={i === active ? "true" : undefined}
            className="flex size-6 items-center justify-center rounded-full"
          >
            <span className={cn("block size-3.5 rounded-full transition-colors", i === active ? "bg-ink" : "bg-slate/40")} />
          </button>
        ))}
      </div>
    </div>
  );
}
