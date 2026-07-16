import { ArticlesSection } from "@/components/home/articles-section"
import { Hero } from "@/components/home/hero"
import { ProgramFilter } from "@/components/home/program-filter"
import {
  CtaStrip,
  Features,
  PartnersMarquee,
  StatsStrip,
  StepsSection,
  TestimonialsSection,
} from "@/components/home/sections"
import { UniversitiesSection } from "@/components/home/universities-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProgramFilter />
      <StatsStrip />
      <PartnersMarquee />
      <Features />
      <UniversitiesSection />
      <StepsSection />
      <TestimonialsSection />
      <ArticlesSection />
      <CtaStrip />
    </>
  )
}
