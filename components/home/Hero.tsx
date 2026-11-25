import { Container } from "@/components/ui/Container";
import { heroSlider } from "@/content/home";
import { ImageSlider } from "./ImageSlider";
import { HomePhoto } from "./HomePhoto";
import { HeroText } from "./HeroText";

/** Hero banner, then the auto image slider below it. */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative pb-12 sm:pb-16">
      <div className="relative overflow-hidden bg-cloud">
        <Container className="relative grid items-center gap-8 pt-10 sm:pt-16 md:grid-cols-[1.15fr_1fr] md:gap-12 lg:pt-20">
          <div className="md:pb-16 lg:pl-16">
            <HeroText />
          </div>
          {/* To change this photo, replace public/images/home/hero.webp */}
          <HomePhoto slot="hero" priority className="mx-auto w-full max-w-[16rem] self-end sm:max-w-xs md:max-w-sm lg:max-w-md" />
        </Container>
      </div>

      <Container className="relative mt-10 sm:mt-14 lg:px-12">
        <ImageSlider slides={heroSlider} label="Study in Canada to PR: roadmap and province data" />
      </Container>
    </section>
  );
}
