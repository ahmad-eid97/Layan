import {
  Cake,
  CalendarDays,
  FileText,
  Globe,
  LogOut,
  Mail,
  MapPin,
  Phone,
  Plus,
  User,
  UsersRound,
} from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link, useNavigate } from "react-router"
import { EmptyState } from "@/components/empty-state"
import { Reveal } from "@/components/reveal"
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

const statusAccent: Record<ApplicationStatus, string> = {
  pending: "border-s-amber-400",
  reviewing: "border-s-blue-400",
  accepted: "border-s-emerald-400",
  rejected: "border-s-red-400",
}

export default function ProfilePage() {
  const { t } = useTranslation("common")
  const localized = useLocalized()
  const formatDate = useFormattedDate()
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const applications = getApplications()

  if (!user) return null

  const acceptedCount = applications.filter((a) => a.status === "accepted").length
  const pendingCount = applications.filter(
    (a) => a.status === "pending" || a.status === "reviewing"
  ).length

  const stats = [
    { label: t("profile.applications"), value: applications.length },
    { label: t("profile.status_accepted"), value: acceptedCount },
    { label: t("profile.status_pending"), value: pendingCount },
  ]

  const personal = [
    { icon: User, label: t("profile.name"), value: user.username },
    { icon: Mail, label: t("profile.email"), value: user.email },
    { icon: Phone, label: t("profile.phone"), value: user.phone },
    { icon: Globe, label: t("profile.country"), value: user.country },
    { icon: MapPin, label: t("profile.city"), value: user.city },
    { icon: Cake, label: t("profile.birthdate"), value: user.birthDate },
    {
      icon: UsersRound,
      label: t("profile.gender"),
      value: user.gender
        ? t(`auth:register.${user.gender}`, { defaultValue: user.gender })
        : undefined,
    },
  ].filter((f) => f.value)

  return (
    <>
      <section className="relative overflow-hidden bg-[oklch(0.28_0.045_253)] text-white">
        <div
          className="bg-primary/30 absolute -top-24 -inset-s-24 size-72 rounded-full blur-3xl"
          aria-hidden
        />
        <div
          className="bg-secondary/25 absolute -bottom-24 -inset-e-24 size-72 rounded-full blur-3xl"
          aria-hidden
        />
        <div className="bg-dots absolute inset-0 opacity-20" aria-hidden />
        <div className="relative container mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <img
                src="/assets/images/user.jpg"
                alt=""
                className="ring-primary/60 size-20 rounded-2xl object-cover ring-2 md:size-24"
              />
              <div className="space-y-1">
                <div className="text-primary-foreground/60 text-xs font-bold tracking-widest uppercase">
                  {t("profile.myAccount")}
                </div>
                <h1 className="text-2xl font-extrabold md:text-3xl">
                  {user.username}
                </h1>
                <div className="flex items-center gap-1.5 text-sm text-white/70">
                  <Mail className="size-3.5" />
                  {user.email}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-center backdrop-blur"
                >
                  <div className="text-2xl font-extrabold tabular-nums">
                    {value}
                  </div>
                  <div className="text-xs text-white/70">{label}</div>
                </div>
              ))}
              <Button
                variant="outline"
                className="gap-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                onClick={() => {
                  logout()
                  navigate("/")
                }}
              >
                <LogOut className="size-4" />
                {t("profile.logout")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-4 py-10">
        <Tabs defaultValue="personal">
          <TabsList className="mx-auto mb-6">
            <TabsTrigger value="personal" className="gap-2 px-4">
              <User className="size-4" />
              {t("profile.personal")}
            </TabsTrigger>
            <TabsTrigger value="applications" className="gap-2 px-4">
              <FileText className="size-4" />
              {t("profile.applications")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {personal.map(({ icon: Icon, label, value }) => (
                  <Card key={label} className="transition-shadow hover:shadow-md">
                    <CardContent className="flex items-center gap-4 p-5">
                      <div className="bg-accent text-primary rounded-xl p-3">
                        <Icon className="size-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-muted-foreground text-xs">
                          {label}
                        </div>
                        <div className="truncate font-bold">{value}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Reveal>
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
                {applications.map((app, i) => {
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
                    <Reveal key={app.id} delay={i * 80}>
                      <Card
                        className={`border-s-4 transition-shadow hover:shadow-md ${statusAccent[app.status]}`}
                      >
                        <CardContent className="space-y-4 p-6">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              {university && (
                                <img
                                  src={university.logo}
                                  alt=""
                                  className="bg-muted size-12 rounded-xl object-contain p-1.5"
                                />
                              )}
                              <div>
                                <h3 className="font-bold">
                                  {university && localized(university.name)}
                                </h3>
                                <div className="text-muted-foreground mt-0.5 flex items-center gap-1.5 text-xs">
                                  <CalendarDays className="size-3.5" />
                                  {formatDate(app.submittedAt)}
                                </div>
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
                    </Reveal>
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
