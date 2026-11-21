import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useEffect } from "react";
import CTASection from "../components/CTASection";
import { approvedImages } from "../data/approvedImages";

const whyPoints = [
  {
    title: "Science Led Sourcing",
    desc: "Ingredients selected based on plant science knowledge, defined botanical profiles, and documented growing conditions.",
  },
  {
    title: "Consistency Mindset",
    desc: "Processes standardised so repeat orders reflect predictable quality parameters — not just 'similar to last time'.",
  },
  {
    title: "Founder Responsiveness",
    desc: "Founder led business means direct communication, faster decisions, and full accountability at every touchpoint.",
  },
  {
    title: "Long Term Partnership",
    desc: "Built for durable supply relationships with buyers who value quality and consistency over transactional interactions.",
  },
];

const scienceBullets = [
  "Sourcing guided by plant pathology and biotechnology knowledge",
  "Processing conducted through trusted partners with defined parameters",
  "Focus on batch level consistency rather than ad hoc supply",
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
      "Bio Periposa offers herbal powders for individuals and business customers, with a focus on botanical quality and sourcing from India.";
  }, []);

  return (
    <div>
      {/* Hero: full-width image above the introduction */}
      <section className="pt-20 bg-brand-cream">
        <img src={approvedImages.hero} alt="Fine botanical powders with fresh herbs, roots, fruits and flowers" className="w-full h-[46vh] sm:h-[62vh] lg:h-[75vh] object-cover" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <p className="text-sm font-semibold text-brand-green mb-4">Bio Periposa Private Limited</p>
          <h1 className="font-sans font-extrabold text-4xl md:text-6xl text-foreground mb-6">Pure botanicals. Rooted in science.</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-5">
            Discover moringa leaf and ashwagandha root powders from Bio Periposa. Know the botanical, explore practical uses, and ask us about the product before you buy.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            Made for customers who want straightforward ingredient information — and businesses looking for a responsive botanical sourcing partner.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/products" className="btn-primary">Explore Products <ArrowRight size={16} className="ml-2" /></Link>
            <a href="https://wa.me/919810859162" target="_blank" rel="noopener noreferrer" className="btn-secondary">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Current botanical range */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-green text-center mb-3">Our collection</p>
          <h2 className="font-serif text-4xl text-center mb-4">Two botanicals. Clearly identified.</h2>
          <p className="text-center text-muted-foreground mb-12">For your kitchen, your routine, or your business.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="rounded-2xl overflow-hidden border border-border bg-brand-cream">
              <img src="/assets/generated/product-moringa.dim_600x480.jpg" alt="Moringa leaf powder" className="w-full h-64 object-cover" />
              <div className="p-7"><p className="text-sm tracking-wide uppercase text-brand-green mb-2">सहजन पत्ती · Moringa oleifera</p><h3 className="font-serif text-2xl mb-3">Moringa Leaf Powder</h3><p className="text-muted-foreground mb-5">Finely milled moringa leaves. Explore ways to use it in familiar recipes.</p><Link to="/products" className="font-semibold text-brand-green">Explore product →</Link></div>
            </article>
            <article className="rounded-2xl overflow-hidden border border-border bg-brand-cream">
              <img src="/assets/generated/product-ashwagandha.dim_600x480.jpg" alt="Ashwagandha root powder" className="w-full h-64 object-cover" />
              <div className="p-7"><p className="text-sm tracking-wide uppercase text-brand-green mb-2">अश्वगंधा जड़ · Withania somnifera</p><h3 className="font-serif text-2xl mb-3">Ashwagandha Root Powder</h3><p className="text-muted-foreground mb-5">Root powder, clearly distinguished from leaf-based botanical ingredients.</p><Link to="/products" className="font-semibold text-brand-green">Explore product →</Link></div>
            </article>
          </div>
          <div className="text-center mt-10"><Link to="/recipes" className="btn-primary">Explore recipes <ArrowRight size={16} className="ml-2" /></Link></div>
        </div>
      </section>

      {/* Science Led Approach */}
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
                A Science Led Approach to Bulk Herbal Supply
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

      {/* Founder */}
      <section className="py-20 px-4 bg-white" aria-labelledby="founder-heading">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2 rounded-2xl bg-brand-cream p-10 flex flex-col justify-center min-h-72">
            <p className="text-sm tracking-wide uppercase text-brand-green mb-4">Meet the founder</p>
            <h2 id="founder-heading" className="font-serif text-3xl mb-3">Dr. Chiti Agarwal</h2>
            <p className="text-muted-foreground">PhD, Plant Pathology</p>
            <p className="text-muted-foreground">Washington State University, USA</p>
          </div>
          <div className="md:col-span-3">
            <h3 className="font-serif text-3xl mb-5">Plant science meets everyday ingredients</h3>
            <p className="text-muted-foreground leading-relaxed mb-5">Bio Periposa is guided by Dr. Chiti Agarwal's background in plant pathology, biotechnology and quality-focused production operations in the United States.</p>
            <p className="text-muted-foreground leading-relaxed mb-7">We believe ingredient identity, transparent information and direct communication matter as much as presentation.</p>
            <Link to="/about" className="font-semibold text-brand-green">Learn about Bio Periposa →</Link>
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

      {/* Recipe inspiration */}
      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img src="/assets/generated/hero-herbal-collection.dim_800x600.jpg" alt="Botanical ingredients for everyday recipes" className="w-full h-80 object-cover rounded-2xl" />
          <div><p className="text-xs uppercase tracking-widest font-semibold text-brand-green mb-3">Kitchen inspiration</p>
            <h2 className="font-serif text-4xl mb-5">A little moringa in everyday food</h2>
            <p className="text-muted-foreground leading-relaxed mb-7">Explore straightforward recipes for dal, paratha and chaas with ingredients and step-by-step preparation.</p>
            <Link to="/recipes" className="btn-primary">Browse recipes <ArrowRight size={16} className="ml-2" /></Link>
          </div>
        </div>
      </section>

      {/* Organic sourcing and quality commitment */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#f1fbe7] via-white to-[#e5f6d6]">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-sm font-bold text-[#3c7834] mb-4">From farm to finished powder</p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-[#17442f] mb-6">Naturally sourced. Carefully prepared.</h2>
          <p className="text-lg text-[#36583d] leading-relaxed max-w-4xl mb-10">We prioritise botanical raw materials from organic farms and work with manufacturing facilities that maintain organic certification. From farm sourcing to processing and packing, our focus is on ingredient integrity, freshness and responsible handling.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl bg-white border border-[#cbe8bd] p-7 shadow-sm"><span className="text-3xl" aria-hidden="true">🌱</span><h3 className="font-bold text-2xl text-[#17442f] mt-4 mb-3">Organic farm sourcing</h3><p className="text-[#36583d]">We seek raw materials grown on organic farms, with attention to botanical identity and sourcing records.</p></div>
            <div className="rounded-3xl bg-white border border-[#cbe8bd] p-7 shadow-sm"><span className="text-3xl" aria-hidden="true">🍃</span><h3 className="font-bold text-2xl text-[#17442f] mt-4 mb-3">Certified manufacturing</h3><p className="text-[#36583d]">Our manufacturing partners operate certified organic facilities. Certification scope and validity are verified through supporting documentation.</p></div>
            <div className="rounded-3xl bg-white border border-[#cbe8bd] p-7 shadow-sm"><span className="text-3xl" aria-hidden="true">🔬</span><h3 className="font-bold text-2xl text-[#17442f] mt-4 mb-3">Quality you can ask about</h3><p className="text-[#36583d]">We encourage buyers to request available batch reports, product specifications and applicable certification documents.</p></div>
          </div>
          <p className="text-sm text-[#48684a] mt-7">Organic certification applies only to products and operations covered by the relevant valid certificate. Product-specific documents are available on request where applicable.</p>
          <Link to="/quality" className="inline-flex items-center mt-6 bg-[#78c331] text-[#17442f] rounded-xl px-7 py-4 font-bold hover:bg-[#8bd443] transition-colors">Explore our quality approach <ArrowRight size={18} className="ml-2" /></Link>
        </div>
      </section>

      {/* Healthy habits community */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#d8f5c3] via-[#eefbdc] to-[#fff5ce] text-[#17442f]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-[#45863b] mb-4">Bio Periposa community</p>
            <h2 className="font-sans font-extrabold text-4xl md:text-6xl leading-tight mb-5">Small habits. Everyday wellbeing.</h2>
            <p className="text-[#3f6745] leading-relaxed">Join our free healthy habits community for practical recipes, gentle challenges and ideas for making time for yourself. No purchase required.</p>
          </div>
          <div className="rounded-2xl bg-white/75 border border-[#b9df9d] shadow-sm p-8">
            <h3 className="font-serif text-2xl mb-4">You're invited</h3>
            <p className="text-[#3f6745] mb-6">Interested in joining? Message us and ask about the free healthy habits group.</p>
            <a href="https://wa.me/919810859162?text=Hello%20Bio%20Periposa%2C%20I%20would%20like%20to%20join%20the%20free%20healthy habits%20community." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#80ca3b] text-[#17442f] px-7 py-3 font-semibold hover:bg-[#9bdb54] transition-colors">Ask to join on WhatsApp <ArrowRight size={17} className="ml-2" /></a>
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
