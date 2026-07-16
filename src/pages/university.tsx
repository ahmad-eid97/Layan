import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock,
  GraduationCap,
  Languages,
  MapPin,
  Trophy,
  Users,
} from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router"
import { UniversityCard } from "@/components/cards/university-card"
import { EmptyState } from "@/components/empty-state"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  getCity,
  getCountry,
  getUniversities,
  getUniversity,
  getUniversityDegrees,
  getUniversitySpecialties,
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
  const specialties = getUniversitySpecialties(university.id)
  const programsCount = degrees.reduce((sum, d) => sum + d.programs.length, 0)
  const related = getUniversities({ countryId: university.countryId })
    .filter((u) => u.id !== university.id)
    .slice(0, 4)

  const facts = [
    { icon: CalendarDays, label: t("university.founded"), value: String(university.foundedYear) },
    { icon: Trophy, label: t("university.international"), value: `#${university.internationalRanking}` },
    { icon: Award, label: t("university.local"), value: `#${university.localRanking}` },
    { icon: Users, label: t("university.student"), value: university.studentCount.toLocaleString() },
    { icon: GraduationCap, label: t("university.programs"), value: String(programsCount) },
  ]

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={university.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-[oklch(0.2_0.04_253)] via-[oklch(0.2_0.04_253)]/70 to-[oklch(0.2_0.04_253)]/35"
          aria-hidden
        />
        <div className="relative container mx-auto px-4 pt-28 pb-10 text-white md:pt-40">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {country && (
                  <Badge className="bg-white/15 text-white backdrop-blur">
                    <MapPin className="size-3.5" />
                    {localized(country.name)}
                    {city && ` — ${localized(city.name)}`}
                  </Badge>
                )}
                <Badge className="bg-secondary text-secondary-foreground">
                  <Trophy className="size-3.5" />#{university.internationalRanking}
                </Badge>
              </div>
              <h1 className="text-3xl font-extrabold text-balance md:text-5xl">
                {localized(university.name)}
              </h1>
              <p className="max-w-xl text-white/75">{localized(university.bio)}</p>
            </div>
            <div className="flex gap-3">
              <Button asChild size="lg">
                <Link to="/education-info">{t("programData.apply")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/contact-us">{t("home.contacting")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-8 px-4 py-12 lg:grid-cols-[1fr_340px]">
        <div className="min-w-0 space-y-8">
          <Reveal>
            <Card>
              <CardContent className="space-y-3 p-7">
                <div className="flex items-center gap-3">
                  <div className="bg-accent text-primary rounded-xl p-2.5">
                    <Building2 className="size-5" />
                  </div>
                  <h2 className="text-xl font-extrabold">
                    {t("university.universityDetails")}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {localized(university.details)}
                </p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={80}>
            <Card>
              <CardContent className="space-y-4 p-7">
                <h2 className="text-xl font-extrabold">
                  {t("university.highlights")}
                </h2>
                <ul className="space-y-3">
                  {university.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-0.5 size-5 shrink-0" />
                      <span className="font-medium">{localized(highlight)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <h2 className="mb-4 text-xl font-extrabold">
                {t("university.choose")}
              </h2>
              {degrees.length === 0 ? (
                <EmptyState title={t("programData.empty")} />
              ) : (
                <Tabs defaultValue={String(degrees[0]?.degree.id)}>
                  <TabsList className="mb-4 h-auto flex-wrap">
                    {degrees.map(({ degree, programs }) => (
                      <TabsTrigger
                        key={degree.id}
                        value={String(degree.id)}
                        className="gap-2 px-4 py-2"
                      >
                        {localized(degree.name)}
                        <span className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs font-bold">
                          {programs.length}
                        </span>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {degrees.map(({ degree, programs }) => (
                    <TabsContent
                      key={degree.id}
                      value={String(degree.id)}
                      className="space-y-3"
                    >
                      {programs.map((program) => (
                        <Link
                          key={program.id}
                          to={`/program/${program.id}`}
                          className="group block"
                        >
                          <Card className="group-hover:border-primary/40 transition-all group-hover:-translate-y-0.5 group-hover:shadow-lg">
                            <CardContent className="flex flex-wrap items-center gap-4 p-5">
                              <div className="bg-muted rounded-xl p-2.5">
                                <img
                                  src={program.logo}
                                  alt=""
                                  className="size-10 object-contain"
                                />
                              </div>
                              <div className="min-w-40 flex-1">
                                <div className="group-hover:text-primary font-bold transition-colors">
                                  {localized(program.specialty.name)}
                                </div>
                                <div className="text-muted-foreground mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs">
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
                              </div>
                              <div className="text-end">
                                <div className="text-muted-foreground text-xs">
                                  {t("programData.price")}
                                </div>
                                <div className="text-primary text-lg font-extrabold">
                                  ${program.priceStartAt.toLocaleString()}
                                </div>
                              </div>
                              <ArrowRight className="text-muted-foreground group-hover:text-primary size-5 transition-colors rtl:rotate-180" />
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </TabsContent>
                  ))}
                </Tabs>
              )}
            </div>
          </Reveal>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <Reveal delay={100}>
            <Card className="shadow-lg">
              <CardContent className="space-y-5 p-6">
                <div className="flex items-center gap-3">
                  <img
                    src={university.logo}
                    alt=""
                    className="bg-muted size-12 rounded-xl object-contain p-1.5"
                  />
                  <h2 className="font-extrabold">{t("university.quickFacts")}</h2>
                </div>
                <dl className="space-y-4">
                  {facts.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center justify-between gap-3">
                      <dt className="text-muted-foreground flex items-center gap-2 text-sm">
                        <Icon className="text-primary size-4" />
                        {label}
                      </dt>
                      <dd className="font-bold">{value}</dd>
                    </div>
                  ))}
                </dl>
                <Button asChild className="w-full" size="lg">
                  <Link to="/education-info">{t("programData.apply")}</Link>
                </Button>
              </CardContent>
            </Card>
          </Reveal>

          {specialties.length > 0 && (
            <Reveal delay={150}>
              <Card>
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center gap-2">
                    <BookOpen className="text-primary size-5" />
                    <h2 className="font-extrabold">
                      {t("university.specialities")}
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {specialties.map((specialty) => (
                      <Badge key={specialty.id} variant="outline">
                        {localized(specialty.name)}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          )}
        </aside>
      </section>

      {related.length > 0 && (
        <section className="bg-muted/40 py-14">
          <div className="container mx-auto px-4">
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
          </div>
        </section>
      )}
    </>
  )
}
