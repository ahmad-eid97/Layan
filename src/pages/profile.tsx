import { CalendarDays, FileText, LogOut, Plus, User } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link, useNavigate } from "react-router"
import { EmptyState } from "@/components/empty-state"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/context/auth-context"
import {
  getApplications,
  getDegree,
  getProgram,
  getSemester,
  getStudyLanguage,
  getUniversity,
} from "@/data/api"
import type { ApplicationStatus } from "@/data/types"
import { useFormattedDate } from "@/hooks/use-formatted-date"
import { useLocalized } from "@/hooks/use-localized"

const statusVariant: Record<ApplicationStatus, string> = {
  pending: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  reviewing: "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300",
  accepted:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  rejected: "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300",
}

export default function ProfilePage() {
  const { t } = useTranslation("common")
  const localized = useLocalized()
  const formatDate = useFormattedDate()
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const applications = getApplications()

  if (!user) return null

  const personal = [
    { label: t("profile.name"), value: user.username },
    { label: t("profile.email"), value: user.email },
    { label: t("profile.phone"), value: user.phone },
    { label: t("profile.country"), value: user.country },
    { label: t("profile.city"), value: user.city },
    { label: t("profile.birthdate"), value: user.birthDate },
  ].filter((f) => f.value)

  return (
    <>
      <PageHeader title={user.username} subtitle={user.email} />

      <section className="container mx-auto max-w-4xl px-4 py-10">
        <Tabs defaultValue="personal">
          <TabsList className="mx-auto mb-6">
            <TabsTrigger value="personal" className="gap-2">
              <User className="size-4" />
              {t("profile.personal")}
            </TabsTrigger>
            <TabsTrigger value="applications" className="gap-2">
              <FileText className="size-4" />
              {t("profile.applications")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card>
              <CardContent className="p-7">
                <div className="mb-6 flex items-center gap-4">
                  <img
                    src="/assets/images/user.jpg"
                    alt=""
                    className="ring-primary/20 size-16 rounded-full object-cover ring-2"
                  />
                  <div>
                    <div className="text-lg font-bold">{user.username}</div>
                    <div className="text-muted-foreground text-sm">{user.email}</div>
                  </div>
                </div>

                <dl className="grid gap-4 sm:grid-cols-2">
                  {personal.map(({ label, value }) => (
                    <div key={label} className="bg-muted/50 rounded-xl p-4">
                      <dt className="text-muted-foreground text-xs">{label}</dt>
                      <dd className="mt-0.5 font-bold">{value}</dd>
                    </div>
                  ))}
                </dl>

                <Button
                  variant="destructive"
                  className="mt-6 gap-2"
                  onClick={() => {
                    logout()
                    navigate("/")
                  }}
                >
                  <LogOut className="size-4" />
                  {t("profile.logout")}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications">
            <div className="mb-4 flex justify-end">
              <Button asChild className="gap-2">
                <Link to="/education-info">
                  <Plus className="size-4" />
                  {t("profile.createApp")}
                </Link>
              </Button>
            </div>

            {applications.length === 0 ? (
              <EmptyState title={t("profile.noApps")} />
            ) : (
              <div className="space-y-4">
                {applications.map((app) => {
                  const university = getUniversity(app.universityId)
                  const degree = getDegree(app.degreeId)
                  const semester = getSemester(app.semesterId)
                  const primary = getProgram(app.primaryProgramId)
                  const second = app.secondProgramId
                    ? getProgram(app.secondProgramId)
                    : undefined
                  const primaryLang = getStudyLanguage(app.primaryLanguageId)
                  const secondLang = app.secondLanguageId
                    ? getStudyLanguage(app.secondLanguageId)
                    : undefined

                  return (
                    <Card key={app.id} className="transition-shadow hover:shadow-md">
                      <CardContent className="space-y-4 p-6">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <h3 className="font-bold">
                              {university && localized(university.name)}
                            </h3>
                            <div className="text-muted-foreground mt-0.5 flex items-center gap-1.5 text-xs">
                              <CalendarDays className="size-3.5" />
                              {formatDate(app.submittedAt)}
                            </div>
                          </div>
                          <Badge className={statusVariant[app.status]}>
                            {t(`profile.status_${app.status}`, {
                              defaultValue: app.status,
                            })}
                          </Badge>
                        </div>

                        <div className="grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
                          <div className="bg-muted/50 rounded-lg p-3">
                            <div className="text-muted-foreground text-xs">
                              {t("profile.degree")}
                            </div>
                            <div className="font-bold">
                              {degree && localized(degree.name)}
                            </div>
                          </div>
                          <div className="bg-muted/50 rounded-lg p-3">
                            <div className="text-muted-foreground text-xs">
                              {t("profile.semester")}
                            </div>
                            <div className="font-bold">
                              {semester && localized(semester.name)}
                            </div>
                          </div>
                          <div className="bg-muted/50 rounded-lg p-3">
                            <div className="text-muted-foreground text-xs">
                              {t("profile.mainProgram")}
                            </div>
                            <div className="font-bold">
                              {primary && localized(primary.specialty.name)}
                              {primaryLang && (
                                <span className="text-muted-foreground font-normal">
                                  {" "}
                                  — {localized(primaryLang.name)}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="bg-muted/50 rounded-lg p-3">
                            <div className="text-muted-foreground text-xs">
                              {t("profile.secondProgram")}
                            </div>
                            <div className="font-bold">
                              {second ? localized(second.specialty.name) : "—"}
                              {secondLang && (
                                <span className="text-muted-foreground font-normal">
                                  {" "}
                                  — {localized(secondLang.name)}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {app.statusNotes && (
                          <p className="text-muted-foreground border-s-2 ps-3 text-sm">
                            {localized(app.statusNotes)}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </section>
    </>
  )
}
