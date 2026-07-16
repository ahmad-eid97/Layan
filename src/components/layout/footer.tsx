import { Mail, MapPin, Phone } from "lucide-react"
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/social-icons"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { getUniversities } from "@/data/api"
import { useLocalized } from "@/hooks/use-localized"

export function Footer() {
  const { t } = useTranslation("nav")
  const localized = useLocalized()
  const year = new Date().getFullYear()
  const footerUniversities = getUniversities().slice(0, 4)

  const knowLinks = [
    { to: "/about-us", label: t("nav.who") },
    { to: "/services", label: t("nav.services") },
    { to: "/education", label: t("footer.steps") },
    { to: "/questions", label: t("nav.questions") },
    { to: "/agent", label: t("footer.agent") },
  ]

  const socials = [
    { icon: FacebookIcon, label: "Facebook", href: "#" },
    { icon: XIcon, label: "X", href: "#" },
    { icon: InstagramIcon, label: "Instagram", href: "#" },
    { icon: YoutubeIcon, label: "YouTube", href: "#" },
  ]

  return (
    <footer className="bg-foreground text-background dark:bg-card dark:text-card-foreground mt-16">
      <div className="container mx-auto grid gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <img src="/assets/images/logo.png" alt="Layan" className="h-12 w-auto" />
          <p className="text-background/70 dark:text-muted-foreground text-sm leading-relaxed">
            {t("footer.layan")}
          </p>
          <div className="flex gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="bg-background/10 hover:bg-primary rounded-full p-2 transition-colors"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold">{t("footer.know")}</h3>
          <ul className="space-y-2 text-sm">
            {knowLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-background/70 dark:text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold">{t("footer.ourUniversities")}</h3>
          <ul className="space-y-2 text-sm">
            {footerUniversities.map((u) => (
              <li key={u.id}>
                <Link
                  to={`/university/${u.id}`}
                  className="text-background/70 dark:text-muted-foreground hover:text-primary transition-colors"
                >
                  {localized(u.name)}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/all-universities"
                className="text-primary font-medium hover:underline"
              >
                {t("footer.more")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold">{t("footer.contacting")}</h3>
          <ul className="text-background/70 dark:text-muted-foreground space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="text-primary size-4 shrink-0" />
              <a href="mailto:info@layanedu.com" className="hover:text-primary">
                info@layanedu.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-primary size-4 shrink-0" />
              <a href="tel:+902129999999" dir="ltr" className="hover:text-primary">
                +90 212 999 99 99
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-primary size-4 shrink-0" />
              <span>{t("footer.address", { defaultValue: "Istanbul, Turkey" })}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-background/10 border-t">
        <div className="text-background/60 dark:text-muted-foreground container mx-auto px-4 py-4 text-center text-xs">
          © {year} Layan — {t("footer.right")}
        </div>
      </div>
    </footer>
  )
}
