import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import CTASection from "../components/CTASection";
import TrustCard from "../components/TrustCard";

const qualityPillars = [
  {
    title: "Controlled Sourcing",
    desc: "We source from defined regions and partners with known agricultural practices.",
  },
  {
    title: "Defined Processing Parameters",
    desc: "Processing is conducted to defined parameters through trusted manufacturing partners, ensuring repeatability.",
  },
  {
    title: "Batch-Level Consistency Focus",
    desc: "We track batch-level attributes to identify and resolve inconsistencies before they reach our buyers.",
  },
  {
    title: "Scalable B2B Supply Discipline",
    desc: "Our systems are designed to scale with buyer demand, without compromising on quality documentation or turnaround.",
  },
];

const trustCards = [
  {
    title: "Defined Processing Approach",
    desc: "Each ingredient is processed according to defined parameters — not improvised on a per-batch basis. This produces consistent output across orders.",
  },
  {
    title: "Consistency-Focused Supply",
    desc: "Our processes are designed to minimise variation between batches, giving buyers reliable parameters for their own formulation and quality work.",
  },
  {
    title: "Bulk Order Readiness",
    desc: "We structure our supply to accommodate bulk B2B volumes — with clear MOQs, defined pack sizes, and realistic lead time expectations.",
  },
  {
    title: "Process-Driven Mindset",
    desc: "Every stage of our supply chain follows a defined process rather than ad hoc decisions, creating accountability and traceability.",
  },
];

export default function LeadershipQuality() {
  useEffect(() => {
    document.title = "Leadership & Quality Approach — Bio Peri Posa Pvt. Ltd.";
    let meta = document.querySelector(
      "meta[name='description']",
    ) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Bio Peri Posa's leadership and quality approach: founded by Dr. Chiti Agarwal (PhD in Plant Pathology, WSA, USA). Built on science, designed for consistency.";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section
        className="pt-32 pb-20 px-4"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.960 0.012 95) 0%, oklch(0.978 0.005 85) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green mb-4">
            Leadership & Quality Approach
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-foreground leading-tight mb-5">
            Built on Science. Designed for Consistency.
          </h1>
          <p className="text-lg font-sans text-muted-foreground max-w-2xl leading-relaxed mb-8">
            Bio Peri Posa Pvt. Ltd. combines plant science expertise with a
            process-driven approach to deliver bulk herbal ingredients for
            serious B2B buyers.
          </p>
          <Link
            to="/bulk-orders"
            className="btn-primary"
            data-ocid="leadership.primary_button"
          >
            Request Bulk Quote <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green mb-4">
                Founder Leadership
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Founder Leadership
              </h2>
              <p className="text-base font-sans text-muted-foreground leading-relaxed">
                Bio Peri Posa Pvt. Ltd. is led by Dr. Chiti Agarwal (PhD in
                Plant Pathology, WSA, USA), with a background in plant
                pathology, biotechnology, and high-throughput production
                systems. With experience in scientific operations, process
                discipline, and quality-focused workflows, the company is built
                with a structured approach to bulk ingredient supply.
              </p>
            </div>
            <div
              className="rounded-2xl border shadow-card overflow-hidden"
              style={{
                backgroundColor: "oklch(0.96 0.008 145)",
                borderColor: "oklch(0.88 0.025 145)",
              }}
            >
              <div className="p-10 text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 text-2xl font-bold font-serif"
                  style={{
                    backgroundColor: "oklch(0.47 0.066 145)",
                    color: "white",
                  }}
                >
                  CA
                </div>
                <p className="font-serif text-2xl text-foreground mb-2">
                  Dr. Chiti Agarwal
                </p>
                <p
                  className="text-sm font-sans font-semibold mb-1"
                  style={{ color: "oklch(0.40 0.066 145)" }}
                >
                  PhD in Plant Pathology, WSA, USA
                </p>
                <p className="text-xs font-sans text-muted-foreground mt-1 mb-5">
                  Founder, Bio Peri Posa Pvt. Ltd.
                </p>
                <div
                  className="rounded-xl p-4 text-left space-y-2"
                  style={{ backgroundColor: "oklch(0.93 0.025 145)" }}
                >
                  <p
                    className="text-xs font-sans font-semibold uppercase tracking-widest"
                    style={{ color: "oklch(0.40 0.060 145)" }}
                  >
                    Expertise
                  </p>
                  <ul className="space-y-1 text-sm font-sans text-muted-foreground">
                    <li>→ Plant Pathology & Biotechnology</li>
                    <li>→ High-Throughput Production Systems</li>
                    <li>→ Quality-Focused Supply Operations</li>
                    <li>→ Botanical Ingredient Sourcing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green text-center mb-3">
            For Buyers
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12">
            Why This Matters to Buyers
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {trustCards.map((card, i) => (
              <TrustCard
                key={card.title}
                number={String(i + 1).padStart(2, "0")}
                title={card.title}
                description={card.desc}
                index={i + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance — Animated QC Scientist */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green mb-4">
                Quality Assurance
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Our Quality Assurance Standard
              </h2>
              <p className="text-base font-sans text-muted-foreground leading-relaxed mb-5">
                At Bio Peri Posa Pvt. Ltd., quality is not a marketing term — it
                is an operational discipline. Every batch is handled through
                defined processes, with documentation at each stage of sourcing,
                processing, and dispatch.
              </p>
              <p className="text-base font-sans text-muted-foreground leading-relaxed mb-5">
                Our quality approach is rooted in plant science expertise. Led
                by a PhD in Plant Pathology, WSA, USA, we apply scientific
                rigour to ingredient selection, partner evaluation, and
                batch-level consistency monitoring.
              </p>
              <p className="text-base font-sans text-muted-foreground leading-relaxed">
                We believe buyers deserve predictability — not just good
                intentions. That means defined parameters, traceable supply
                chains, and honest communication about what we can and cannot
                deliver.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/assets/generated/qc-scientist-transparent.dim_400x500.png"
                alt="Quality Control Scientist"
                className="w-64 mx-auto drop-shadow-lg"
                style={{ animation: "float 3s ease-in-out infinite" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Approach */}
      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green mb-4">
              Quality
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Our Quality Approach
            </h2>
            <p className="text-base font-sans text-muted-foreground leading-relaxed mb-10">
              We are building our business around structured quality thinking
              rather than generic supply claims.
            </p>
            <div className="space-y-6">
              {qualityPillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="flex gap-5 p-6 bg-card rounded-2xl border border-border shadow-xs"
                  data-ocid={`quality.item.${i + 1}`}
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
                    <h3 className="font-serif text-lg text-foreground mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section
        className="py-20 px-4 text-center"
        style={{ backgroundColor: "oklch(0.93 0.025 145)" }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green mb-4">
            Vision
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Long-Term Vision
          </h2>
          <p className="text-lg font-sans text-muted-foreground leading-relaxed mb-5">
            Our long-term vision is to build a zero-waste, high-efficiency plant
            processing ecosystem that transforms plant resources into high-value
            powders, extracts, oils, and sustainable materials for global
            markets.
          </p>
          <p
            className="text-sm font-sans font-medium"
            style={{ color: "oklch(0.40 0.055 145)" }}
          >
            We are building for durability, quality, and responsible growth.
          </p>
        </div>
      </section>

      <CTASection
        heading="Looking for a reliable bulk herbal ingredient partner?"
        subtext="Connect with us for product inquiries, bulk orders, and sourcing discussions."
        primaryLabel="Request Bulk Quote"
        primaryTo="/bulk-orders"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </div>
  );
}
