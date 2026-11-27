import { Container } from "@/components/ui/Container";
import { heroSlider } from "@/content/home";
import { ImageSlider } from "./ImageSlider";
import { HomePhoto } from "./HomePhoto";
import { HeroText } from "./HeroText";

/** Hero banner + auto image slider that overlaps its bottom edge (transparent images, no box). */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative pb-10 sm:pb-14">
      <div className="relative overflow-hidden bg-cloud">
        <Container className="relative grid items-center gap-8 pt-10 pb-24 sm:pt-16 sm:pb-36 md:grid-cols-[1.15fr_1fr] md:gap-12 lg:pt-20 lg:pb-44">
          <div className="lg:pl-16">
            <HeroText />
          </div>
          {/* To change this photo, replace public/images/home/hero.webp */}
          <HomePhoto slot="hero" priority className="mx-auto hidden w-full self-end md:-mb-36 md:block md:max-w-sm lg:-mb-44 lg:max-w-md" />
        </Container>
      </div>

      <Container className="relative -mt-16 sm:-mt-24 lg:-mt-32 lg:px-12">
        <ImageSlider slides={heroSlider} label="Study in Canada to PR: roadmap and province data" />
      </Container>
    </section>
  );
}
