import { useEffect } from "react";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import TrustCard from "../components/TrustCard";

const trustPillars = [
  {
    title: "Science-Led Sourcing",
    desc: "Our sourcing decisions are guided by plant science knowledge, not just availability. We prioritise ingredients with defined botanical profiles and documented growing conditions.",
  },
  {
    title: "Consistency Mindset",
    desc: "We work to standardise our supply processes so that repeat orders reflect predictable quality parameters — not just 'similar to last time'.",
  },
  {
    title: "Founder-Driven Responsiveness",
    desc: "Bio Peri Posa Pvt. Ltd. is founder-led. This means direct communication, faster decisions, and accountability at every touchpoint.",
  },
  {
    title: "Long-Term Partnership Approach",
    desc: "We are not optimised for one-time transactions. Our goal is to build durable supply relationships with buyers who value quality and consistency.",
  },
  {
    title: "Practical Bulk Supply Support",
    desc: "We understand bulk buyer needs: MOQs, pack formats, documentation requirements, and timelines. We work practically to meet your sourcing workflow.",
  },
  {
    title: "Process-Focused Operations",
    desc: "All ingredients are processed through trusted partners with defined processing parameters, not ad hoc contract work.",
  },
];

export default function WhyChooseUs() {
  useEffect(() => {
    document.title = "Why Choose Us — Bio Peri Posa Pvt. Ltd.";
    let meta = document.querySelector(
      "meta[name='description']",
    ) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Six reasons serious B2B buyers choose Bio Peri Posa Pvt. Ltd. for bulk herbal ingredient supply: science-led sourcing, consistency, founder responsiveness, and more.";
  }, []);

  return (
    <div>
      <PageHero
        eyebrow="Why Choose Us"
        title="Why Choose Bio Peri Posa Pvt. Ltd."
        subtitle="Six reasons serious B2B buyers work with us."
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPillars.map((pillar, i) => (
              <TrustCard
                key={pillar.title}
                number={String(i + 1).padStart(2, "0")}
                title={pillar.title}
                description={pillar.desc}
                index={i + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Quality Standard */}
      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center items-center order-last lg:order-first">
              <img
                src="/assets/generated/qc-scientist-transparent.dim_400x500.png"
                alt="Quality Control Scientist"
                className="w-64 mx-auto drop-shadow-xl"
                style={{ animation: "float 3s ease-in-out infinite" }}
              />
            </div>
            <div>
              <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green mb-4">
                Quality Standard
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Quality You Can Rely On
              </h2>
              <ul className="space-y-5">
                <li className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm"
                    style={{
                      backgroundColor: "oklch(0.47 0.066 145)",
                      color: "white",
                    }}
                  >
                    01
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">
                      Consistent Quality, Every Batch
                    </h3>
                    <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                      Our structured sourcing and processing workflows ensure
                      each batch meets defined quality parameters — so your
                      formulations remain predictable and reliable.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm"
                    style={{
                      backgroundColor: "oklch(0.47 0.066 145)",
                      color: "white",
                    }}
                  >
                    02
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">
                      Scientific Rigour in Every Decision
                    </h3>
                    <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                      Led by a PhD in Plant Pathology, WSA, USA, our ingredient
                      decisions are grounded in science — not just procurement
                      convenience.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm"
                    style={{
                      backgroundColor: "oklch(0.47 0.066 145)",
                      color: "white",
                    }}
                  >
                    03
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">
                      Transparent, Traceable Supply
                    </h3>
                    <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                      We maintain traceability at every stage — from origin to
                      dispatch. You get transparency, not just assurances.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Work with a supplier that takes quality seriously."
        subtext="Connect with us to discuss bulk requirements, product sampling, or long-term supply arrangements."
        primaryLabel="Request Bulk Inquiry"
        primaryTo="/bulk-orders"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </div>
  );
}
