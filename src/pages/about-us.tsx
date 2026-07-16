import { Eye, Goal, MessageSquareHeart, Users } from "lucide-react"
import { useTranslation } from "react-i18next"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/reveal"
import { Card, CardContent } from "@/components/ui/card"
import { useCountUp } from "@/hooks/use-count-up"

function AboutStat({ target, suffix, label }: {
  target: number
  suffix: string
  label: string
}) {
  const { ref, value } = useCountUp(target)
  return (
    <div className="text-center">
      <div className="text-gradient text-3xl font-extrabold tabular-nums">
        <span ref={ref}>{value.toLocaleString()}</span>
        {suffix}
      </div>
      <div className="text-muted-foreground mt-1 text-sm">{label}</div>
    </div>
  )
}

export default function AboutUsPage() {
  const { t } = useTranslation("common")

  const pillars = [
    { icon: Users, title: t("about.who"), text: t("about.text1") },
    { icon: Eye, title: t("about.vision"), text: t("about.text2") },
    { icon: Goal, title: t("about.mission"), text: t("about.text3") },
    { icon: MessageSquareHeart, title: t("about.message"), text: t("about.text4") },
  ]

  return (
    <>
      <PageHeader title={t("about.about")} subtitle={t("about.platform")} />

      <section className="container mx-auto grid items-center gap-10 px-4 py-14 md:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div
              className="from-primary/20 to-secondary/20 absolute -inset-4 rounded-3xl bg-linear-to-tr blur-2xl"
              aria-hidden
            />
            <img
              src="/assets/images/manyPersons.webp"
              alt=""
              className="relative w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold md:text-3xl">
              {t("about.doing")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.text")}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.have")}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-muted/40 py-12">
        <div className="container mx-auto grid grid-cols-2 gap-8 px-4 lg:grid-cols-4">
          <AboutStat target={2500} suffix="+" label={t("about.students")} />
          <AboutStat target={40} suffix="+" label={t("about.university")} />
          <AboutStat target={120} suffix="+" label={t("about.uni")} />
          <AboutStat target={15} suffix="" label={t("about.team")} />
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100}>
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="space-y-3 p-7">
                  <div className="from-primary to-secondary text-primary-foreground w-fit rounded-2xl bg-linear-to-br p-3.5 shadow-lg">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{text}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
