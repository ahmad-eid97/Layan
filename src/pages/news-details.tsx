import { useTranslation } from "react-i18next"
import { useParams } from "react-router"
import { ArticleDetail } from "@/components/articles/article-detail"
import { getNews, getNewsItem } from "@/data/api"

export default function NewsDetailsPage() {
  const { newsId } = useParams()
  const { t } = useTranslation("common")

  return (
    <ArticleDetail
      article={getNewsItem(Number(newsId))}
      latest={getNews()}
      basePath="/news"
      emptyLabel={t("news.noNews")}
      latestLabel={t("newsDetails.latest")}
    />
  )
}
