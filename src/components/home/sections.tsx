import Autoplay from "embla-carousel-autoplay"
import {
  ArrowRight,
  CreditCard,
  FileText,
  GraduationCap,
  Headset,
  Quote,
  School,
  Star,
  Users,
  Zap,
} from "lucide-react"
import { useRef } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { getStudySteps, getTestimonials } from "@/data/api"
import { useCountUp } from "@/hooks/use-count-up"
import { useDirection } from "@/hooks/use-direction"
import { useLocalized } from "@/hooks/use-localized"

function Stat({ icon: Icon, target, suffix, label }: {
  icon: typeof Users
  target: number
  suffix: string
  label: string
}) {
  const { ref, value } = useCountUp(target)
  return (
    <div className="group flex items-center justify-center gap-4">
      <div className="from-primary/15 to-secondary/15 text-primary rounded-2xl bg-linear-to-br p-3.5 transition-transform group-hover:scale-110">
        <Icon className="size-7" />
      </div>
      <div>
        <div className="text-3xl font-extrabold tabular-nums">
          <span ref={ref}>{value.toLocaleString()}</span>
          <span className="text-gradient">{suffix}</span>
        </div>
        <div className="text-muted-foreground text-sm">{label}</div>
      </div>
    </div>
  )
}

export function StatsStrip() {
  const { t } = useTranslation("common")
  return (
    <section className="container mx-auto px-4 py-14">
      <Reveal>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <Stat icon={Users} target={2500} suffix="+" label={t("home.happy")} />
          <Stat icon={School} target={40} suffix="+" label={t("home.accredited")} />
          <Stat icon={GraduationCap} target={120} suffix="+" label={t("home.major")} />
          <Stat icon={Headset} target={15} suffix="" label={t("home.consulting")} />
        </div>
      </Reveal>
    </section>
  )
}

export function PartnersMarquee() {
  const logos = [
    "/assets/images/plat1.png",
    "/assets/images/plat2.png",
    "/assets/images/plat3.png",
    "/assets/images/plat4.png",
    "/assets/images/plat5.png",
    "/assets/images/udemy.png",
  ]
  const strip = [...logos, ...logos, ...logos, ...logos]

  return (
    <section className="border-y py-8" dir="ltr">
      <div className="overflow-hidden mask-[linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-16 px-8">
          {strip.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h-9 w-auto opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export function Features() {
  const { t } = useTranslation("common")
  const features = [
    { icon: Headset, label: t("home.support") },
    { icon: CreditCard, label: t("home.pay") },
    { icon: FileText, label: t("home.reports") },
    { icon: Zap, label: t("home.response") },
  ]

  return (
    <section className="bg-muted/40 relative overflow-hidden py-20">
      <div className="bg-dots absolute inset-0 opacity-30" aria-hidden />
      <div className="relative container mx-auto px-4">
        <Reveal>
          <SectionHeading
            eyebrow={t("home.why")}
            title={t("home.features")}
            subtitle={t("home.about")}
          />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 120}>
              <Card className="group hover:border-primary/40 relative h-full overflow-hidden text-center transition-all hover:-translate-y-1 hover:shadow-xl">
                <div
                  className="from-primary/10 absolute -top-10 -inset-e-10 size-24 rounded-full bg-linear-to-br to-transparent transition-transform group-hover:scale-150"
                  aria-hidden
                />
                <CardContent className="space-y-4 p-7">
                  <div className="from-primary to-secondary text-primary-foreground mx-auto w-fit rounded-2xl bg-linear-to-br p-4 shadow-lg">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="text-lg font-bold">{label}</h3>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function StepsSection() {
  const { t } = useTranslation("common")
  const localized = useLocalized()
  const steps = getStudySteps()

  return (
    <section className="container mx-auto px-4 py-20">
      <Reveal>
        <SectionHeading eyebrow={t("home.ready")} title={t("education.steps")} />
      </Reveal>
      <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div
          className="border-primary/25 absolute top-6 right-[10%] left-[10%] hidden border-t-2 border-dashed lg:block"
          aria-hidden
        />
        {steps.map((step, i) => (
          <Reveal key={step.id} delay={i * 120}>
            <li className="relative text-center">
              <div className="from-primary to-secondary text-primary-foreground shadow-primary/30 relative z-10 mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-linear-to-br text-lg font-extrabold shadow-lg">
                {step.order}
              </div>
              <h3 className="mb-1.5 font-bold">{localized(step.title)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {localized(step.details)}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}

export function TestimonialsSection() {
  const { t } = useTranslation("common")
  const localized = useLocalized()
  const dir = useDirection()
  const testimonials = getTestimonials()
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }))

  return (
    <section className="bg-muted/40 relative overflow-hidden py-20">
      <div className="relative container mx-auto px-4">
        <Reveal>
          <SectionHeading
            eyebrow={t("home.recommendations")}
            title={t("home.says")}
            subtitle={t("home.opinions")}
          />
        </Reveal>
        <Reveal delay={150}>
          <Carousel opts={{ direction: dir, align: "start", loop: true }} plugins={[autoplay.current]}>
            <CarouselContent className="py-3">
              {testimonials.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full transition-shadow hover:shadow-lg">
                    <CardContent className="flex h-full flex-col gap-4 p-7">
                      <Quote className="text-primary/30 size-8" />
                      <p className="text-muted-foreground flex-1 leading-relaxed">
                        {localized(item.quote)}
                      </p>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="fill-secondary text-secondary size-4"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-3 border-t pt-4">
                        <img
                          src={item.avatar ?? "/assets/images/user.jpg"}
                          alt=""
                          className="ring-primary/20 size-11 rounded-full object-cover ring-2"
                        />
                        <div>
                          <div className="font-bold">{localized(item.name)}</div>
                          <div className="text-muted-foreground text-xs">
                            {localized(item.role)}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:inline-flex" />
            <CarouselNext className="hidden md:inline-flex" />
          </Carousel>
        </Reveal>
      </div>
    </section>
  )
}

export function CtaStrip() {
  const { t } = useTranslation("common")

  return (
    <section className="container mx-auto px-4 py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[oklch(0.28_0.045_253)] px-8 py-16 text-center text-white md:px-16">
          <div
            className="bg-primary/30 absolute -top-24 -inset-s-24 size-72 rounded-full blur-3xl"
            aria-hidden
          />
          <div
            className="bg-secondary/25 absolute -bottom-24 -inset-e-24 size-72 rounded-full blur-3xl"
            aria-hidden
          />
          <div className="bg-dots absolute inset-0 opacity-20" aria-hidden />
          <div className="relative space-y-4">
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold text-balance md:text-5xl">
              {t("home.dontLetGo")}
            </h2>
            <p className="text-lg text-white/70">{t("home.deserveBest")}</p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button asChild size="lg" className="h-12 gap-2 px-8 text-base">
                <Link to="/register">
                  {t("home.register")}
                  <ArrowRight className="size-4 rtl:rotate-180" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-white/30 bg-transparent px-8 text-base text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/contact-us">{t("home.callUs")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
