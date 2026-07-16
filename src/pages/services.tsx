import {
  Building2,
  ClipboardCheck,
  GraduationCap,
  IdCard,
  Plane,
  UserCheck,
} from "lucide-react"
import { useTranslation } from "react-i18next"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/reveal"
import { Card, CardContent } from "@/components/ui/card"
import { getServices } from "@/data/api"
import { useLocalized } from "@/hooks/use-localized"

const serviceIcons = [
  GraduationCap,
  Plane,
  UserCheck,
  Building2,
  IdCard,
  ClipboardCheck,
]

export default function ServicesPage() {
  const { t } = useTranslation(["nav", "common"])
  const localized = useLocalized()
  const services = getServices()

  return (
    <>
      <PageHeader
        title={t("nav:nav.services")}
        subtitle={t("common:services.know")}
      />

      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[i % serviceIcons.length]
            return (
              <Reveal key={service.id} delay={i * 80}>
                <Card className="group hover:border-primary/40 h-full overflow-hidden text-center transition-all hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="space-y-4 p-7">
                    <div className="from-primary to-secondary text-primary-foreground mx-auto w-fit rounded-2xl bg-linear-to-br p-4 shadow-lg transition-transform group-hover:scale-110">
                      <Icon className="size-7" />
                    </div>
                    <h3 className="text-lg font-bold">{localized(service.title)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {localized(service.description)}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </section>
    </>
  )
}
