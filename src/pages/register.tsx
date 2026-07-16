import { useState, type FormEvent } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
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
import { useAuth } from "@/context/auth-context"
import { getCities, getCountries } from "@/data/api"
import { useLocalized } from "@/hooks/use-localized"

export default function RegisterPage() {
  const { t } = useTranslation(["auth", "common"])
  const localized = useLocalized()
  const { register } = useAuth()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [countryId, setCountryId] = useState("")
  const [cityId, setCityId] = useState("")

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (!username.trim() || !email.trim() || !phone.trim() || !password || !countryId || !cityId) {
      toast.error(t("auth:register.required"))
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error(t("common:home.errorEmail"))
      return
    }
    const country = getCountries().find((c) => c.id === Number(countryId))
    const city = getCities().find((c) => c.id === Number(cityId))
    await register({
      username: username.trim(),
      email: email.trim(),
      phone: phone.trim(),
      country: country && localized(country.name),
      city: city && localized(city.name),
      password,
    })
    toast.success(t("common:home.sendSuccess"))
  }

  return (
    <AuthShell title={t("auth:register.title")} wide>
      <form onSubmit={submit} className="space-y-5">
        <div>
          <h2 className="text-primary mb-3 text-sm font-bold uppercase">
            {t("auth:register.accountInfo")}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="reg-username">{t("auth:register.name")}</Label>
              <Input
                id="reg-username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="reg-email">{t("auth:register.email")}</Label>
              <Input
                id="reg-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="reg-phone">{t("auth:register.phone")}</Label>
              <Input
                id="reg-phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="reg-password">{t("auth:register.password")}</Label>
              <Input
                id="reg-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
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
                value={countryId}
                onValueChange={(v) => {
                  setCountryId(v)
                  setCityId("")
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
              <Select value={cityId} onValueChange={setCityId}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {getCities(countryId ? Number(countryId) : undefined).map(
                    (city) => (
                      <SelectItem key={city.id} value={String(city.id)}>
                        {localized(city.name)}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <Button type="submit" size="lg" className="w-full">
          {t("auth:register.registerNew")}
        </Button>
      </form>
      <p className="text-muted-foreground text-center text-sm">
        {t("auth:register.haveAccount")}{" "}
        <Link to="/login" className="text-primary font-bold hover:underline">
          {t("auth:login.login")}
        </Link>
      </p>
    </AuthShell>
  )
}
