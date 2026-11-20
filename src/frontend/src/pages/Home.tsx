import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  FlaskConical,
  Leaf,
} from "lucide-react";
import { useEffect } from "react";
import CTASection from "../components/CTASection";

const products = [
  {name:"Moringa Leaf",desc:"सहजन पत्ती — finely milled botanical leaf powder."},
  {name:"Ashwagandha Root",desc:"अश्वगंधा जड़ — powdered botanical root."},
];

const whyPoints = [
  {
    title: "Science-Led Sourcing",
    desc: "Ingredients selected based on plant science knowledge, defined botanical profiles, and documented growing conditions.",
  },
  {
    title: "Consistency Mindset",
    desc: "Processes standardised so repeat orders reflect predictable quality parameters — not just 'similar to last time'.",
  },
  {
    title: "Founder Responsiveness",
    desc: "Founder-led business means direct communication, faster decisions, and full accountability at every touchpoint.",
  },
  {
    title: "Long-Term Partnership",
    desc: "Built for durable supply relationships with buyers who value quality and consistency over transactional interactions.",
  },
];

const categories = [
  {
    icon: <Leaf size={22} />,
    name: "Herbal Powders",
    desc: "Our current focus. Our current range: moringa leaf powder and ashwagandha root powder.",
    status: "Active",
    active: true,
  },
  {
    icon: <FlaskConical size={22} />,
    name: "Botanical Oils",
    desc: "High-value plant-derived oils for cosmetic, nutraceutical, and functional formulations.",
    status: "Coming Soon",
    active: false,
  },
  {
    icon: <FileText size={22} />,
    name: "Eco-Friendly Paper Products",
    desc: "Low-waste plant-based paper and packaging materials for sustainable manufacturing.",
    status: "Coming Soon",
    active: false,
  },
];

const scienceBullets = [
  "Sourcing guided by plant pathology and biotechnology knowledge",
  "Processing conducted through trusted partners with defined parameters",
  "Focus on batch-level consistency rather than ad hoc supply",
];

export default function Home() {
  useEffect(() => {
    document.title = "Bio Peri Posa Pvt. Ltd. — Bulk Herbal Powders, India";
    let meta = document.querySelector(
      "meta[name='description']",
    ) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Bio Peri Posa Pvt. Ltd. offers moringa leaf and ashwagandha root powders for individuals and business buyers. Science-led sourcing from India.";
  }, []);

  return (
    <div>
      {/* Hero: full-width image above the introduction */}
      <section className="pt-20 bg-brand-cream">
        <img src="/assets/generated/hero-herbal-flatlay.dim_800x600.jpg" alt="A collection of botanical ingredients and herbal powders" className="w-full h-[46vh] sm:h-[62vh] lg:h-[75vh] object-cover" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <p className="text-sm font-semibold text-brand-green mb-4">Bio Periposa Private Limited</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Botanical Ingredients, Clearly Explained</h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-5">
            Bio Periposa brings carefully sourced botanical ingredients into everyday life. Beginning with moringa leaf and ashwagandha root powders, our collection is designed for individuals and businesses who value clear product information and thoughtful sourcing.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            Guided by a background in plant science, biotechnology and quality-focused operations, we believe customers should be able to understand what they are buying and find information about the quality of their product.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/products" className="btn-primary">Explore Products <ArrowRight size={16} className="ml-2" /></Link>
            <a href="https://wa.me/919810859162" target="_blank" rel="noopener noreferrer" className="btn-secondary">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green text-center mb-3">
            Product Lines
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12">
            Current & Upcoming Categories
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="bg-card rounded-2xl p-7 shadow-card border border-border hover:shadow-card-hover transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-brand-green"
                  style={{ backgroundColor: "oklch(0.93 0.025 145)" }}
                >
                  {cat.icon}
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-serif text-xl text-foreground">
                    {cat.name}
                  </h3>
                  <span
                    className="text-xs font-sans font-semibold px-2.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: cat.active
                        ? "oklch(0.93 0.025 145)"
                        : "oklch(0.95 0.004 95)",
                      color: cat.active
                        ? "oklch(0.40 0.060 145)"
                        : "oklch(0.50 0 0)",
                    }}
                  >
                    {cat.status}
                  </span>
                </div>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science-Led Approach */}
      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="/assets/generated/about-ingredient-jars.dim_800x600.jpg"
                alt="Bio Peri Posa ingredient jars and lab setting"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green mb-4">
                Our Foundation
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                A Science-Led Approach to Bulk Herbal Supply
              </h2>
              <p className="text-base font-sans text-muted-foreground leading-relaxed mb-7">
                Bio Peri Posa was built on plant science expertise, not just
                supply convenience. Every ingredient decision is grounded in
                botanical knowledge, defined sourcing parameters, and a
                commitment to process discipline.
              </p>
              <ul className="space-y-4">
                {scienceBullets.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-brand-green"
                    />
                    <span className="text-sm font-sans text-muted-foreground">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green text-center mb-3">
            Differentiation
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12">
            Why Work With Bio Peri Posa Pvt. Ltd.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whyPoints.map((point, i) => (
              <div
                key={point.title}
                className="flex gap-5 p-6 bg-card rounded-2xl border border-border shadow-xs hover:shadow-card transition-all duration-300"
                data-ocid={`why.item.${i + 1}`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0"
                  style={{
                    backgroundColor: "oklch(0.93 0.025 145)",
                    color: "oklch(0.47 0.066 145)",
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Focus */}
      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green text-center mb-3">
            Current Range
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-4">
            Current Product Focus
          </h2>
          <p className="text-base font-sans text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Seven herbal powders available for bulk B2B supply. Minimum 25 kg
            per SKU.
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
            {products.map((p) => (
              <div
                key={p.name}
                className="bg-card rounded-xl p-4 shadow-xs border border-border text-center hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: "oklch(0.93 0.025 145)" }}
                >
                  <Leaf size={14} className="text-brand-green" />
                </div>
                <h4 className="font-sans text-sm font-semibold text-foreground mb-1">
                  {p.name}
                </h4>
                <p className="text-xs font-sans text-muted-foreground leading-tight">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="btn-primary"
              data-ocid="focus.primary_button"
            >
              View All Products <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Ready to discuss bulk requirements? Let's talk."
        subtext="We work with B2B buyers, importers, nutraceutical companies, and private label brands."
        primaryLabel="Request Bulk Inquiry"
        primaryTo="/bulk-orders"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </div>
  );
}
