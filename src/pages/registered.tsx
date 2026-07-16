import { CheckCircle2 } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function RegisteredPage() {
  const { t } = useTranslation(["common", "nav"])

  return (
    <section className="relative overflow-hidden px-4 py-20">
      <div className="bg-dots absolute inset-0 opacity-30" aria-hidden />
      <Card className="relative mx-auto w-full max-w-lg text-center shadow-xl">
        <CardContent className="space-y-5 p-10">
          <div className="bg-accent mx-auto w-fit rounded-full p-5">
            <CheckCircle2 className="size-14 text-emerald-500" />
          </div>
          <h1 className="text-2xl font-extrabold text-balance">
            {t("common:university.requested")}
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            {t("common:university.requestDesc")}
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button asChild>
              <Link to="/profile">{t("nav:nav.profile")}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/">{t("nav:footer.know")}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
