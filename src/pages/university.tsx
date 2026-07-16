import { Award, Clock, Languages, MapPin, Trophy, Users } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router"
import { UniversityCard } from "@/components/cards/university-card"
import { EmptyState } from "@/components/empty-state"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  getCity,
  getCountry,
  getUniversities,
  getUniversity,
  getUniversityDegrees,
} from "@/data/api"
import { useLocalized } from "@/hooks/use-localized"

export default function UniversityPage() {
  const { id } = useParams()
  const { t } = useTranslation("common")
  const localized = useLocalized()

  const university = getUniversity(Number(id))
  if (!university) {
    return (
      <section className="container mx-auto px-4 py-16">
        <EmptyState title={t("university.noUniversity")} />
      </section>
    )
  }

  const country = getCountry(university.countryId)
  const city = getCity(university.cityId)
  const degrees = getUniversityDegrees(university.id)
  const related = getUniversities({ countryId: university.countryId })
    .filter((u) => u.id !== university.id)
    .slice(0, 4)

  const stats = [
    {
      icon: Trophy,
      label: t("university.international"),
      value: `#${university.internationalRanking}`,
    },
    {
      icon: Award,
      label: t("university.local"),
      value: `#${university.localRanking}`,
    },
    {
      icon: Users,
      label: t("university.student"),
      value: university.studentCount.toLocaleString(),
    },
  ]

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={university.image}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[oklch(0.25_0.04_253)]/85" />
        </div>
        <div className="relative container mx-auto flex flex-col items-center gap-4 px-4 py-16 text-center text-white md:py-20">
          <img
            src={university.logo}
            alt=""
            className="bg-background size-20 rounded-2xl object-contain p-2 shadow-lg"
          />
          <h1 className="text-3xl font-extrabold text-balance md:text-4xl">
            {localized(university.name)}
          </h1>
          <p className="inline-flex items-center gap-1.5 text-white/80">
            <MapPin className="size-4" />
            {country && localized(country.name)}
            {city && ` — ${localized(city.name)}`}
          </p>
          <p className="max-w-2xl text-white/70">{localized(university.bio)}</p>
          <Button asChild size="lg" className="mt-2">
            <Link to="/register">{t("university.registerNow")}</Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto -mt-8 px-4">
        <Reveal>
          <div className="bg-background relative z-10 grid grid-cols-1 gap-6 rounded-2xl border p-6 shadow-lg sm:grid-cols-3">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center justify-center gap-3">
                <div className="bg-accent text-primary rounded-xl p-3">
                  <Icon className="size-6" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold">{value}</div>
                  <div className="text-muted-foreground text-sm">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container mx-auto px-4 py-14">
        <Reveal>
          <div className="prose-layan mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-2xl font-extrabold">
              {t("university.universityDetails")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {localized(university.details)}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-muted/40 py-14">
        <div className="container mx-auto max-w-4xl px-4">
          <Reveal>
            <SectionHeading
              eyebrow={t("university.specialities")}
              title={t("university.choose")}
            />
          </Reveal>
          {degrees.length === 0 ? (
            <EmptyState title={t("programData.empty")} />
          ) : (
            <Accordion type="single" collapsible className="space-y-3">
              {degrees.map(({ degree, programs }) => (
                <AccordionItem
                  key={degree.id}
                  value={String(degree.id)}
                  className="bg-background rounded-xl border px-5 last:border-b"
                >
                  <AccordionTrigger className="font-bold">
                    {localized(degree.name)}
                    <Badge variant="secondary" className="ms-auto me-2">
                      {programs.length}
                    </Badge>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {programs.map((program) => (
                        <Link key={program.id} to={`/program/${program.id}`}>
                          <Card className="hover:border-primary/40 h-full transition-colors">
                            <CardContent className="space-y-2 p-4">
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-bold">
                                  {localized(program.specialty.name)}
                                </span>
                                <Badge variant="secondary">
                                  ${program.priceStartAt.toLocaleString()}+
                                </Badge>
                              </div>
                              <div className="text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 text-xs">
                                <span className="inline-flex items-center gap-1">
                                  <Clock className="size-3.5" />
                                  {t("programData.years", {
                                    count: program.studyYears,
                                  })}
                                </span>
                                <span className="inline-flex items-center gap-1">
                                  <Languages className="size-3.5" />
                                  {program.languages
                                    .map((l) => localized(l.name))
                                    .join(" · ")}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="container mx-auto px-4 py-14">
          <Reveal>
            <SectionHeading title={t("home.universities")} />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((u, i) => (
              <Reveal key={u.id} delay={i * 60}>
                <UniversityCard university={u} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
