import { useState, type FormEvent } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { toast } from "sonner"
import { AuthShell } from "@/components/auth-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/context/auth-context"

export default function LoginPage() {
  const { t } = useTranslation("auth")
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      toast.error(t("register.required"))
      return
    }
    await login(email.trim(), password)
  }

  return (
    <AuthShell title={t("login.loginTo")} subtitle={t("login.demoHint")}>
      <form onSubmit={submit} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="login-email">{t("login.email")}</Label>
          <Input
            id="login-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="login-password">{t("login.password")}</Label>
          <Input
            id="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <Button type="submit" size="lg" className="w-full">
          {t("login.login")}
        </Button>
      </form>
      <p className="text-muted-foreground text-center text-sm">
        {t("login.noAccount")}{" "}
        <Link to="/register" className="text-primary font-bold hover:underline">
          {t("register.register")}
        </Link>
      </p>
    </AuthShell>
  )
}
