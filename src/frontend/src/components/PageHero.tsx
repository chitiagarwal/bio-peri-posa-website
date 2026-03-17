interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: PageHeroProps) {
  return (
    <section
      className="pt-28 pb-16 px-4"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.965 0.010 95), oklch(0.975 0.006 95))",
      }}
    >
      <div className="max-w-4xl mx-auto">
        {eyebrow && (
          <p className="text-sm font-sans font-medium uppercase tracking-widest text-brand-green mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg font-sans text-muted-foreground max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
