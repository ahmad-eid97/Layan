import { useTranslation } from "react-i18next"
import { ProgramCard } from "@/components/cards/program-card"
import { EmptyState } from "@/components/empty-state"
import { PageHeader } from "@/components/page-header"
import { PaginationControls } from "@/components/pagination-controls"
import { Reveal } from "@/components/reveal"
import { getPrograms } from "@/data/api"
import { usePagination } from "@/hooks/use-pagination"

export default function ProgramsPage() {
  const { t } = useTranslation("common")
  const programs = getPrograms()
  const { page, setPage, totalPages, pageItems } = usePagination(programs, 9)

  return (
    <>
      <PageHeader
        title={t("programs.programs")}
        subtitle={t("programData.register")}
      />

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
