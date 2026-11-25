import { Container } from "@/components/ui/Container";
import { heroSlider } from "@/content/home";
import { ImageSlider } from "./ImageSlider";
import { HomePhoto } from "./HomePhoto";
import { HeroText } from "./HeroText";

/** Hero banner + overlapping auto image slider. */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative pb-16 sm:pb-20">
      <div className="relative overflow-hidden bg-cloud">
        <Container className="relative grid items-center gap-8 pt-10 pb-36 sm:pt-20 sm:pb-44 md:grid-cols-[1.15fr_1fr] md:gap-12 lg:pt-24">
          <div className="lg:pl-16">
            <HeroText />
          </div>
          {/* To change this photo, replace public/images/home/hero.webp */}
          <HomePhoto slot="hero" priority className="mx-auto -mt-4 -mb-36 w-full max-w-[16rem] self-end sm:-mb-44 sm:max-w-xs md:mt-0 md:max-w-sm lg:max-w-md" />
        </Container>
      </div>

      <Container className="relative -mt-24 lg:px-24">
        <ImageSlider slides={heroSlider} label="Study in Canada to PR: roadmap and province data" />
      </Container>
    </section>
  );
}
