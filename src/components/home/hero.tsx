import Autoplay from "embla-carousel-autoplay"
import { BadgeCheck, GraduationCap, Sparkles } from "lucide-react"
import { useRef } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { getBanners } from "@/data/api"
import { useDirection } from "@/hooks/use-direction"
import { useLocalized } from "@/hooks/use-localized"

export function Hero() {
  const { t } = useTranslation("common")
  const localized = useLocalized()
  const dir = useDirection()
  const banners = getBanners()
  const autoplay = useRef(Autoplay({ delay: 6000, stopOnInteraction: false }))

  return (
    <section className="relative -mt-16 overflow-hidden pt-16">
      <div className="hero-glow absolute inset-0" aria-hidden />
      <div className="bg-dots absolute inset-0 opacity-40" aria-hidden />

      <Carousel
        opts={{ direction: dir, loop: true }}
        plugins={[autoplay.current]}
        className="relative container mx-auto px-4"
      >
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <div className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
                <div className="space-y-6 text-center md:text-start">
                  <span className="border-primary/20 bg-primary/5 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-bold">
                    <Sparkles className="size-4" />
                    {t("home.layan")}
                  </span>
                  <h1 className="text-4xl leading-[1.15] font-extrabold text-balance md:text-6xl">
                    <span className="text-gradient">{localized(banner.title)}</span>
                  </h1>
                  <p className="text-muted-foreground mx-auto max-w-xl text-lg leading-relaxed md:mx-0">
                    {localized(banner.subtitle)}
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                    <Button asChild size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25">
                      <Link to={banner.link ?? "/register"}>{t("home.register")}</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base">
                      <Link to="/about-us">{t("home.know")}</Link>
                    </Button>
                  </div>
                  <div className="text-muted-foreground flex items-center justify-center gap-3 text-sm md:justify-start">
                    <div className="flex -space-x-2 rtl:space-x-reverse">
                      {[1, 2, 3, 4].map((i) => (
                        <img
                          key={i}
                          src={`/assets/images/avatar-${i}.jpg`}
                          alt=""
                          className="border-background size-8 rounded-full border-2 object-cover"
                        />
                      ))}
                    </div>
                    <span>
                      <strong className="text-foreground">2,500+</strong>{" "}
                      {t("home.happy")}
                    </span>
                  </div>
                </div>

                <div className="relative hidden justify-center md:flex">
                  <div className="image-glow absolute -inset-10" aria-hidden />
                  <img
                    src={banner.image}
                    alt=""
                    className="relative max-h-105 w-auto object-contain drop-shadow-2xl"
                  />
                  <div className="bg-background/90 animate-float absolute top-10 inset-s-4 flex items-center gap-2 rounded-2xl border p-3 shadow-lg backdrop-blur">
                    <BadgeCheck className="text-primary size-6" />
                    <div className="text-sm">
                      <div className="font-bold">96%</div>
                      <div className="text-muted-foreground text-xs">
                        {t("home.accredited")}
                      </div>
                    </div>
                  </div>
                  <div className="bg-background/90 animate-float-delayed absolute bottom-10 inset-e-4 flex items-center gap-2 rounded-2xl border p-3 shadow-lg backdrop-blur">
                    <GraduationCap className="text-secondary size-6" />
                    <div className="text-sm">
                      <div className="font-bold">120+</div>
                      <div className="text-muted-foreground text-xs">
                        {t("home.major")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
