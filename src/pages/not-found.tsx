import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  const { t } = useTranslation(["common", "nav"])

  return (
    <section className="relative overflow-hidden px-4 py-24 text-center">
      <div className="bg-dots absolute inset-0 opacity-30" aria-hidden />
      <div className="relative space-y-5">
        <div className="text-gradient text-8xl font-extrabold md:text-9xl">404</div>
        <h1 className="text-2xl font-extrabold">{t("common:notFound.notFound")}</h1>
        <Button asChild size="lg">
          <Link to="/">{t("nav:footer.know")}</Link>
        </Button>
      </div>
    </section>
  )
}
