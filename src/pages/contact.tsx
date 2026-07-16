import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState, type FormEvent } from "react"
import { useTranslation } from "react-i18next"
import { toast } from "sonner"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const { t } = useTranslation("common")
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (Object.values(form).some((v) => !v.trim())) {
      toast.error(t("contact.required"))
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error(t("contact.emailInvalid"))
      return
    }
    setForm({ name: "", email: "", phone: "", subject: "", message: "" })
    toast.success(t("contact.success"))
  }

  const info = [
    { icon: Mail, label: t("contact.email"), value: "info@layanedu.com", href: "mailto:info@layanedu.com" },
    { icon: Phone, label: t("contact.phoneCall"), value: "+90 212 999 99 99", href: "tel:+902129999999" },
    { icon: MapPin, label: t("contact.address"), value: t("contact.addressValue", { defaultValue: "Istanbul, Turkey" }) },
  ]

  return (
    <>
      <PageHeader title={t("contact.contactWith")} subtitle={t("contact.text")} />

      <section className="container mx-auto grid gap-8 px-4 py-12 lg:grid-cols-[360px_1fr]">
        <Reveal>
          <Card className="h-full">
            <CardContent className="space-y-6 p-7">
              <h2 className="text-xl font-bold">{t("contact.info")}</h2>
              {info.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="bg-accent text-primary rounded-xl p-3">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        dir="ltr"
                        className="hover:text-primary font-bold transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="font-bold">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={120}>
          <Card>
            <CardContent className="p-7">
              <h2 className="mb-6 text-xl font-bold">{t("contact.contact")}</h2>
              <form onSubmit={submit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-name">{t("contact.name")}</Label>
                    <Input
                      id="contact-name"
                      value={form.name}
                      onChange={(e) => set("name")(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-email">{t("contact.email")}</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => set("email")(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-phone">{t("contact.phone")}</Label>
                    <Input
                      id="contact-phone"
                      value={form.phone}
                      onChange={(e) => set("phone")(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-subject">{t("contact.subject")}</Label>
                    <Input
                      id="contact-subject"
                      value={form.subject}
                      onChange={(e) => set("subject")(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contact-message">{t("contact.message")}</Label>
                  <Textarea
                    id="contact-message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => set("message")(e.target.value)}
                  />
                </div>
                <Button type="submit" size="lg" className="gap-2">
                  <Send className="size-4 rtl:-scale-x-100" />
                  {t("contact.send")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </Reveal>
      </section>
    </>
  )
}
