import { Clock, GraduationCap, Languages } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { ProgramView } from "@/data/api"
import { useLocalized } from "@/hooks/use-localized"

export function ProgramCard({ program }: { program: ProgramView }) {
  const localized = useLocalized()
  const { t } = useTranslation("common")

  return (
    <Link to={`/program/${program.id}`} className="group block h-full">
      <Card className="h-full transition-shadow hover:shadow-lg">
        <CardContent className="space-y-3 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="group-hover:text-primary font-bold transition-colors">
                {localized(program.specialty.name)}
              </h3>
              <p className="text-muted-foreground text-sm">
                {localized(program.degree.name)}
              </p>
            </div>
            <Badge variant="secondary" className="shrink-0">
              ${program.priceStartAt.toLocaleString()}+
            </Badge>
          </div>

          <div className="text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3.5" />
              {t("programData.years", { count: program.studyYears })}
            </span>
            <span className="inline-flex items-center gap-1">
              <Languages className="size-3.5" />
              {program.languages.map((l) => localized(l.name)).join(" · ")}
            </span>
            <span className="inline-flex items-center gap-1">
              <GraduationCap className="size-3.5" />
              {program.universities.length}
            </span>
          </div>

          <p className="text-muted-foreground line-clamp-2 text-sm">
            {localized(program.details)}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
