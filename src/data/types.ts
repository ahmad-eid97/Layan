export interface LocalizedText {
  en: string
  ar: string
}

export interface Country {
  id: number
  name: LocalizedText
  universitiesCount: number
  image?: string
}

export interface City {
  id: number
  countryId: number
  name: LocalizedText
}

export interface Degree {
  id: number
  name: LocalizedText
}

export interface Semester {
  id: number
  name: LocalizedText
}

export interface Specialty {
  id: number
  name: LocalizedText
}

export interface StudyLanguage {
  id: number
  name: LocalizedText
}

export interface University {
  id: number
  name: LocalizedText
  logo: string
  image: string
  countryId: number
  cityId: number
  internationalRanking: number
  localRanking: number
  studentCount: number
  bio: LocalizedText
  details: LocalizedText
}

export interface ProgramOffering {
  universityId: number
  cost: number
  sale?: number
  active: boolean
}

export interface Program {
  id: number
  specialtyId: number
  degreeId: number
  languageIds: number[]
  logo: string
  studyYears: number
  priceStartAt: number
  details: LocalizedText
  opportunities: LocalizedText
  offerings: ProgramOffering[]
}

export interface ArticleComment {
  name: string
  message: string
  date: string
}

export interface Article {
  id: number
  title: LocalizedText
  excerpt: LocalizedText
  body: LocalizedText
  image: string
  date: string
  author: string
  categories: LocalizedText[]
  comments: ArticleComment[]
}

export interface Service {
  id: number
  title: LocalizedText
  description: LocalizedText
  image: string
}

export interface Experience {
  id: number
  title: LocalizedText
  youtubeUrl: string
}

export interface Testimonial {
  id: number
  name: LocalizedText
  role: LocalizedText
  quote: LocalizedText
  avatar?: string
}

export interface StudyStep {
  id: number
  order: number
  title: LocalizedText
  details: LocalizedText
}

export interface Banner {
  id: number
  title: LocalizedText
  subtitle: LocalizedText
  image: string
  link?: string
}

export interface Faq {
  id: number
  question: LocalizedText
  answer: LocalizedText
}

export type ApplicationStatus = "pending" | "reviewing" | "accepted" | "rejected"

export interface Application {
  id: number
  degreeId: number
  semesterId: number
  universityId: number
  primaryProgramId: number
  secondProgramId?: number
  primaryLanguageId: number
  secondLanguageId?: number
  selectedProgram?: "primary" | "second"
  status: ApplicationStatus
  statusNotes?: LocalizedText
  submittedAt: string
}
