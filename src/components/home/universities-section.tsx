import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { UniversityCard } from "@/components/cards/university-card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { getUniversities } from "@/data/api"
import { useDirection } from "@/hooks/use-direction"

export function UniversitiesSection() {
  const { t } = useTranslation("common")
  const dir = useDirection()
  const universities = getUniversities()

  return (
    <section className="container mx-auto px-4 py-20">
      <Reveal>
        <SectionHeading eyebrow={t("home.deserve")} title={t("home.universities")} />
      </Reveal>
      <Carousel opts={{ direction: dir, align: "start" }}>
        <CarouselContent className="py-3">
          {universities.map((university) => (
            <CarouselItem
              key={university.id}
              className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <UniversityCard university={university} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:inline-flex" />
        <CarouselNext className="hidden md:inline-flex" />
      </Carousel>
      <div className="mt-8 text-center">
        <Button asChild variant="outline">
          <Link to="/all-universities">{t("home.seeMore")}</Link>
        </Button>
      </div>
    </section>
  )
}
