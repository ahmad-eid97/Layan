import { useCallback } from "react"
import { useTranslation } from "react-i18next"

export function useFormattedDate() {
  const { i18n } = useTranslation()
  const locale = i18n.resolvedLanguage === "ar" ? "ar" : "en"
  return useCallback(
    (isoDate: string) =>
      new Date(isoDate).toLocaleDateString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    [locale]
  )
}
