import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "start" | "center"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-start",
        className
      )}
    >
      {eyebrow && (
        <span className="text-primary mb-2 block text-sm font-bold tracking-wide uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-extrabold text-balance md:text-4xl">{title}</h2>
      {subtitle && <p className="text-muted-foreground mt-3 text-lg">{subtitle}</p>}
    </div>
  )
}
