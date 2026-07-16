import { CalendarDays, MessageCircle } from "lucide-react"
import { Link } from "react-router"
import { Card, CardContent } from "@/components/ui/card"
import type { Article } from "@/data/types"
import { useLocalized } from "@/hooks/use-localized"
import { useFormattedDate } from "@/hooks/use-formatted-date"

export function ArticleCard({
  article,
  basePath,
}: {
  article: Article
  basePath: "/blogs" | "/news"
}) {
  const localized = useLocalized()
  const formatDate = useFormattedDate()

  return (
    <Link to={`${basePath}/${article.id}`} className="group block h-full">
      <Card className="h-full gap-0 overflow-hidden py-0 transition-shadow hover:shadow-lg">
        <div className="bg-muted aspect-[16/9] overflow-hidden">
          <img
            src={article.image}
            alt={localized(article.title)}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <CardContent className="space-y-2 p-4">
          <div className="text-muted-foreground flex items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="size-3.5" />
              {formatDate(article.date)}
            </span>
            {article.comments.length > 0 && (
              <span className="inline-flex items-center gap-1">
                <MessageCircle className="size-3.5" />
                {article.comments.length}
              </span>
            )}
          </div>
          <h3 className="group-hover:text-primary line-clamp-2 font-bold transition-colors">
            {localized(article.title)}
          </h3>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {localized(article.excerpt)}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
