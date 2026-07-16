import { useState, type FormEvent } from "react"
import { useTranslation } from "react-i18next"
import { toast } from "sonner"
import { AuthShell } from "@/components/auth-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useAuth } from "@/context/auth-context"
import { getCities, getCountries } from "@/data/api"
import { useLocalized } from "@/hooks/use-localized"

const initialForm = {
  firstName: "",
  lastName: "",
  fatherName: "",
  motherName: "",
  birthDate: "",
  passportNo: "",
  gender: "male",
  email: "",
  phone: "",
  password: "",
  countryId: "",
  cityId: "",
}

export default function AdminRegisterPage() {
  const { t } = useTranslation(["auth", "common"])
  const localized = useLocalized()
  const { register } = useAuth()
  const [form, setForm] = useState(initialForm)

  const set = (key: keyof typeof initialForm) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    const required = [
      form.firstName,
      form.lastName,
      form.birthDate,
      form.passportNo,
      form.email,
      form.phone,
      form.password,
      form.countryId,
      form.cityId,
    ]
    if (required.some((v) => !v.trim())) {
      toast.error(t("auth:register.required"))
      return
    }
    const country = getCountries().find((c) => c.id === Number(form.countryId))
    const city = getCities().find((c) => c.id === Number(form.cityId))
    await register({
      username: `${form.firstName.trim()} ${form.lastName.trim()}`,
      email: form.email.trim(),
      phone: form.phone.trim(),
      birthDate: form.birthDate,
      gender: form.gender,
      country: country && localized(country.name),
      city: city && localized(city.name),
      password: form.password,
    })
    toast.success(t("common:home.sendSuccess"))
  }

  const personalFields = [
    { key: "firstName" as const, label: t("auth:register.fName") },
    { key: "lastName" as const, label: t("auth:register.lName") },
    { key: "fatherName" as const, label: t("auth:register.fatherName") },
    { key: "motherName" as const, label: t("auth:register.motherName") },
    { key: "passportNo" as const, label: t("auth:register.passportNo") },
  ]

  return (
    <AuthShell title={t("auth:register.title")} wide>
      <form onSubmit={submit} className="space-y-5">
        <div>
          <h2 className="text-primary mb-3 text-sm font-bold uppercase">
            {t("auth:register.personal")}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {personalFields.map(({ key, label }) => (
              <div key={key} className="space-y-1.5">
                <Label htmlFor={`admin-${key}`}>{label}</Label>
                <Input
                  id={`admin-${key}`}
                  value={form[key]}
                  onChange={(e) => set(key)(e.target.value)}
                />
              </div>
            ))}
            <div className="space-y-1.5">
              <Label htmlFor="admin-birthDate">{t("auth:register.birthDate")}</Label>
              <Input
                id="admin-birthDate"
                type="date"
                value={form.birthDate}
                onChange={(e) => set("birthDate")(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4 space-y-1.5">
            <Label>{t("auth:register.gender")}</Label>
            <RadioGroup
              value={form.gender}
              onValueChange={set("gender")}
              className="flex gap-6"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="male" id="gender-male" />
                <Label htmlFor="gender-male">{t("auth:register.male")}</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="female" id="gender-female" />
                <Label htmlFor="gender-female">{t("auth:register.female")}</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div>
          <h2 className="text-primary mb-3 text-sm font-bold uppercase">
            {t("auth:register.accountInfo")}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="admin-email">{t("auth:register.email")}</Label>
              <Input
                id="admin-email"
                type="email"
                value={form.email}
                onChange={(e) => set("email")(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="admin-phone">{t("auth:register.phone")}</Label>
              <Input
                id="admin-phone"
                value={form.phone}
                onChange={(e) => set("phone")(e.target.value)}
              />
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="admin-password">{t("auth:register.password")}</Label>
              <Input
                id="admin-password"
                type="password"
                value={form.password}
                onChange={(e) => set("password")(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-primary mb-3 text-sm font-bold uppercase">
            {t("auth:register.generalInfo")}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label>{t("auth:register.country")}</Label>
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
              <Label>{t("auth:register.city")}</Label>
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
          {t("auth:register.registerNew")}
        </Button>
      </form>
    </AuthShell>
  )
}
