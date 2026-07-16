import {
  BadgeCheck,
  BadgeX,
  Briefcase,
  CheckCircle2,
  ClipboardList,
  Clock,
  FileText,
  GraduationCap,
  Languages,
  School,
  Wallet,
} from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router"
import { EmptyState } from "@/components/empty-state"
import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getAdmissionRequirements, getProgram } from "@/data/api"
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

  const requirements = getAdmissionRequirements(program.degreeId)

  const facts = [
    {
      icon: GraduationCap,
      label: t("home.degree"),
      value: localized(program.degree.name),
    },
    {
      icon: Clock,
      label: t("programData.duration"),
      value: t("programData.years", { count: program.studyYears }),
    },
    {
      icon: Languages,
      label: t("programData.languages"),
      value: program.languages.map((l) => localized(l.name)).join(" · "),
    },
    {
      icon: Wallet,
      label: t("programData.price"),
      value: `$${program.priceStartAt.toLocaleString()}`,
    },
    {
      icon: School,
      label: t("university.universities"),
      value: String(program.universities.length),
    },
  ]

  return (
    <>
      <section className="relative -mt-16 overflow-hidden border-b pt-16">
        <div className="section-glow absolute inset-0" aria-hidden />
        <div className="bg-dots absolute inset-0 opacity-30" aria-hidden />
        <div className="relative container mx-auto flex flex-col items-center gap-4 px-4 py-14 text-center">
          <div className="bg-background rounded-2xl border p-3 shadow-md">
            <img src={program.logo} alt="" className="size-16 object-contain" />
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
        </div>
      </section>

      <section className="container mx-auto grid gap-8 px-4 py-12 lg:grid-cols-[1fr_340px]">
        <div className="min-w-0 space-y-8">
          <Reveal>
            <Card>
              <CardContent className="space-y-3 p-7">
                <div className="flex items-center gap-3">
                  <div className="bg-accent text-primary rounded-xl p-2.5">
                    <FileText className="size-5" />
                  </div>
                  <h2 className="text-xl font-extrabold">
                    {t("programData.overview")}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {localized(program.details)}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {localized(program.opportunities)}
                </p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={80}>
            <Card>
              <CardContent className="space-y-4 p-7">
                <h2 className="text-xl font-extrabold">
                  {t("programData.curriculum")}
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {program.curriculum.map((item, i) => (
                    <li
                      key={i}
                      className="bg-muted/50 flex items-start gap-3 rounded-xl p-4"
                    >
                      <CheckCircle2 className="text-primary mt-0.5 size-5 shrink-0" />
                      <span className="text-sm font-medium">{localized(item)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <Card>
              <CardContent className="space-y-4 p-7">
                <div className="flex items-center gap-3">
                  <div className="bg-accent text-primary rounded-xl p-2.5">
                    <Briefcase className="size-5" />
                  </div>
                  <h2 className="text-xl font-extrabold">
                    {t("programData.careers")}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {program.careers.map((career, i) => (
                    <Badge key={i} variant="secondary" className="px-3 py-1.5 text-sm">
                      {localized(career)}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>

          {requirements.length > 0 && (
            <Reveal delay={160}>
              <Card>
                <CardContent className="space-y-4 p-7">
                  <div className="flex items-center gap-3">
                    <div className="bg-accent text-primary rounded-xl p-2.5">
                      <ClipboardList className="size-5" />
                    </div>
                    <h2 className="text-xl font-extrabold">
                      {t("programData.requirements")}
                    </h2>
                  </div>
                  <ol className="space-y-3">
                    {requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-primary/10 text-primary flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                          {i + 1}
                        </span>
                        <span className="font-medium">{localized(req)}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </Reveal>
          )}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Reveal delay={100}>
            <Card className="shadow-lg">
              <CardContent className="space-y-5 p-6">
                <h2 className="font-extrabold">{t("university.quickFacts")}</h2>
                <dl className="space-y-4">
                  {facts.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-3"
                    >
                      <dt className="text-muted-foreground flex items-center gap-2 text-sm">
                        <Icon className="text-primary size-4" />
                        {label}
                      </dt>
                      <dd className="text-end font-bold">{value}</dd>
                    </div>
                  ))}
                </dl>
                <Button asChild className="w-full" size="lg">
                  <Link to="/education-info">{t("programData.apply")}</Link>
                </Button>
                <p className="text-muted-foreground text-center text-xs">
                  {t("programData.register")}
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </aside>
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
                          <span className="inline-flex items-center gap-1 text-emerald-600">
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
