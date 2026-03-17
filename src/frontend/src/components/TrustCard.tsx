interface TrustCardProps {
  number: string;
  title: string;
  description: string;
  index?: number;
}

export default function TrustCard({
  number,
  title,
  description,
  index = 1,
}: TrustCardProps) {
  return (
    <div
      className="bg-card rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
      data-ocid={`trust.item.${index}`}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold mb-5"
        style={{
          backgroundColor: "oklch(0.93 0.025 145)",
          color: "oklch(0.47 0.066 145)",
        }}
      >
        {number}
      </div>
      <h3 className="font-serif text-xl text-foreground mb-3">{title}</h3>
      <p className="text-sm font-sans text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
