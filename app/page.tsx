import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { StudySteps } from "@/components/home/StudySteps";
import { FeaturedInstitutions } from "@/components/home/FeaturedInstitutions";
import { FieldChips } from "@/components/home/FieldChips";
import { Testimonials } from "@/components/home/Testimonials";
import { Faq } from "@/components/home/Faq";
import { PromoBanner } from "@/components/home/PromoBanner";
import { LeadFormSection } from "@/components/forms/LeadFormSection";
import { homeFaqs } from "@/content/home";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.name} — Study in Canada with expert admission guidance` },
  description: siteConfig.description,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: { url: absoluteUrl("/"), title: `${siteConfig.name} — Study in Canada`, description: siteConfig.description },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <StudySteps />
      <FeaturedInstitutions />
      <FieldChips />
      <PromoBanner />
      <Testimonials />
      <Faq faqs={homeFaqs} />
      <LeadFormSection />
    </>
  );
}
