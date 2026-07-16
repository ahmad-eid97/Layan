import { useTranslation } from "react-i18next"
import { useParams } from "react-router"
import { ArticleDetail } from "@/components/articles/article-detail"
import { getBlog, getBlogs } from "@/data/api"

export default function BlogDetailsPage() {
  const { blogId } = useParams()
  const { t } = useTranslation("common")

  return (
    <ArticleDetail
      article={getBlog(Number(blogId))}
      latest={getBlogs()}
      basePath="/blogs"
      emptyLabel={t("blogs.noBlogs")}
      latestLabel={t("blogDetails.latest")}
      withComments
    />
  )
}
