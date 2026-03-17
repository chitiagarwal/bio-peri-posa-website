import { useEffect } from "react";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";

const products = [
  {
    name: "Moringa",
    scientificName: "Moringa oleifera",
    image: "/assets/generated/product-moringa.dim_600x480.jpg",
    description:
      "Fine Moringa leaf powder sourced from trusted cultivation regions. Used in nutraceuticals, functional foods, and supplement formulations.",
    benefits: [
      "Contains 7× more Vitamin C than oranges and 4× more calcium than milk (USDA data)",
      "Complete plant protein — all 9 essential amino acids present",
      "Isothiocyanates provide potent anti-inflammatory and antioxidant activity",
      "Chlorogenic acid helps moderate postprandial blood glucose levels",
      "Supports liver protection and detoxification pathways",
      "Rich in iron, Vitamin A, B6, and riboflavin — supports energy metabolism",
    ],
  },
  {
    name: "Amla",
    scientificName: "Phyllanthus emblica",
    image: "/assets/generated/product-amla.dim_600x480.jpg",
    description:
      "Standardised Amla powder processed from whole Indian gooseberries. A key ingredient in wellness blends and vitamin-C–focused formulations.",
    benefits: [
      "600–700 mg Vitamin C per 100g — among the richest natural sources known",
      "Emblicanin A & B and punigluconin — unique antioxidants that remain stable under heat processing",
      "Reduces LDL cholesterol oxidation — supports cardiovascular health",
      "Anti-diabetic: reduces postprandial blood glucose and glycated haemoglobin",
      "Hepatoprotective — supports liver detoxification and cell protection",
      "Traditionally used in Ayurvedic rejuvenation (Rasayana) formulations for centuries",
    ],
  },
  {
    name: "Tulsi",
    scientificName: "Ocimum tenuiflorum",
    image: "/assets/generated/product-tulsi.dim_600x480.jpg",
    description:
      "Whole-leaf Tulsi (Holy Basil) powder processed through controlled drying and milling. Used in herbal teas, wellness blends, and functional formulations.",
    benefits: [
      "Eugenol inhibits COX-2 enzyme — anti-inflammatory mechanism comparable to ibuprofen (NCBI)",
      "Clinically studied adaptogen — reduces serum cortisol and improves stress resilience",
      "Antimicrobial against E. coli, S. aureus, and multiple fungal strains (peer-reviewed studies)",
      "Supports respiratory health — relieves bronchitis, cough, and cold symptoms (Ayurvedic Pharmacopoeia of India)",
      "Anti-diabetic: lowers fasting blood glucose and glycated haemoglobin levels",
      "Rich in ursolic acid and rosmarinic acid — potent antioxidant and anti-cancer properties under study",
    ],
  },
  {
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis miller",
    image: "/assets/generated/product-alovera.dim_600x480.jpg",
    description:
      "Spray-dried Aloe Vera powder for use in cosmetics, nutraceuticals, and digestive health products.",
    benefits: [
      "Acemannan polysaccharide stimulates immune response and macrophage activity (IASC documented)",
      "Reduces symptoms of IBS and ulcerative colitis — supports gut lining integrity",
      "Contains vitamins B12, C, E, folic acid, and 8 active enzymes",
      "Promotes wound healing and collagen synthesis — widely used in cosmetic formulations",
      "Reduces dental plaque and gingivitis through antimicrobial activity",
      "Anthraquinones provide antioxidant and anti-inflammatory bioactive effects",
    ],
  },
  {
    name: "Ker",
    scientificName: "Capparis decidua",
    image: "/assets/generated/product-ker.dim_600x480.jpg",
    description:
      "Dried Ker powder sourced from arid regions of Rajasthan. A functional ingredient for specialty food and health formulations.",
    benefits: [
      "Stachydrine and rutin compounds demonstrate anti-diabetic activity in preclinical models",
      "Hepatoprotective — protects liver cells from toxin-induced damage (NCBI literature)",
      "Inhibits pro-inflammatory cytokines — anti-inflammatory mechanism studied in vivo",
      "Analgesic properties documented in pharmacological research",
      "Good source of iron, calcium, and carotenoids for functional food applications",
      "Centuries of traditional use in Rajasthani ethnomedicine for liver and spleen support",
    ],
  },
  {
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    image: "/assets/generated/product-ashwagandha.dim_600x480.jpg",
    description:
      "Root powder sourced from quality-focused supply channels. Widely used in adaptogen blends, sports nutrition, and health supplements.",
    benefits: [
      "Withanolides (steroidal lactones) — primary adaptogenic compounds regulating stress response",
      "Reduces serum cortisol by up to 30% in randomised controlled trials (Chandrasekhar et al., 2012)",
      "Improves VO2 max, muscle strength, and post-exercise recovery (Journal of the ISSN)",
      "Supports thyroid function — increases T3 and T4 hormone levels",
      "Neuroprotective: reduces neuroinflammation and cognitive decline markers",
      "Improves male fertility — increases testosterone levels and sperm quality (NCBI)",
    ],
  },
  {
    name: "Neem",
    scientificName: "Azadirachta indica",
    image: "/assets/generated/product-neem.dim_600x480.jpg",
    description:
      "Whole-leaf Neem powder from the 'village pharmacy' tree. Used in Ayurvedic formulations, oral care products, and nutraceuticals globally.",
    benefits: [
      "Azadirachtin, nimbin, nimbidin, and nimbolide — wide-spectrum bioactive limonoids (WHO Monograph on Neem)",
      "Potent antibacterial and antifungal — effective against drug-resistant bacterial strains",
      "Anti-diabetic: enhances insulin receptor sensitivity and lowers blood glucose",
      "Hepatoprotective — protects liver cells from toxin and chemical-induced damage",
      "Clinically proven for oral care — reduces dental plaque and gingivitis (documented by WHO)",
      "Powerful antioxidant: scavenges free radicals and reduces systemic oxidative stress",
    ],
  },
];

const comingSoon = [
  {
    title: "Botanical Oils",
    desc: "High-value plant-derived oils for cosmetic, nutraceutical, and functional formulations. Currently in sourcing and partner evaluation phase.",
  },
  {
    title: "Eco-Friendly Paper Products",
    desc: "Low-waste plant-based paper and packaging materials. Designed for sustainable manufacturing and responsible end-use applications.",
  },
];

export default function Products() {
  useEffect(() => {
    document.title = "Herbal Powder Products — Bio Peri Posa Pvt. Ltd.";
    let meta = document.querySelector(
      "meta[name='description']",
    ) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Bulk herbal powders including Moringa, Amla, Tulsi, Aloe Vera, Ker, Ashwagandha, and Neem. Seven products. Minimum 25 kg per SKU. B2B supply from India.";
  }, []);

  return (
    <div>
      <PageHero
        eyebrow="Products"
        title="Herbal Powder Products"
        subtitle="Bulk supply for B2B buyers, importers, and formulators. Minimum 25 kg per SKU."
      />

      {/* MOQ Banner */}
      <div
        className="py-4 px-4 text-center text-sm font-sans font-medium"
        style={{
          backgroundColor: "oklch(0.93 0.025 145)",
          color: "oklch(0.33 0.055 145)",
        }}
        data-ocid="products.section"
      >
        Seven herbal powders available for bulk supply &nbsp;|&nbsp; Minimum
        Order Quantity: <strong>25 kg per SKU</strong> &nbsp;|&nbsp; Pack Sizes:{" "}
        <strong>1 kg, 5 kg, 10 kg</strong> available for sampling
      </div>

      {/* Product Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.name} herbal powder`}
                    className="w-full h-52 object-cover"
                  />
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-sans font-medium italic"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.88)",
                      color: "oklch(0.40 0.060 145)",
                    }}
                  >
                    {product.scientificName}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-xl text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div>
                    <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green mb-2">
                      Key Benefits
                    </p>
                    <ul className="space-y-1.5">
                      {product.benefits.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-xs font-sans text-muted-foreground"
                        >
                          <span className="text-brand-green mt-0.5 shrink-0">
                            ✓
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green text-center mb-3">
            Upcoming
          </p>
          <h2 className="font-serif text-3xl text-center text-foreground mb-12">
            Coming Soon
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {comingSoon.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-8 border border-dashed border-border shadow-xs text-center"
              >
                <div
                  className="inline-flex items-center justify-center mb-4 text-xs font-sans font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "oklch(0.93 0.025 145)",
                    color: "oklch(0.47 0.066 145)",
                  }}
                >
                  Coming Soon
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
        heading="Need a bulk quote for any of these products?"
        subtext="Submit your inquiry with quantity, product, and requirements. We will respond within 2 business days."
        primaryLabel="Request Bulk Inquiry"
        primaryTo="/bulk-orders"
      />
    </div>
  );
}
