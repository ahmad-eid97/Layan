import { GraduationCap, LogOut, Menu, User } from "lucide-react"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, NavLink, useNavigate } from "react-router"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useAuth } from "@/context/auth-context"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { t } = useTranslation("nav")
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const items = [
    { to: "/all-universities", label: t("nav.universities") },
    { to: "/programs", label: t("nav.programs") },
    { to: "/services", label: t("nav.services") },
    { to: "/education", label: t("nav.studySteps") },
    { to: "/blogs", label: t("nav.blogs") },
    { to: "/news", label: t("nav.news") },
    { to: "/about-us", label: t("nav.who") },
    { to: "/contact-us", label: t("nav.contactUs") },
  ]

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "hover:text-primary text-sm font-medium transition-colors",
      isActive ? "text-primary font-bold" : "text-foreground/80"
    )

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-all",
        scrolled
          ? "bg-background/95 supports-backdrop-filter:bg-background/80 border-border shadow-sm backdrop-blur"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <Link to="/" className="shrink-0">
          <img src="/assets/images/logo.png" alt="Layan" className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {items.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <User className="size-4" />
                  <span className="hidden sm:inline">{user.username}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  <User className="size-4" />
                  {t("nav.profile")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/education-info")}>
                  <GraduationCap className="size-4" />
                  {t("nav.chooseProgram")}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive" onClick={logout}>
                  <LogOut className="size-4" />
                  {t("nav.logout", { defaultValue: "Logout" })}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
                <Link to="/login">{t("nav.login")}</Link>
              </Button>
              <Button asChild size="sm">
                <Link to="/register">{t("nav.registerNow")}</Link>
              </Button>
            </>
          )}

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="xl:hidden" aria-label="Menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-72">
              <SheetHeader>
                <SheetTitle>
                  <img src="/assets/images/logo.png" alt="Layan" className="h-10 w-auto" />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {items.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "hover:bg-accent rounded-md px-3 py-2 text-sm font-medium",
                        isActive && "text-primary font-bold"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                {!user && (
                  <NavLink
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="hover:bg-accent rounded-md px-3 py-2 text-sm font-medium sm:hidden"
                  >
                    {t("nav.login")}
                  </NavLink>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
