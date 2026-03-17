import { Link } from "@tanstack/react-router";

interface CTASectionProps {
  heading: string;
  subtext?: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export default function CTASection({
  heading,
  subtext,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}: CTASectionProps) {
  return (
    <section
      className="py-20 px-4"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.47 0.066 145), oklch(0.40 0.070 145))",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          {heading}
        </h2>
        {subtext && (
          <p
            className="text-base font-sans mb-8"
            style={{ color: "oklch(0.88 0.025 145)" }}
          >
            {subtext}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={primaryTo}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-sans font-medium text-sm bg-white transition-all duration-200 hover:-translate-y-0.5"
            style={{ color: "oklch(0.47 0.066 145)" }}
            data-ocid="cta.primary_button"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryTo && (
            <Link
              to={secondaryTo}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-sans font-medium text-sm border-2 border-white text-white transition-all duration-200 hover:bg-white/10"
              data-ocid="cta.secondary_button"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
