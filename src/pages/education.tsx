import {
  Building2,
  Clock,
  FileUp,
  MailCheck,
  MessageCircle,
  Plane,
} from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getStudySteps } from "@/data/api"
import { useLocalized } from "@/hooks/use-localized"
import { cn } from "@/lib/utils"

const stepIcons = [MessageCircle, Building2, FileUp, MailCheck, Plane]

export default function EducationPage() {
  const { t } = useTranslation(["common", "nav"])
  const localized = useLocalized()
  const steps = getStudySteps()

  return (
    <>
      <PageHeader
        title={t("common:education.steps")}
        subtitle={t("common:home.ready")}
      />

      <section className="container mx-auto max-w-5xl px-4 py-16">
        <ol className="relative">
          <div
            className="bg-border absolute inset-y-2 inset-s-6 w-px md:inset-s-1/2 md:-translate-x-1/2"
            aria-hidden
          />
          {steps.map((step, i) => {
            const Icon = stepIcons[i % stepIcons.length]
            const isEven = i % 2 === 0
            return (
              <Reveal key={step.id} delay={i * 100}>
                <li className="relative mb-10 last:mb-0">
                  <div className="from-primary to-secondary text-primary-foreground shadow-primary/25 absolute top-0 inset-s-6 z-10 flex size-12 -translate-x-1/2 items-center justify-center rounded-full bg-linear-to-br shadow-lg rtl:translate-x-1/2 md:inset-s-1/2">
                    <Icon className="size-5" />
                  </div>
                  <div
                    className={cn(
                      "ms-14 md:ms-0 md:w-[calc(50%-3rem)]",
                      isEven ? "md:me-auto" : "md:ms-auto"
                    )}
                  >
                    <Card className="group hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-xl">
                      <CardContent className="space-y-3 p-6">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-primary text-xs font-bold tracking-wide uppercase">
                            {t("common:education.step", { defaultValue: "Step" })}{" "}
                            {step.order}
                          </span>
                          <Badge variant="secondary" className="gap-1">
                            <Clock className="size-3" />
                            {localized(step.duration)}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-bold">{localized(step.title)}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {localized(step.details)}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </li>
              </Reveal>
            )
          })}
        </ol>

        <Reveal>
          <div className="from-primary to-secondary text-primary-foreground mt-14 rounded-3xl bg-linear-to-r px-8 py-10 text-center">
            <h2 className="text-2xl font-extrabold text-balance">
              {t("common:home.dontLetGo")}
            </h2>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 mt-5"
            >
              <Link to="/register">{t("nav:nav.registerNow")}</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  )
}
