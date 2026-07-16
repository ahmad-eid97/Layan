import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { ArticleCard } from "@/components/cards/article-card"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getBlogs, getNews } from "@/data/api"

export function ArticlesSection() {
  const { t } = useTranslation("common")
  const blogs = getBlogs().slice(0, 3)
  const news = getNews().slice(0, 3)

  return (
    <section className="container mx-auto px-4 py-16">
      <SectionHeading title={t("blogs.famous")} subtitle={t("news.latest")} />
      <Tabs defaultValue="blogs">
        <TabsList className="mx-auto mb-6">
          <TabsTrigger value="blogs">{t("home.blogs")}</TabsTrigger>
          <TabsTrigger value="news">{t("home.news")}</TabsTrigger>
        </TabsList>
        <TabsContent value="blogs">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((article) => (
              <ArticleCard key={article.id} article={article} basePath="/blogs" />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link to="/blogs">{t("home.seeMore")}</Link>
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="news">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map((article) => (
              <ArticleCard key={article.id} article={article} basePath="/news" />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link to="/news">{t("home.seeMore")}</Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
