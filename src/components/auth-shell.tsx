import type { ReactNode } from "react"
import { Link } from "react-router"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AuthShellProps {
  title: string
  subtitle?: string
  children: ReactNode
  wide?: boolean
}

export function AuthShell({ title, subtitle, children, wide = false }: AuthShellProps) {
  return (
    <section className="relative -mt-16 overflow-hidden px-4 pt-30 pb-14">
      <div className="section-glow absolute inset-0" aria-hidden />
      <div className="bg-dots absolute inset-0 opacity-30" aria-hidden />

      <Card
        className={cn(
          "relative mx-auto w-full shadow-xl",
          wide ? "max-w-2xl" : "max-w-md"
        )}
      >
        <CardContent className="space-y-6 p-8">
          <div className="space-y-3 text-center">
            <Link to="/" className="inline-block">
              <img src="/assets/images/logo.png" alt="Layan" className="h-12 w-auto" />
            </Link>
            <h1 className="text-2xl font-extrabold text-balance">{title}</h1>
            {subtitle && <p className="text-muted-foreground text-sm">{subtitle}</p>}
          </div>
          {children}
        </CardContent>
      </Card>
    </section>
  )
}
