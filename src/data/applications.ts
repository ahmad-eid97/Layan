import type { Application } from "./types"

export const seedApplications: Application[] = [
  {
    id: 1,
    degreeId: 1,
    semesterId: 1,
    universityId: 1,
    primaryProgramId: 1,
    secondProgramId: 2,
    primaryLanguageId: 1,
    secondLanguageId: 2,
    selectedProgram: "primary",
    status: "accepted",
    statusNotes: {
      en: "Congratulations! Your acceptance letter has been issued. Our team will contact you about visa steps.",
      ar: "مبروك! صدر خطاب قبولك. سيتواصل معك فريقنا بخصوص خطوات التأشيرة.",
    },
    submittedAt: "2026-05-02",
  },
  {
    id: 2,
    degreeId: 2,
    semesterId: 2,
    universityId: 2,
    primaryProgramId: 9,
    primaryLanguageId: 1,
    status: "reviewing",
    statusNotes: {
      en: "Your file is under review by the university admission office.",
      ar: "ملفك قيد المراجعة لدى مكتب القبول في الجامعة.",
    },
    submittedAt: "2026-06-20",
  },
]
