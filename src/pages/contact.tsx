import { Clock, Mail, MapPin, Phone, Send } from "lucide-react"
import { useState, type FormEvent } from "react"
import { useTranslation } from "react-i18next"
import { toast } from "sonner"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/reveal"
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/social-icons"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const socials = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: XIcon, label: "X", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: YoutubeIcon, label: "YouTube", href: "#" },
]

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
    {
      icon: Mail,
      label: t("contact.email"),
      value: "info@layanedu.com",
      href: "mailto:info@layanedu.com",
    },
    {
      icon: Phone,
      label: t("contact.phoneCall"),
      value: "+90 212 999 99 99",
      href: "tel:+902129999999",
    },
    { icon: MapPin, label: t("contact.address"), value: t("contact.addressValue") },
    { icon: Clock, label: t("contact.hours"), value: t("contact.hoursValue") },
  ]

  return (
    <>
      <PageHeader title={t("contact.contactWith")} subtitle={t("contact.text")} />

      <section className="container mx-auto px-4 py-12">
        <Reveal>
          <Card className="overflow-hidden py-0 shadow-xl">
            <div className="grid lg:grid-cols-[380px_1fr]">
              <div className="relative overflow-hidden bg-[oklch(0.28_0.045_253)] p-8 text-white">
                <div
                  className="bg-primary/30 absolute -top-20 -inset-e-20 size-56 rounded-full blur-3xl"
                  aria-hidden
                />
                <div
                  className="bg-secondary/25 absolute -bottom-20 -inset-s-20 size-56 rounded-full blur-3xl"
                  aria-hidden
                />
                <div className="relative flex h-full flex-col gap-8">
                  <div>
                    <h2 className="text-xl font-extrabold">{t("contact.info")}</h2>
                    <p className="mt-1 text-sm text-white/60">
                      {t("contact.details")}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {info.map(({ icon: Icon, label, value, href }) => (
                      <div key={label} className="flex items-start gap-4">
                        <div className="rounded-xl bg-white/10 p-2.5">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <div className="text-xs text-white/60">{label}</div>
                          {href ? (
                            <a
                              href={href}
                              dir="ltr"
                              className="hover:text-secondary font-bold transition-colors"
                            >
                              {value}
                            </a>
                          ) : (
                            <div className="font-bold">{value}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="mb-3 text-xs text-white/60">
                      {t("contact.follow")}
                    </div>
                    <div className="flex gap-2">
                      {socials.map(({ icon: Icon, label, href }) => (
                        <a
                          key={label}
                          href={href}
                          aria-label={label}
                          className="hover:bg-primary rounded-full bg-white/10 p-2.5 transition-colors"
                        >
                          <Icon className="size-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h2 className="mb-6 text-xl font-extrabold">
                  {t("contact.contact")}
                </h2>
                <form onSubmit={submit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
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
                      rows={6}
                      value={form.message}
                      onChange={(e) => set("message")(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" size="lg" className="gap-2 px-8">
                      <Send className="size-4 rtl:-scale-x-100" />
                      {t("contact.send")}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-8 overflow-hidden rounded-2xl border shadow-sm">
            <iframe
              title="Layan office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.79383473547!2d28.871754024672436!3d41.005495858211985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1sen!2str!4v1700000000000"
              className="h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>
    </>
  )
}
