import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import arAuth from "./locales/ar/auth.json"
import arCommon from "./locales/ar/common.json"
import arNav from "./locales/ar/nav.json"
import enAuth from "./locales/en/auth.json"
import enCommon from "./locales/en/common.json"
import enNav from "./locales/en/nav.json"

export const LANGUAGES = ["en", "ar"] as const
export type Language = (typeof LANGUAGES)[number]

export function isRtl(lang: string) {
  return lang.startsWith("ar")
}

function applyDocumentLanguage(lang: string) {
  document.documentElement.lang = lang
  document.documentElement.dir = isRtl(lang) ? "rtl" : "ltr"
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { auth: enAuth, common: enCommon, nav: enNav },
      ar: { auth: arAuth, common: arCommon, nav: arNav },
    },
    supportedLngs: [...LANGUAGES],
    fallbackLng: "ar",
    ns: ["common", "nav", "auth"],
    defaultNS: "common",
    keySeparator: false,
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "layan-lang",
    },
  })

i18n.on("languageChanged", applyDocumentLanguage)
applyDocumentLanguage(i18n.resolvedLanguage ?? "ar")

export default i18n
