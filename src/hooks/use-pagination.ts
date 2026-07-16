import { useMemo, useState } from "react"

export function usePagination<T>(items: T[], perPage = 9) {
  const [page, setPage] = useState(1)
  const totalPages = Math.max(1, Math.ceil(items.length / perPage))
  const current = Math.min(page, totalPages)

  const pageItems = useMemo(
    () => items.slice((current - 1) * perPage, current * perPage),
    [items, current, perPage]
  )

  return { page: current, setPage, totalPages, pageItems, total: items.length }
}
