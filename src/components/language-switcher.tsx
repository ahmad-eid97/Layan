import { useTranslation } from "react-i18next"

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const next = i18n.resolvedLanguage === "ar" ? "en" : "ar"

  return (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(next)}
      className="hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-bold"
      aria-label={next === "ar" ? "التبديل إلى العربية" : "Switch to English"}
    >
      {next === "ar" ? "العربية" : "EN"}
    </button>
  )
}
