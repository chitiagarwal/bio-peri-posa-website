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
  {
    name: "Moringa",
    desc: "High-protein leaf powder for nutraceuticals and functional foods.",
  },
  {
    name: "Amla",
    desc: "Whole Indian gooseberry powder for wellness and vitamin-C formulations.",
  },
  {
    name: "Ashwagandha",
    desc: "Adaptogen root powder for sports nutrition and health supplements.",
  },
  {
    name: "Tulsi",
    desc: "Whole-leaf powder for herbal teas and functional wellness blends.",
  },
  {
    name: "Aloe Vera",
    desc: "Spray-dried powder for cosmetics and digestive health products.",
  },
  {
    name: "Ker",
    desc: "Dried powder from Rajasthan. Specialty food and health formulations.",
  },
  {
    name: "Neem",
    desc: "Whole-leaf powder for Ayurvedic formulations, oral care, and nutraceuticals.",
  },
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
    desc: "Our current focus. Bulk supply of Moringa, Amla, Tulsi, Aloe Vera, Ker, Ashwagandha, and Neem.",
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
      "Bio Peri Posa Pvt. Ltd. supplies seven bulk herbal powders including Moringa, Amla, Ashwagandha, Tulsi, Aloe Vera, Ker, and Neem to B2B buyers. Science-led sourcing from India.";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section
        className="min-h-[88vh] flex items-center pt-16"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.970 0.008 95) 0%, oklch(0.980 0.004 85) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-sans font-semibold uppercase tracking-[0.18em] text-brand-green mb-6">
                B2B Bulk Herbal Ingredient Supply | India
              </p>
              <h1 className="font-serif text-5xl lg:text-6xl text-foreground leading-[1.08] mb-5">
                Bulk Herbal Powders for B2B and B2C Buyers
              </h1>
              <h2 className="font-serif text-2xl lg:text-3xl text-muted-foreground leading-snug mb-6">
                Sourced in India. Supplied with Consistency.
              </h2>
              <p className="text-base font-sans text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Led by a PhD in Plant Pathology, WSA, USA with expertise in
                production systems and quality-focused operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="btn-primary"
                  data-ocid="home.primary_button"
                >
                  Explore Products <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link
                  to="/bulk-orders"
                  className="btn-secondary"
                  data-ocid="home.secondary_button"
                >
                  Request Bulk Inquiry
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src="/assets/generated/hero-herbal-flatlay.dim_800x600.jpg"
                  alt="Bio Peri Posa herbal powder collection"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              <div
                className="absolute -bottom-4 -left-4 rounded-xl px-5 py-4 shadow-card bg-card"
                style={{ border: "1px solid oklch(0.93 0.025 145)" }}
              >
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green mb-0.5">
                  MOQ
                </p>
                <p className="font-serif text-lg text-foreground">
                  25 kg per SKU
                </p>
              </div>
            </div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
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
