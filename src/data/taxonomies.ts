import type {
  City,
  Country,
  Degree,
  Semester,
  Specialty,
  StudyLanguage,
} from "./types"

export const countries: Country[] = [
  { id: 1, name: { en: "Turkey", ar: "تركيا" }, universitiesCount: 3, image: "/assets/images/uni-istanbul.jpg" },
  { id: 2, name: { en: "Egypt", ar: "مصر" }, universitiesCount: 2, image: "/assets/images/uni-cairo.jpg" },
  { id: 3, name: { en: "Syria", ar: "سوريا" }, universitiesCount: 1, image: "/assets/images/uni-aleppo.jpg" },
  { id: 4, name: { en: "Palestine", ar: "فلسطين" }, universitiesCount: 1, image: "/assets/images/uni-palestine.jpg" },
  { id: 5, name: { en: "United States", ar: "الولايات المتحدة" }, universitiesCount: 1, image: "/assets/images/uni-boston.jpg" },
]

export const cities: City[] = [
  { id: 1, countryId: 1, name: { en: "Istanbul", ar: "إسطنبول" } },
  { id: 2, countryId: 1, name: { en: "Ankara", ar: "أنقرة" } },
  { id: 3, countryId: 1, name: { en: "Izmir", ar: "إزمير" } },
  { id: 4, countryId: 2, name: { en: "Cairo", ar: "القاهرة" } },
  { id: 5, countryId: 2, name: { en: "Alexandria", ar: "الإسكندرية" } },
  { id: 6, countryId: 3, name: { en: "Aleppo", ar: "حلب" } },
  { id: 7, countryId: 3, name: { en: "Damascus", ar: "دمشق" } },
  { id: 8, countryId: 4, name: { en: "Ramallah", ar: "رام الله" } },
  { id: 9, countryId: 4, name: { en: "Gaza", ar: "غزة" } },
  { id: 10, countryId: 5, name: { en: "Boston", ar: "بوسطن" } },
  { id: 11, countryId: 5, name: { en: "New York", ar: "نيويورك" } },
]

export const degrees: Degree[] = [
  { id: 1, name: { en: "Bachelor", ar: "بكالوريوس" } },
  { id: 2, name: { en: "Master", ar: "ماجستير" } },
  { id: 3, name: { en: "PhD", ar: "دكتوراه" } },
  { id: 4, name: { en: "Diploma", ar: "دبلوم" } },
]

export const semesters: Semester[] = [
  { id: 1, name: { en: "Fall 2026", ar: "خريف 2026" } },
  { id: 2, name: { en: "Spring 2027", ar: "ربيع 2027" } },
  { id: 3, name: { en: "Summer 2027", ar: "صيف 2027" } },
]

export const specialties: Specialty[] = [
  { id: 1, name: { en: "Medicine", ar: "الطب البشري" } },
  { id: 2, name: { en: "Dentistry", ar: "طب الأسنان" } },
  { id: 3, name: { en: "Pharmacy", ar: "الصيدلة" } },
  { id: 4, name: { en: "Software Engineering", ar: "هندسة البرمجيات" } },
  { id: 5, name: { en: "Civil Engineering", ar: "الهندسة المدنية" } },
  { id: 6, name: { en: "Business Administration", ar: "إدارة الأعمال" } },
  { id: 7, name: { en: "Law", ar: "القانون" } },
  { id: 8, name: { en: "Graphic Design", ar: "التصميم الجرافيكي" } },
]

export const studyLanguages: StudyLanguage[] = [
  { id: 1, name: { en: "English", ar: "الإنجليزية" } },
  { id: 2, name: { en: "Turkish", ar: "التركية" } },
  { id: 3, name: { en: "Arabic", ar: "العربية" } },
]
