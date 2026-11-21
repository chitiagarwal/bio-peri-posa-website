import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ShieldCheck, Users } from "lucide-react";
import { useEffect } from "react";
import { approvedImages } from "../data/approvedImages";

const quickLinks = [
  { to: "/recipes", title: "Everyday recipes", description: "Simple ways to bring botanicals into your kitchen.", icon: BookOpen },
  { to: "/quality", title: "Our quality promise", description: "Learn about sourcing, certification and consistency.", icon: ShieldCheck },
  { to: "/about", title: "Our story", description: "Meet the founder and discover our purpose.", icon: Users },
] as const;

export default function Home() {
  useEffect(() => {
    document.title = "Bio Periposa | Herbal Powders for Everyday Life";
    let meta = document.querySelector("meta[name='description']") as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Discover herbal powders from Bio Periposa Private Limited. Explore our products, everyday recipes, quality commitments and botanical ingredients.";
  }, []);

  return (
    <div className="bg-white">
      <section className="pt-16 bg-white" aria-labelledby="home-heading">
        <img
          src={approvedImages.hero}
          alt="Fresh botanicals and finely ground herbal powders"
          className="w-full h-[30vh] min-h-[220px] max-h-[390px] object-cover"
        />
        <div className="max-w-5xl mx-auto px-5 py-9 md:py-12 text-center">
          <p className="text-sm font-bold tracking-wide text-[#39793a] mb-3">BIO PERIPOSA PRIVATE LIMITED</p>
          <h1 id="home-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#17442f] mb-4">Pure botanicals. Rooted in science.</h1>
          <p className="text-lg md:text-xl text-[#36583d] leading-relaxed max-w-3xl mx-auto mb-6">
            Discover herbal powders for your everyday kitchen. A little goodness of nature, one simple habit at a time.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-xl bg-[#70bf2e] px-7 py-3.5 text-lg font-extrabold text-[#123d22] hover:bg-[#86d044] transition-colors">Explore Products <ArrowRight size={19}/></Link>
            <a href="https://wa.me/919810859162" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-xl border-2 border-[#4f9638] bg-[#e4f7d4] px-7 py-3.5 text-lg font-extrabold text-[#17442f] hover:bg-[#c9efae] transition-colors">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:py-12 bg-[#f6fbf1]" aria-labelledby="products-heading">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-3 mb-6">
            <div><p className="text-sm font-bold uppercase tracking-wide text-[#39793a] mb-2">Our collection</p><h2 id="products-heading" className="text-3xl md:text-4xl font-extrabold text-[#17442f]">Explore our botanicals</h2></div>
            <Link to="/products" className="text-base font-bold text-[#276c34] hover:underline">All product details <ArrowRight className="inline" size={18}/></Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Link to="/products/moringa" className="group flex items-center gap-4 bg-white border border-[#d3e8c7] rounded-2xl p-4 hover:shadow-lg hover:border-[#78c331] transition-all">
              <img src="/assets/generated/product-moringa.dim_600x480.jpg" alt="Moringa leaf powder product" className="w-28 h-28 md:w-36 md:h-36 object-contain rounded-xl bg-[#eef8e5] shrink-0"/>
              <div><h3 className="text-xl md:text-2xl font-extrabold text-[#17442f] mb-2">Moringa Leaf Powder</h3><p className="text-base text-[#36583d] mb-3">Discover the product and everyday uses.</p><span className="inline-flex items-center gap-1 text-[#287335] font-bold">View details <ArrowRight size={17}/></span></div>
            </Link>
            <Link to="/products/ashwagandha" className="group flex items-center gap-4 bg-white border border-[#d3e8c7] rounded-2xl p-4 hover:shadow-lg hover:border-[#78c331] transition-all">
              <img src="/assets/generated/product-ashwagandha.dim_600x480.jpg" alt="Ashwagandha root powder product" className="w-28 h-28 md:w-36 md:h-36 object-contain rounded-xl bg-[#fff5df] shrink-0"/>
              <div><h3 className="text-xl md:text-2xl font-extrabold text-[#17442f] mb-2">Ashwagandha Root Powder</h3><p className="text-base text-[#36583d] mb-3">Product information and inquiries.</p><span className="inline-flex items-center gap-1 text-[#287335] font-bold">View details <ArrowRight size={17}/></span></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:py-12 bg-white" aria-labelledby="discover-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="discover-heading" className="text-3xl font-extrabold text-[#17442f] mb-6">Discover more</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {quickLinks.map(({ to, title, description, icon: Icon }) => (
              <Link key={to} to={to} className="rounded-2xl border border-[#d3e8c7] bg-[#f8fcf5] p-6 hover:border-[#78c331] hover:shadow-md transition-all">
                <Icon size={30} className="text-[#428d38] mb-4"/>
                <h3 className="text-xl font-extrabold text-[#17442f] mb-2">{title}</h3>
                <p className="text-base text-[#36583d] mb-4">{description}</p>
                <span className="inline-flex items-center gap-2 text-[#287335] font-bold">Explore <ArrowRight size={17}/></span>
              </Link>
            ))}
          </div>
          <div className="mt-7 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 text-lg font-bold text-[#276c34] hover:underline">Have a question? Contact us <ArrowRight size={18}/></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
