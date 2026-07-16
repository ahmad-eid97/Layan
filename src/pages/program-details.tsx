import { BadgeCheck, BadgeX, Briefcase, Clock, FileText, Languages } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router"
import { EmptyState } from "@/components/empty-state"
import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getProgram } from "@/data/api"
import { useLocalized } from "@/hooks/use-localized"

export default function ProgramDetailsPage() {
  const { id } = useParams()
  const { t } = useTranslation("common")
  const localized = useLocalized()

  const program = getProgram(Number(id))
  if (!program) {
    return (
      <section className="container mx-auto px-4 py-16">
        <EmptyState title={t("programs.noPrograms")} />
      </section>
    )
  }

  return (
    <>
      <section className="relative overflow-hidden border-b">
        <div className="section-glow absolute inset-0" aria-hidden />
        <div className="bg-dots absolute inset-0 opacity-30" aria-hidden />
        <div className="relative container mx-auto flex flex-col items-center gap-4 px-4 py-14 text-center">
          <div className="bg-background rounded-2xl border p-3 shadow-md">
            <img
              src={program.logo}
              alt=""
              className="size-16 object-contain"
            />
          </div>
          <h1 className="text-3xl font-extrabold text-balance md:text-4xl">
            {localized(program.specialty.name)}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge>{localized(program.degree.name)}</Badge>
            <Badge variant="secondary" className="gap-1">
              <Clock className="size-3.5" />
              {t("programData.years", { count: program.studyYears })}
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Languages className="size-3.5" />
              {program.languages.map((l) => localized(l.name)).join(" · ")}
            </Badge>
          </div>
          <p className="text-muted-foreground">
            {t("programData.price")}{" "}
            <span className="text-gradient text-2xl font-extrabold">
              ${program.priceStartAt.toLocaleString()}
            </span>
          </p>
          <Button asChild size="lg">
            <Link to="/education-info">{t("university.registerNow")}</Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto grid gap-6 px-4 py-12 md:grid-cols-2">
        <Reveal>
          <Card className="h-full">
            <CardContent className="space-y-3 p-7">
              <div className="bg-accent text-primary w-fit rounded-xl p-3">
                <FileText className="size-6" />
              </div>
              <h2 className="text-xl font-bold">{t("programData.details")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {localized(program.details)}
              </p>
            </CardContent>
          </Card>
        </Reveal>
        <Reveal delay={120}>
          <Card className="h-full">
            <CardContent className="space-y-3 p-7">
              <div className="bg-accent text-primary w-fit rounded-xl p-3">
                <Briefcase className="size-6" />
              </div>
              <h2 className="text-xl font-bold">{t("home.work")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {localized(program.opportunities)}
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </section>

      <section className="bg-muted/40 py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <Reveal>
            <h2 className="mb-8 text-center text-2xl font-extrabold">
              {t("programData.university")}
            </h2>
          </Reveal>
          <div className="space-y-4">
            {program.universities.map(({ university, cost, sale, active }, i) => (
              <Reveal key={university.id} delay={i * 80}>
                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="flex flex-wrap items-center gap-4 p-5">
                    <img
                      src={university.logo}
                      alt=""
                      className="bg-muted size-14 rounded-xl object-contain p-1.5"
                    />
                    <div className="min-w-40 flex-1">
                      <Link
                        to={`/university/${university.id}`}
                        className="hover:text-primary font-bold transition-colors"
                      >
                        {localized(university.name)}
                      </Link>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-sm">
                        {active ? (
                          <span className="text-success inline-flex items-center gap-1 text-emerald-600">
                            <BadgeCheck className="size-4" />
                            {t("programData.active")}
                          </span>
                        ) : (
                          <span className="text-muted-foreground inline-flex items-center gap-1">
                            <BadgeX className="size-4" />
                            {t("programData.notActive")}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-end">
                      {sale ? (
                        <>
                          <div className="text-muted-foreground text-sm line-through">
                            ${cost.toLocaleString()}
                          </div>
                          <div className="text-primary text-xl font-extrabold">
                            ${sale.toLocaleString()}
                          </div>
                        </>
                      ) : (
                        <div className="text-xl font-extrabold">
                          ${cost.toLocaleString()}
                        </div>
                      )}
                    </div>
                    <Button asChild variant="outline" size="sm" disabled={!active}>
                      <Link to={`/university/${university.id}`}>
                        {t("university.showDetails")}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
