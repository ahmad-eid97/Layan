import { Search } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { UniversityCard } from "@/components/cards/university-card"
import { EmptyState } from "@/components/empty-state"
import { PageHeader } from "@/components/page-header"
import { PaginationControls } from "@/components/pagination-controls"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getCountries, getUniversities } from "@/data/api"
import { useLocalized } from "@/hooks/use-localized"
import { usePagination } from "@/hooks/use-pagination"

export default function AllUniversitiesPage() {
  const { t } = useTranslation("common")
  const localized = useLocalized()
  const [countryId, setCountryId] = useState<number | null>(null)
  const [search, setSearch] = useState("")

  const filtered = getUniversities(countryId ? { countryId } : undefined).filter(
    (u) => {
      if (!search.trim()) return true
      const q = search.trim().toLowerCase()
      return u.name.en.toLowerCase().includes(q) || u.name.ar.includes(q)
    }
  )

  const { page, setPage, totalPages, pageItems } = usePagination(filtered, 8)

  return (
    <>
      <PageHeader title={t("university.universities")} subtitle={t("unis.unis")} />

      <section className="container mx-auto px-4 py-10">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={countryId === null ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => {
                setCountryId(null)
                setPage(1)
              }}
            >
              {t("unis.all")}
            </Button>
            {getCountries().map((country) => (
              <Button
                key={country.id}
                variant={countryId === country.id ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => {
                  setCountryId(country.id)
                  setPage(1)
                }}
              >
                {localized(country.name)}
                <span className="text-xs opacity-70">
                  ({country.universitiesCount})
                </span>
              </Button>
            ))}
          </div>

          <div className="relative w-full max-w-xs">
            <Search className="text-muted-foreground absolute top-1/2 inset-s-3 size-4 -translate-y-1/2" />
            <Input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setPage(1)
              }}
              placeholder={t("unis.searchUnis")}
              className="ps-9"
            />
          </div>
        </div>

        {pageItems.length === 0 ? (
          <EmptyState title={t("university.noUniversity")} />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {pageItems.map((university, i) => (
              <Reveal key={university.id} delay={i * 60}>
                <UniversityCard university={university} />
              </Reveal>
            ))}
          </div>
        )}

        <PaginationControls page={page} totalPages={totalPages} onChange={setPage} />
      </section>
    </>
  )
}
