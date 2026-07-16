import { useState, type FormEvent } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  getSemesters,
  getUniversities,
  getUniversityDegrees,
  submitApplication,
} from "@/data/api"
import { useLocalized } from "@/hooks/use-localized"

export default function EducationInfoPage() {
  const { t } = useTranslation("common")
  const localized = useLocalized()
  const navigate = useNavigate()

  const [semesterId, setSemesterId] = useState("")
  const [universityId, setUniversityId] = useState("")
  const [degreeId, setDegreeId] = useState("")
  const [primaryProgramId, setPrimaryProgramId] = useState("")
  const [primaryLanguageId, setPrimaryLanguageId] = useState("")
  const [secondProgramId, setSecondProgramId] = useState("")
  const [secondLanguageId, setSecondLanguageId] = useState("")

  const degrees = universityId ? getUniversityDegrees(Number(universityId)) : []
  const degreePrograms =
    degrees.find((d) => d.degree.id === Number(degreeId))?.programs ?? []
  const primaryProgram = degreePrograms.find(
    (p) => p.id === Number(primaryProgramId)
  )
  const secondProgram = degreePrograms.find(
    (p) => p.id === Number(secondProgramId)
  )

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (!semesterId || !universityId || !degreeId || !primaryProgramId || !primaryLanguageId) {
      toast.error(t("info.required"))
      return
    }
    submitApplication({
      semesterId: Number(semesterId),
      universityId: Number(universityId),
      degreeId: Number(degreeId),
      primaryProgramId: Number(primaryProgramId),
      primaryLanguageId: Number(primaryLanguageId),
      secondProgramId: secondProgramId ? Number(secondProgramId) : undefined,
      secondLanguageId: secondLanguageId ? Number(secondLanguageId) : undefined,
    })
    navigate("/registered")
  }

  return (
    <>
      <PageHeader title={t("info.register")} subtitle={t("info.programInfo")} />

      <section className="container mx-auto max-w-3xl px-4 py-12">
        <Card className="shadow-lg">
          <CardContent className="p-7">
            <form onSubmit={submit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label>{t("info.semester")}</Label>
                  <Select value={semesterId} onValueChange={setSemesterId}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {getSemesters().map((semester) => (
                        <SelectItem key={semester.id} value={String(semester.id)}>
                          {localized(semester.name)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label>{t("info.university")}</Label>
                  <Select
                    value={universityId}
                    onValueChange={(v) => {
                      setUniversityId(v)
                      setDegreeId("")
                      setPrimaryProgramId("")
                      setPrimaryLanguageId("")
                      setSecondProgramId("")
                      setSecondLanguageId("")
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {getUniversities().map((university) => (
                        <SelectItem key={university.id} value={String(university.id)}>
                          {localized(university.name)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <Label>{t("info.degree")}</Label>
                  <Select
                    value={degreeId}
                    onValueChange={(v) => {
                      setDegreeId(v)
                      setPrimaryProgramId("")
                      setPrimaryLanguageId("")
                      setSecondProgramId("")
                      setSecondLanguageId("")
                    }}
                    disabled={!universityId}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {degrees.map(({ degree }) => (
                        <SelectItem key={degree.id} value={String(degree.id)}>
                          {localized(degree.name)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label>{t("info.mainProgram")}</Label>
                  <Select
                    value={primaryProgramId}
                    onValueChange={(v) => {
                      setPrimaryProgramId(v)
                      setPrimaryLanguageId("")
                    }}
                    disabled={!degreeId}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {degreePrograms.map((program) => (
                        <SelectItem key={program.id} value={String(program.id)}>
                          {localized(program.specialty.name)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label>{t("info.mainLang")}</Label>
                  <Select
                    value={primaryLanguageId}
                    onValueChange={setPrimaryLanguageId}
                    disabled={!primaryProgramId}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {(primaryProgram?.languages ?? []).map((language) => (
                        <SelectItem key={language.id} value={String(language.id)}>
                          {localized(language.name)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label>{t("info.secondProgram")}</Label>
                  <Select
                    value={secondProgramId}
                    onValueChange={(v) => {
                      setSecondProgramId(v)
                      setSecondLanguageId("")
                    }}
                    disabled={!degreeId}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {degreePrograms
                        .filter((p) => p.id !== Number(primaryProgramId))
                        .map((program) => (
                          <SelectItem key={program.id} value={String(program.id)}>
                            {localized(program.specialty.name)}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label>{t("info.secondLang")}</Label>
                  <Select
                    value={secondLanguageId}
                    onValueChange={setSecondLanguageId}
                    disabled={!secondProgramId}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {(secondProgram?.languages ?? []).map((language) => (
                        <SelectItem key={language.id} value={String(language.id)}>
                          {localized(language.name)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="app-attachments">{t("upload.upload")}</Label>
                  <Input id="app-attachments" type="file" multiple />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                {t("info.save")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </>
  )
}
