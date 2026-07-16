import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getStudySteps } from "@/data/api"
import { useLocalized } from "@/hooks/use-localized"

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

      <section className="container mx-auto max-w-3xl px-4 py-14">
        <ol className="relative space-y-8 border-s-2 ps-8">
          {steps.map((step, i) => (
            <Reveal key={step.id} delay={i * 100}>
              <li className="relative">
                <div className="from-primary to-secondary text-primary-foreground absolute top-0 -inset-s-14.25 flex size-12 items-center justify-center rounded-full bg-linear-to-br font-extrabold shadow-lg">
                  {step.order}
                </div>
                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="space-y-1.5 p-5">
                    <h3 className="text-lg font-bold">{localized(step.title)}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {localized(step.details)}
                    </p>
                  </CardContent>
                </Card>
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <Link to="/register">{t("nav:nav.registerNow")}</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
