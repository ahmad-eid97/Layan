import { useCallback } from "react"
import { useTranslation } from "react-i18next"
import type { LocalizedText } from "@/data/types"

export function useLocalized() {
  const { i18n } = useTranslation()
  const lang: keyof LocalizedText = i18n.resolvedLanguage === "ar" ? "ar" : "en"
  return useCallback((text: LocalizedText) => text[lang], [lang])
}
