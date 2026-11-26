import { useEffect } from "react";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";

const products = [
  {name:"Organic Moringa Leaf Powder",scientificName:"Moringa oleifera",image:"/assets/generated/product-moringa.dim_600x480.jpg",description:"सहजन पत्ती · Shevga · Murungai. Finely milled moringa leaves for everyday recipes and ingredient enquiries.",benefits:["Single botanical ingredient: moringa leaf","Use in paratha dough, dal and other recipes","Ask us about current pack sizes and batch information"]},
  {name:"Organic Ashwagandha Root Powder",scientificName:"Withania somnifera",image:"/assets/generated/product-ashwagandha.dim_600x480.jpg",description:"अश्वगंधा जड़. Ashwagandha root powder for customers and business buyers seeking clearly identified botanical ingredients.",benefits:["Root powder — not leaf powder","Botanical identity: Withania somnifera","Request product specifications and batch information"]}
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
      "Moringa leaf powder and ashwagandha root powder for retail and bulk enquiries.";
  }, []);

  return (
    <div>
      <PageHero
        eyebrow="Products"
        title="Our Botanical Powders"
        subtitle="Moringa leaf and ashwagandha root powders for individuals and businesses."
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
        Explore our two current botanical powders &nbsp;|&nbsp; Bulk enquiries welcome — minimum 25 kg per SKU
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
                      About this Botanical
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
