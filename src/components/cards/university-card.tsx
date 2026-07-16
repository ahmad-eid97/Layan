import { MapPin, Users } from "lucide-react"
import { Link } from "react-router"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getCountry } from "@/data/api"
import type { University } from "@/data/types"
import { useLocalized } from "@/hooks/use-localized"

export function UniversityCard({ university }: { university: University }) {
  const localized = useLocalized()
  const country = getCountry(university.countryId)

  return (
    <Link to={`/university/${university.id}`} className="group block h-full">
      <Card className="h-full gap-0 overflow-hidden py-0 transition-shadow hover:shadow-lg">
        <div className="bg-muted relative aspect-[16/9] overflow-hidden">
          <img
            src={university.image}
            alt={localized(university.name)}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <Badge className="absolute top-3 start-3">
            #{university.internationalRanking}
          </Badge>
        </div>
        <CardContent className="space-y-2 p-4">
          <h3 className="group-hover:text-primary font-bold transition-colors">
            {localized(university.name)}
          </h3>
          <div className="text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
            {country && (
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3.5" />
                {localized(country.name)}
              </span>
            )}
            <span className="inline-flex items-center gap-1">
              <Users className="size-3.5" />
              {university.studentCount.toLocaleString()}
            </span>
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {localized(university.bio)}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
