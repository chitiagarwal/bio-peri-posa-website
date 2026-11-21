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
          className="block w-full h-auto object-contain"
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

      <section className="px-5 py-10 md:py-12 bg-white" aria-labelledby="discover-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="discover-heading" className="text-3xl font-extrabold text-[#17442f] mb-6">Discover more</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {quickLinks.map(({ to, title, description, icon: Icon }) => (
              <Link key={to} to={to} className="rounded-2xl border border-[#d3e8c7] bg-[#f8fcf5] p-6 hover:border-[#78c331] hover:shadow-md transition-all">
                {to === "/about" ? <img src="/assets/founder-chiti-agarwal.jpg?v=20261121" onError={(event) => { const image = event.currentTarget; if (!image.src.startsWith("https://raw.githubusercontent.com/")) image.src = "https://raw.githubusercontent.com/chitiagarwal/bio-peri-posa-website/recipes-correct-images-nov-2026/src/frontend/public/assets/founder-chiti-agarwal.jpg"; }} alt="Dr. Chiti Agarwal, founder of Bio Periposa" className="w-14 h-14 object-cover rounded-full border-2 border-white shadow-sm mb-4" /> : <Icon size={30} className="text-[#428d38] mb-4"/>}
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
