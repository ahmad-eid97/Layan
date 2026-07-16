export function EmptyState({ title }: { title: string }) {
  return (
    <div className="py-16 text-center">
      <img
        src="/assets/images/emptyUniversities.png"
        alt=""
        className="mx-auto mb-6 h-40 w-auto opacity-80"
      />
      <p className="text-muted-foreground text-lg font-medium">{title}</p>
    </div>
  )
}
