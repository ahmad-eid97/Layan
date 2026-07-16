import { useTranslation } from "react-i18next"
import { ArticleList } from "@/components/articles/article-list"
import { getBlogs } from "@/data/api"

export default function BlogsPage() {
  const { t } = useTranslation("common")
  return (
    <ArticleList
      title={t("home.blogs")}
      subtitle={t("blogs.famous")}
      searchPlaceholder={t("blogDetails.search")}
      emptyLabel={t("blogs.noBlogs")}
      basePath="/blogs"
      getArticles={getBlogs}
    />
  )
}
