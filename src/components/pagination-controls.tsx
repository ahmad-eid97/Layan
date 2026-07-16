import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface PaginationControlsProps {
  page: number
  totalPages: number
  onChange: (page: number) => void
}

export function PaginationControls({
  page,
  totalPages,
  onChange,
}: PaginationControlsProps) {
  if (totalPages <= 1) return null

  const go = (next: number) => () => {
    if (next >= 1 && next <= totalPages) {
      onChange(next)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); go(page - 1)() }} />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <PaginationItem key={n}>
            <PaginationLink
              href="#"
              isActive={n === page}
              onClick={(e) => { e.preventDefault(); go(n)() }}
            >
              {n}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" onClick={(e) => { e.preventDefault(); go(page + 1)() }} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
