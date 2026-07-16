import { CalendarDays, MessageCircle, User } from "lucide-react"
import { useState, type FormEvent } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { toast } from "sonner"
import { EmptyState } from "@/components/empty-state"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import type { Article, ArticleComment } from "@/data/types"
import { useFormattedDate } from "@/hooks/use-formatted-date"
import { useLocalized } from "@/hooks/use-localized"

interface ArticleDetailProps {
  article: Article | undefined
  latest: Article[]
  basePath: "/blogs" | "/news"
  emptyLabel: string
  latestLabel: string
  withComments?: boolean
}

export function ArticleDetail({
  article,
  latest,
  basePath,
  emptyLabel,
  latestLabel,
  withComments = false,
}: ArticleDetailProps) {
  const { t } = useTranslation("common")
  const localized = useLocalized()
  const formatDate = useFormattedDate()

  const [comments, setComments] = useState<ArticleComment[]>(
    article?.comments ?? []
  )
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  if (!article) {
    return (
      <section className="container mx-auto px-4 py-16">
        <EmptyState title={emptyLabel} />
      </section>
    )
  }

  const submitComment = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error(t("blogDetails.invalid"))
      return
    }
    setComments((prev) => [
      ...prev,
      { name: name.trim(), message: message.trim(), date: new Date().toISOString().slice(0, 10) },
    ])
    setName("")
    setEmail("")
    setMessage("")
    toast.success(t("blogDetails.commentAdded"))
  }

  const paragraphs = localized(article.body).split("\n\n")

  return (
    <section className="container mx-auto grid gap-10 px-4 py-12 lg:grid-cols-[1fr_320px]">
      <article className="min-w-0">
        <div className="bg-muted mb-6 overflow-hidden rounded-2xl">
          <img
            src={article.image}
            alt={localized(article.title)}
            className="max-h-96 w-full object-cover"
          />
        </div>

        <div className="mb-3 flex flex-wrap gap-2">
          {article.categories.map((category, i) => (
            <Badge key={i} variant="secondary">
              {localized(category)}
            </Badge>
          ))}
        </div>

        <h1 className="text-3xl font-extrabold text-balance md:text-4xl">
          {localized(article.title)}
        </h1>

        <div className="text-muted-foreground mt-3 flex flex-wrap items-center gap-4 text-sm">
          <span className="inline-flex items-center gap-1.5">
            <User className="size-4" />
            {t("news.addedBy")} {article.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4" />
            {formatDate(article.date)}
          </span>
          {withComments && (
            <span className="inline-flex items-center gap-1.5">
              <MessageCircle className="size-4" />
              {comments.length} {t("blogDetails.comments")}
            </span>
          )}
        </div>

        <Separator className="my-6" />

        <div className="space-y-4 text-lg leading-relaxed">
          {paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {withComments && (
          <>
            <Separator className="my-8" />
            <h2 className="mb-4 text-xl font-bold">
              {t("blogDetails.comments")} ({comments.length})
            </h2>
            <div className="space-y-4">
              {comments.map((comment, i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <span className="font-bold">{comment.name}</span>
                      <span className="text-muted-foreground text-xs">
                        {formatDate(comment.date)}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {comment.message}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="mt-8 mb-4 text-xl font-bold">
              {t("blogDetails.postNewComment")}
            </h2>
            <form onSubmit={submitComment} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("blogDetails.name")}
                />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("blogDetails.email")}
                />
              </div>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("blogDetails.comment")}
                rows={4}
              />
              <Button type="submit">{t("blogDetails.postcomment")}</Button>
            </form>
          </>
        )}
      </article>

      <aside className="space-y-6">
        <Card>
          <CardContent className="p-5">
            <h3 className="mb-4 font-bold">{latestLabel}</h3>
            <div className="space-y-4">
              {latest
                .filter((a) => a.id !== article.id)
                .slice(0, 4)
                .map((a) => (
                  <Link
                    key={a.id}
                    to={`${basePath}/${a.id}`}
                    className="group flex items-center gap-3"
                  >
                    <img
                      src={a.image}
                      alt=""
                      className="bg-muted size-14 shrink-0 rounded-lg object-cover"
                    />
                    <div className="min-w-0">
                      <div className="group-hover:text-primary line-clamp-2 text-sm font-medium transition-colors">
                        {localized(a.title)}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {formatDate(a.date)}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </CardContent>
        </Card>
      </aside>
    </section>
  )
}
