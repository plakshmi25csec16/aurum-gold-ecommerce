export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      {eyebrow && <span className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</span>}
      <h2 className="font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">{subtitle}</p>}
    </div>
  );
}
