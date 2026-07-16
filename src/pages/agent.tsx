import { useState, type FormEvent } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { AuthShell } from "@/components/auth-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getCities, getCountries } from "@/data/api"
import { useLocalized } from "@/hooks/use-localized"

const initialForm = {
  businessName: "",
  licenseNo: "",
  yearsExperience: "",
  website: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phone: "",
  countryId: "",
  cityId: "",
}

export default function AgentPage() {
  const { t } = useTranslation("common")
  const localized = useLocalized()
  const navigate = useNavigate()
  const [form, setForm] = useState(initialForm)

  const set = (key: keyof typeof initialForm) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const required = [
      form.businessName,
      form.licenseNo,
      form.firstName,
      form.lastName,
      form.email,
      form.password,
      form.phone,
      form.countryId,
      form.cityId,
    ]
    if (required.some((v) => !v.trim())) {
      toast.error(t("agent.invalid"))
      return
    }
    toast.success(t("agent.success"))
    navigate("/")
  }

  const institutionFields = [
    { key: "businessName" as const, label: t("agent.institutionName") },
    { key: "licenseNo" as const, label: t("agent.licenceName") },
    { key: "yearsExperience" as const, label: t("agent.years") },
    { key: "website" as const, label: t("agent.website") },
  ]

  const accountFields = [
    { key: "firstName" as const, label: t("agent.fName") },
    { key: "lastName" as const, label: t("agent.lName") },
    { key: "email" as const, label: t("agent.email"), type: "email" },
    { key: "password" as const, label: t("agent.password"), type: "password" },
    { key: "phone" as const, label: t("agent.phone") },
  ]

  return (
    <AuthShell title={t("agent.title")} subtitle={t("agent.text")} wide>
      <form onSubmit={submit} className="space-y-5">
        <div>
          <h2 className="text-primary mb-3 text-sm font-bold uppercase">
            {t("agent.institution")}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {institutionFields.map(({ key, label }) => (
              <div key={key} className="space-y-1.5">
                <Label htmlFor={`agent-${key}`}>{label}</Label>
                <Input
                  id={`agent-${key}`}
                  value={form[key]}
                  onChange={(e) => set(key)(e.target.value)}
                />
              </div>
            ))}
            <div className="space-y-1.5">
              <Label htmlFor="agent-logo">{t("agent.logo")}</Label>
              <Input id="agent-logo" type="file" accept="image/*" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="agent-licence">{t("agent.licencePhoto")}</Label>
              <Input id="agent-licence" type="file" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-primary mb-3 text-sm font-bold uppercase">
            {t("agent.register")}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {accountFields.map(({ key, label, type }) => (
              <div key={key} className="space-y-1.5">
                <Label htmlFor={`agent-${key}`}>{label}</Label>
                <Input
                  id={`agent-${key}`}
                  type={type ?? "text"}
                  value={form[key]}
                  onChange={(e) => set(key)(e.target.value)}
                />
              </div>
            ))}
            <div className="space-y-1.5">
              <Label>{t("agent.country")}</Label>
              <Select
                value={form.countryId}
                onValueChange={(v) => {
                  set("countryId")(v)
                  set("cityId")("")
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {getCountries().map((country) => (
                    <SelectItem key={country.id} value={String(country.id)}>
                      {localized(country.name)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>{t("agent.city")}</Label>
              <Select value={form.cityId} onValueChange={set("cityId")}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {getCities(
                    form.countryId ? Number(form.countryId) : undefined
                  ).map((city) => (
                    <SelectItem key={city.id} value={String(city.id)}>
                      {localized(city.name)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <Button type="submit" size="lg" className="w-full">
          {t("agent.registerAgent")}
        </Button>
      </form>
    </AuthShell>
  )
}
