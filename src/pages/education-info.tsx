import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ClipboardList,
  GraduationCap,
  Headset,
  Landmark,
  Languages,
  UploadCloud,
} from "lucide-react"
import { useState, type FormEvent, type ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
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
  getUniversity,
  getUniversityDegrees,
  submitApplication,
} from "@/data/api"
import { useLocalized } from "@/hooks/use-localized"

function FormSection({
  step,
  title,
  hint,
  children,
}: {
  step: number
  title: string
  hint: string
  children: ReactNode
}) {
  return (
    <section className="space-y-5">
      <div className="flex items-center gap-3">
        <div className="from-primary to-secondary text-primary-foreground flex size-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br text-sm font-extrabold shadow-md">
          {step}
        </div>
        <div>
          <h2 className="font-extrabold">{title}</h2>
          <p className="text-muted-foreground text-xs">{hint}</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
    </section>
  )
}

function SummaryRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof CalendarDays
  label: string
  value?: string
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <dt className="text-muted-foreground flex items-center gap-2 text-sm">
        <Icon className="text-primary size-4 shrink-0" />
        {label}
      </dt>
      <dd className={value ? "text-end text-sm font-bold" : "text-muted-foreground/50 text-sm"}>
        {value ?? "—"}
      </dd>
    </div>
  )
}

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

  const semesters = getSemesters()
  const university = universityId ? getUniversity(Number(universityId)) : undefined
  const degrees = universityId ? getUniversityDegrees(Number(universityId)) : []
  const degree = degrees.find((d) => d.degree.id === Number(degreeId))?.degree
  const semester = semesters.find((s) => s.id === Number(semesterId))
  const degreePrograms =
    degrees.find((d) => d.degree.id === Number(degreeId))?.programs ?? []
  const primaryProgram = degreePrograms.find(
    (p) => p.id === Number(primaryProgramId)
  )
  const secondProgram = degreePrograms.find(
    (p) => p.id === Number(secondProgramId)
  )
  const primaryLanguage = primaryProgram?.languages.find(
    (l) => l.id === Number(primaryLanguageId)
  )
  const secondLanguage = secondProgram?.languages.find(
    (l) => l.id === Number(secondLanguageId)
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

      <section className="container mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-[1fr_340px]">
        <Card className="h-fit shadow-lg">
          <CardContent className="p-7">
            <form id="application-form" onSubmit={submit} className="space-y-8">
              <FormSection
                step={1}
                title={t("info.studyDetails")}
                hint={t("info.studyDetailsHint")}
              >
                <div className="space-y-1.5">
                  <Label>{t("info.semester")}</Label>
                  <Select value={semesterId} onValueChange={setSemesterId}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={t("info.select")} />
                    </SelectTrigger>
                    <SelectContent>
                      {semesters.map((item) => (
                        <SelectItem key={item.id} value={String(item.id)}>
                          {localized(item.name)}
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
                      <SelectValue placeholder={t("info.select")} />
                    </SelectTrigger>
                    <SelectContent>
                      {getUniversities().map((item) => (
                        <SelectItem key={item.id} value={String(item.id)}>
                          {localized(item.name)}
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
                      <SelectValue placeholder={t("info.select")} />
                    </SelectTrigger>
                    <SelectContent>
                      {degrees.map(({ degree: item }) => (
                        <SelectItem key={item.id} value={String(item.id)}>
                          {localized(item.name)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </FormSection>

              <div className="border-t" />

              <FormSection
                step={2}
                title={t("info.programChoices")}
                hint={t("info.programChoicesHint")}
              >
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
                      <SelectValue placeholder={t("info.select")} />
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
                      <SelectValue placeholder={t("info.select")} />
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
                  <Label className="gap-2">
                    {t("info.secondProgram")}
                    <Badge variant="outline" className="text-muted-foreground text-[10px]">
                      {t("info.optional")}
                    </Badge>
                  </Label>
                  <Select
                    value={secondProgramId}
                    onValueChange={(v) => {
                      setSecondProgramId(v)
                      setSecondLanguageId("")
                    }}
                    disabled={!degreeId}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={t("info.select")} />
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
                  <Label className="gap-2">
                    {t("info.secondLang")}
                    <Badge variant="outline" className="text-muted-foreground text-[10px]">
                      {t("info.optional")}
                    </Badge>
                  </Label>
                  <Select
                    value={secondLanguageId}
                    onValueChange={setSecondLanguageId}
                    disabled={!secondProgramId}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={t("info.select")} />
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
              </FormSection>

              <div className="border-t" />

              <FormSection
                step={3}
                title={t("info.attachments")}
                hint={t("info.attachHint")}
              >
                <div className="sm:col-span-2">
                  <Label
                    htmlFor="app-attachments"
                    className="border-muted-foreground/25 bg-muted/30 hover:border-primary/40 hover:bg-accent/40 flex cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 border-dashed p-8 text-center transition-colors"
                  >
                    <UploadCloud className="text-primary size-8" />
                    <span className="font-bold">{t("upload.upload")}</span>
                    <span className="text-muted-foreground text-xs font-normal">
                      {t("info.attachHint")}
                    </span>
                  </Label>
                  <Input
                    id="app-attachments"
                    type="file"
                    multiple
                    className="hidden"
                  />
                </div>
              </FormSection>

              <Button type="submit" size="lg" className="shadow-primary/25 w-full shadow-lg">
                {t("info.submit")}
              </Button>
            </form>
          </CardContent>
        </Card>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <Card className="shadow-lg">
            <CardContent className="space-y-5 p-6">
              <div className="flex items-center gap-3">
                <div className="bg-accent text-primary rounded-xl p-2.5">
                  <ClipboardList className="size-5" />
                </div>
                <h2 className="font-extrabold">{t("info.summary")}</h2>
              </div>

              {university ? (
                <div className="bg-muted/50 flex items-center gap-3 rounded-xl p-3">
                  <img
                    src={university.logo}
                    alt=""
                    className="bg-background size-11 rounded-lg object-contain p-1"
                  />
                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold">
                      {localized(university.name)}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {t("info.university")}
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-muted-foreground text-sm">
                  {t("info.summaryHint")}
                </p>
              )}

              <dl className="space-y-3.5">
                <SummaryRow
                  icon={CalendarDays}
                  label={t("info.semester")}
                  value={semester ? localized(semester.name) : undefined}
                />
                <SummaryRow
                  icon={GraduationCap}
                  label={t("info.degree")}
                  value={degree ? localized(degree.name) : undefined}
                />
                <SummaryRow
                  icon={BookOpen}
                  label={t("info.mainProgram")}
                  value={
                    primaryProgram
                      ? localized(primaryProgram.specialty.name)
                      : undefined
                  }
                />
                <SummaryRow
                  icon={Languages}
                  label={t("info.mainLang")}
                  value={primaryLanguage ? localized(primaryLanguage.name) : undefined}
                />
                <SummaryRow
                  icon={Landmark}
                  label={t("info.secondProgram")}
                  value={
                    secondProgram
                      ? `${localized(secondProgram.specialty.name)}${
                          secondLanguage ? ` — ${localized(secondLanguage.name)}` : ""
                        }`
                      : undefined
                  }
                />
              </dl>

              {primaryProgram && (
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">
                      {t("programData.price")}
                    </span>
                    <span className="text-primary text-xl font-extrabold">
                      ${primaryProgram.priceStartAt.toLocaleString()}
                    </span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-muted/40">
            <CardContent className="flex items-start gap-3 p-5">
              <div className="bg-accent text-primary rounded-xl p-2.5">
                <Headset className="size-5" />
              </div>
              <div className="space-y-2">
                <div className="font-bold">{t("info.help")}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("info.helpText")}
                </p>
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <Link to="/contact-us">
                    {t("info.freeConsult")}
                    <ArrowRight className="size-3.5 rtl:rotate-180" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </aside>
      </section>
    </>
  )
}
