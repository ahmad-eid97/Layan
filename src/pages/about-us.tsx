import {
  Award,
  CheckCircle2,
  Eye,
  Goal,
  MessageSquareHeart,
  Users,
} from "lucide-react"
import { useTranslation } from "react-i18next"
import { CtaStrip } from "@/components/home/sections"
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
      <div className="text-3xl font-extrabold text-white tabular-nums md:text-4xl">
        <span ref={ref}>{value.toLocaleString()}</span>
        <span className="text-secondary">{suffix}</span>
      </div>
      <div className="mt-1 text-sm text-white/70">{label}</div>
    </div>
  )
}

export default function AboutUsPage() {
  const { t } = useTranslation("common")

  const points = [t("about.point1"), t("about.point2"), t("about.point3")]

  const pillars = [
    { icon: Users, title: t("about.who"), text: t("about.text1") },
    { icon: Eye, title: t("about.vision"), text: t("about.text2") },
    { icon: Goal, title: t("about.mission"), text: t("about.text3") },
    { icon: MessageSquareHeart, title: t("about.message"), text: t("about.text4") },
  ]

  return (
    <>
      <PageHeader title={t("about.about")} subtitle={t("about.platform")} />

      <section className="container mx-auto grid items-center gap-12 px-4 py-16 lg:grid-cols-2">
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
            <div className="bg-background absolute -bottom-6 -inset-e-2 flex items-center gap-3 rounded-2xl border p-4 shadow-xl sm:-inset-e-6">
              <div className="from-primary to-secondary text-primary-foreground rounded-xl bg-linear-to-br p-3">
                <Award className="size-6" />
              </div>
              <div>
                <div className="text-2xl font-extrabold">10+</div>
                <div className="text-muted-foreground text-xs">
                  {t("about.years")}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-5">
            <span className="border-primary/20 bg-primary/5 text-primary inline-block rounded-full border px-4 py-1.5 text-sm font-bold">
              {t("about.since")}
            </span>
            <h2 className="text-2xl font-extrabold text-balance md:text-3xl">
              {t("about.doing")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{t("about.text")}</p>
            <ul className="space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5 size-5 shrink-0" />
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="container mx-auto px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[oklch(0.28_0.045_253)] px-8 py-12">
            <div
              className="bg-primary/25 absolute -top-24 -inset-s-24 size-72 rounded-full blur-3xl"
              aria-hidden
            />
            <div
              className="bg-secondary/20 absolute -bottom-24 -inset-e-24 size-72 rounded-full blur-3xl"
              aria-hidden
            />
            <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
              <AboutStat target={2500} suffix="+" label={t("about.students")} />
              <AboutStat target={40} suffix="+" label={t("about.university")} />
              <AboutStat target={120} suffix="+" label={t("about.uni")} />
              <AboutStat target={15} suffix="" label={t("about.team")} />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100}>
              <Card className="group hover:border-primary/40 h-full transition-all hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="flex gap-5 p-7">
                  <div className="from-primary to-secondary text-primary-foreground h-fit shrink-0 rounded-2xl bg-linear-to-br p-3.5 shadow-lg transition-transform group-hover:scale-110">
                    <Icon className="size-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaStrip />
    </>
  )
}
