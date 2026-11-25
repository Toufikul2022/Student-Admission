import { Button } from "@/components/ui/Button";
import { hero } from "@/content/home";

/** Hero text: a single heading and call-to-action button. */
export function HeroText() {
  return (
    <div>
      <h1 id="hero-title" className="text-4xl font-bold tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl">
        {hero.title}
      </h1>
      <Button href={hero.cta.href} size="lg" className="mt-8 w-full sm:w-auto">
        {hero.cta.label}
      </Button>
    </div>
  );
}
