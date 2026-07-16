import { useTranslation } from "react-i18next"
import { useSearchParams } from "react-router"
import { ProgramCard } from "@/components/cards/program-card"
import { EmptyState } from "@/components/empty-state"
import { PageHeader } from "@/components/page-header"
import { PaginationControls } from "@/components/pagination-controls"
import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import {
  getCountry,
  getDegree,
  getPrograms,
  getSpecialty,
  getStudyLanguage,
  getUniversity,
} from "@/data/api"
import { useLocalized } from "@/hooks/use-localized"
import { usePagination } from "@/hooks/use-pagination"

function toId(value: string | null): number | undefined {
  const n = Number(value)
  return value && Number.isFinite(n) ? n : undefined
}

export default function ProgramsFilterPage() {
  const { t } = useTranslation("common")
  const localized = useLocalized()
  const [searchParams] = useSearchParams()

  const filter = {
    countryId: toId(searchParams.get("country")),
    universityId: toId(searchParams.get("university")),
    degreeId: toId(searchParams.get("degree")),
    specialtyId: toId(searchParams.get("specialty")),
    languageId: toId(searchParams.get("language")),
  }

  const programs = getPrograms(filter)
  const { page, setPage, totalPages, pageItems } = usePagination(programs, 9)

  const activeFilters = [
    filter.countryId && getCountry(filter.countryId)?.name,
    filter.universityId && getUniversity(filter.universityId)?.name,
    filter.degreeId && getDegree(filter.degreeId)?.name,
    filter.specialtyId && getSpecialty(filter.specialtyId)?.name,
    filter.languageId && getStudyLanguage(filter.languageId)?.name,
  ].filter((name): name is Exclude<typeof name, 0 | false | undefined> =>
    Boolean(name)
  )

  return (
    <>
      <PageHeader title={t("programs.programs")} subtitle={t("home.search")}>
        {activeFilters.length > 0 && (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {activeFilters.map((name, i) => (
              <Badge key={i} variant="secondary">
                {localized(name)}
              </Badge>
            ))}
          </div>
        )}
      </PageHeader>

      <section className="container mx-auto px-4 py-10">
        {pageItems.length === 0 ? (
          <EmptyState title={t("programs.noPrograms")} />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pageItems.map((program, i) => (
              <Reveal key={program.id} delay={i * 60}>
                <ProgramCard program={program} />
              </Reveal>
            ))}
          </div>
        )}

        <PaginationControls page={page} totalPages={totalPages} onChange={setPage} />
      </section>
    </>
  )
}
