import { Search } from "lucide-react"
import { useState } from "react"
import { ArticleCard } from "@/components/cards/article-card"
import { EmptyState } from "@/components/empty-state"
import { PageHeader } from "@/components/page-header"
import { PaginationControls } from "@/components/pagination-controls"
import { Reveal } from "@/components/reveal"
import { Input } from "@/components/ui/input"
import type { Article } from "@/data/types"
import { usePagination } from "@/hooks/use-pagination"

interface ArticleListProps {
  title: string
  subtitle?: string
  searchPlaceholder: string
  emptyLabel: string
  basePath: "/blogs" | "/news"
  getArticles: (search?: string) => Article[]
}

export function ArticleList({
  title,
  subtitle,
  searchPlaceholder,
  emptyLabel,
  basePath,
  getArticles,
}: ArticleListProps) {
  const [search, setSearch] = useState("")
  const articles = getArticles(search)
  const { page, setPage, totalPages, pageItems } = usePagination(articles, 9)

  return (
    <>
      <PageHeader title={title} subtitle={subtitle} />

      <section className="container mx-auto px-4 py-10">
        <div className="mb-8 flex justify-center">
          <div className="relative w-full max-w-md">
            <Search className="text-muted-foreground absolute top-1/2 inset-s-3 size-4 -translate-y-1/2" />
            <Input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setPage(1)
              }}
              placeholder={searchPlaceholder}
              className="ps-9"
            />
          </div>
        </div>

        {pageItems.length === 0 ? (
          <EmptyState title={emptyLabel} />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pageItems.map((article, i) => (
              <Reveal key={article.id} delay={i * 60}>
                <ArticleCard article={article} basePath={basePath} />
              </Reveal>
            ))}
          </div>
        )}

        <PaginationControls page={page} totalPages={totalPages} onChange={setPage} />
      </section>
    </>
  )
}
