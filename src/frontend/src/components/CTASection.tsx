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
          "linear-gradient(115deg, #b7ed85, #e8f9cf 55%, #fff3c9)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-[#17442f] mb-4">
          {heading}
        </h2>
        {subtext && (
          <p
            className="text-base font-sans mb-8"
            style={{ color: "#3d6844" }}
          >
            {subtext}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={primaryTo}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-sans font-medium text-sm bg-[#78c331] transition-all duration-200 hover:-translate-y-0.5"
            style={{ color: "#17442f" }}
            data-ocid="cta.primary_button"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryTo && (
            <Link
              to={secondaryTo}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-sans font-medium text-sm border-2 border-[#589f3c] text-[#17442f] transition-all duration-200 hover:bg-white/60"
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
