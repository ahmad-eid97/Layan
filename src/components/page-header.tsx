import type { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  subtitle?: string
  children?: ReactNode
}

export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="section-glow absolute inset-0" aria-hidden />
      <div className="bg-dots absolute inset-0 opacity-30" aria-hidden />
      <div className="relative container mx-auto px-4 py-12 text-center md:py-16">
        <h1 className="text-3xl font-extrabold text-balance md:text-4xl">{title}</h1>
        {subtitle && (
          <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-lg">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
