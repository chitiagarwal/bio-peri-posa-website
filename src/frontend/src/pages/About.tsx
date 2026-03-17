import { FlaskConical, Leaf, Target } from "lucide-react";
import { useEffect } from "react";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";

const philosophyItems = [
  {
    icon: <Leaf size={22} />,
    title: "Low-Waste Thinking",
    desc: "We design our supply model to minimise waste at every stage — from sourcing and processing to packaging and distribution. Efficiency is not just economic; it is a responsibility.",
  },
  {
    icon: <FlaskConical size={22} />,
    title: "Plant Value Focus",
    desc: "Every ingredient we supply carries inherent plant value. Our role is to preserve and deliver that value intact — through careful processing, consistent handling, and appropriate storage parameters.",
  },
  {
    icon: <Target size={22} />,
    title: "Science-Driven Operations",
    desc: "Decisions are made based on evidence, not convention. From botanical selection to processing method, science informs how we build our supply chain and evaluate our outcomes.",
  },
];

export default function About() {
  useEffect(() => {
    document.title = "About — Bio Peri Posa Pvt. Ltd.";
    let meta = document.querySelector(
      "meta[name='description']",
    ) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Learn about Bio Peri Posa Pvt. Ltd., a science-led bulk herbal ingredient company based in India, founded by Dr. Chiti Agarwal (PhD in Plant Pathology, WSA, USA).";
  }, []);

  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="About Bio Peri Posa Pvt. Ltd."
        subtitle="A science-led ingredient company built for serious B2B buyers."
      />

      {/* Brand Vision */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green mb-4">
                Vision
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Built to be a Reliable Ingredient Partner
              </h2>
              <p className="text-base font-sans text-muted-foreground leading-relaxed mb-5">
                Bio Peri Posa Pvt. Ltd. was established to address a specific
                gap in the bulk herbal ingredient market: the need for
                scientifically informed, process-disciplined supply at
                commercially viable scale.
              </p>
              <p className="text-base font-sans text-muted-foreground leading-relaxed">
                Our vision is to become a trusted, long-term ingredient partner
                for B2B buyers globally — built on the credibility of plant
                science, the discipline of consistent operations, and an honest
                approach to supplier relationships.
              </p>
            </div>
            <div>
              <img
                src="/assets/generated/about-ingredient-jars.dim_800x600.jpg"
                alt="Bio Peri Posa ingredient jars"
                className="w-full rounded-2xl object-cover h-56 mb-6"
              />
              <div
                className="rounded-2xl p-8 border"
                style={{
                  backgroundColor: "oklch(0.96 0.008 145)",
                  borderColor: "oklch(0.88 0.025 145)",
                }}
              >
                <Target size={32} className="text-brand-green mb-5" />
                <h3 className="font-serif text-2xl text-foreground mb-4">
                  Our Core Commitment
                </h3>
                <ul className="space-y-3 text-sm font-sans text-muted-foreground">
                  <li className="flex gap-2">
                    → Supply seven bulk herbal ingredients — Moringa, Amla,
                    Tulsi, Aloe Vera, Ker, Ashwagandha, and Neem — with defined
                    quality parameters
                  </li>
                  <li className="flex gap-2">
                    → Maintain consistency across repeat orders
                  </li>
                  <li className="flex gap-2">
                    → Build durable relationships, not transactional supply
                    contracts
                  </li>
                  <li className="flex gap-2">
                    → Expand responsibly into botanical oils and eco-friendly
                    materials
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green mb-4">
              Leadership
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Founder Background
            </h2>
            <p className="text-base font-sans text-muted-foreground leading-relaxed mb-5">
              Bio Peri Posa Pvt. Ltd. is led by Dr. Chiti Agarwal (PhD in Plant
              Pathology, WSA, USA), with a background in plant pathology,
              biotechnology, and production systems. Her work spans scientific
              research, process design, and quality-oriented operations.
            </p>
            <p className="text-base font-sans text-muted-foreground leading-relaxed">
              The company is built on the principle that ingredient supply
              should be grounded in scientific understanding — not just
              procurement convenience. This means informed sourcing decisions,
              structured processing, and a commitment to consistency that goes
              beyond standard bulk supply norms.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green text-center mb-3">
            Philosophy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12">
            How We Think About Our Work
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {philosophyItems.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-7 border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-brand-green"
                  style={{ backgroundColor: "oklch(0.93 0.025 145)" }}
                >
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Want to learn more about our approach?"
        subtext="Connect with us to discuss how Bio Peri Posa Pvt. Ltd. can support your sourcing needs."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="View Products"
        secondaryTo="/products"
      />
    </div>
  );
}
