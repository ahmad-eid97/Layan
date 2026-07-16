import { seedApplications } from "./applications"
import { blogs, news } from "./articles"
import {
  admissionRequirements,
  banners,
  experiences,
  faqs,
  services,
  studySteps,
  testimonials,
} from "./content"
import { programs } from "./programs"
import {
  cities,
  countries,
  degrees,
  semesters,
  specialties,
  studyLanguages,
} from "./taxonomies"
import { universities } from "./universities"
import type {
  Application,
  Article,
  Degree,
  Program,
  Specialty,
  StudyLanguage,
  University,
} from "./types"

export const getCountries = () => countries
export const getCities = (countryId?: number) =>
  countryId ? cities.filter((c) => c.countryId === countryId) : cities
export const getDegrees = () => degrees
export const getSemesters = () => semesters
export const getSpecialties = () => specialties
export const getStudyLanguages = () => studyLanguages

export const getCountry = (id: number) => countries.find((c) => c.id === id)
export const getCity = (id: number) => cities.find((c) => c.id === id)
export const getDegree = (id: number) => degrees.find((d) => d.id === id)
export const getSemester = (id: number) => semesters.find((s) => s.id === id)
export const getSpecialty = (id: number) => specialties.find((s) => s.id === id)
export const getStudyLanguage = (id: number) =>
  studyLanguages.find((l) => l.id === id)

export const getUniversities = (filter?: { countryId?: number }) =>
  filter?.countryId
    ? universities.filter((u) => u.countryId === filter.countryId)
    : universities

export const getUniversity = (id: number) => universities.find((u) => u.id === id)

export function getUniversityDegrees(universityId: number) {
  const offered = programs.filter((p) =>
    p.offerings.some((o) => o.universityId === universityId)
  )
  const byDegree = new Map<number, Program[]>()
  for (const program of offered) {
    const list = byDegree.get(program.degreeId) ?? []
    list.push(program)
    byDegree.set(program.degreeId, list)
  }
  return [...byDegree.entries()]
    .map(([degreeId, degreePrograms]) => ({
      degree: getDegree(degreeId)!,
      programs: degreePrograms.map(expandProgram),
    }))
    .sort((a, b) => a.degree.id - b.degree.id)
}

export const getUniversitySpecialties = (universityId: number): Specialty[] => [
  ...new Map(
    programs
      .filter((p) => p.offerings.some((o) => o.universityId === universityId))
      .map((p) => [p.specialtyId, getSpecialty(p.specialtyId)!])
  ).values(),
]

export interface ProgramView extends Program {
  specialty: Specialty
  degree: Degree
  languages: StudyLanguage[]
  universities: Array<{
    university: University
    cost: number
    sale?: number
    active: boolean
  }>
}

export function expandProgram(program: Program): ProgramView {
  return {
    ...program,
    specialty: getSpecialty(program.specialtyId)!,
    degree: getDegree(program.degreeId)!,
    languages: program.languageIds.map((id) => getStudyLanguage(id)!),
    universities: program.offerings
      .map((o) => ({
        university: getUniversity(o.universityId)!,
        cost: o.cost,
        sale: o.sale,
        active: o.active,
      }))
      .filter((o) => o.university !== undefined),
  }
}

export interface ProgramFilter {
  countryId?: number
  universityId?: number
  degreeId?: number
  specialtyId?: number
  languageId?: number
}

export function getPrograms(filter?: ProgramFilter): ProgramView[] {
  return programs
    .filter((p) => {
      if (!filter) return true
      if (filter.degreeId && p.degreeId !== filter.degreeId) return false
      if (filter.specialtyId && p.specialtyId !== filter.specialtyId) return false
      if (filter.languageId && !p.languageIds.includes(filter.languageId))
        return false
      if (
        filter.universityId &&
        !p.offerings.some((o) => o.universityId === filter.universityId)
      )
        return false
      if (
        filter.countryId &&
        !p.offerings.some(
          (o) => getUniversity(o.universityId)?.countryId === filter.countryId
        )
      )
        return false
      return true
    })
    .map(expandProgram)
}

export const getProgram = (id: number) => {
  const program = programs.find((p) => p.id === id)
  return program ? expandProgram(program) : undefined
}

export const getAdmissionRequirements = (degreeId: number) =>
  admissionRequirements[degreeId] ?? []

export const getBanners = () => banners
export const getServices = () => services
export const getExperiences = () => experiences
export const getTestimonials = () => testimonials
export const getStudySteps = () =>
  [...studySteps].sort((a, b) => a.order - b.order)
export const getFaqs = () => faqs

function searchArticles(list: Article[], search?: string) {
  if (!search?.trim()) return list
  const q = search.trim().toLowerCase()
  return list.filter(
    (a) =>
      a.title.en.toLowerCase().includes(q) ||
      a.title.ar.includes(q) ||
      a.excerpt.en.toLowerCase().includes(q) ||
      a.excerpt.ar.includes(q)
  )
}

export const getBlogs = (search?: string) => searchArticles(blogs, search)
export const getBlog = (id: number) => blogs.find((b) => b.id === id)
export const getNews = (search?: string) => searchArticles(news, search)
export const getNewsItem = (id: number) => news.find((n) => n.id === id)

const APPLICATIONS_KEY = "layan-applications"

function readStoredApplications(): Application[] {
  try {
    const raw = localStorage.getItem(APPLICATIONS_KEY)
    return raw ? (JSON.parse(raw) as Application[]) : []
  } catch {
    return []
  }
}

export function getApplications(): Application[] {
  return [...seedApplications, ...readStoredApplications()]
}

export function submitApplication(
  data: Omit<Application, "id" | "status" | "submittedAt">
): Application {
  const stored = readStoredApplications()
  const application: Application = {
    ...data,
    id: 1000 + stored.length + 1,
    status: "pending",
    statusNotes: {
      en: "Your application has been received and will be reviewed shortly.",
      ar: "تم استلام طلبك وستتم مراجعته قريباً.",
    },
    submittedAt: new Date().toISOString().slice(0, 10),
  }
  localStorage.setItem(APPLICATIONS_KEY, JSON.stringify([...stored, application]))
  return application
}
