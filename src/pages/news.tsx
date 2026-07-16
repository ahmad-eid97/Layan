import { useTranslation } from "react-i18next"
import { ArticleList } from "@/components/articles/article-list"
import { getNews } from "@/data/api"

export default function NewsPage() {
  const { t } = useTranslation("common")
  return (
    <ArticleList
      title={t("home.news")}
      subtitle={t("news.latest")}
      searchPlaceholder={t("news.searchNews")}
      emptyLabel={t("news.noNews")}
      basePath="/news"
      getArticles={getNews}
    />
  )
}
