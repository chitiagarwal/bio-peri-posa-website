import { useEffect } from "react";
import { approvedImages } from "../data/approvedImages";
import About from "./About";


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
      <section className="relative mt-16 min-h-[430px] sm:min-h-[500px] lg:min-h-[560px] flex items-center justify-center overflow-hidden bg-[#17442f]" aria-labelledby="home-heading">
        <img src={approvedImages.hero} alt="Fresh botanicals and finely ground herbal powders" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071d16]/35 via-[#071d16]/45 to-[#071d16]/55" aria-hidden="true" />
        <div className="relative z-10 w-full px-5 py-16 sm:px-8 sm:py-20 text-center">
          <div className="max-w-3xl mx-auto text-white motion-safe:animate-[heroReveal_850ms_ease-out_both]">
            <h1 id="home-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] drop-shadow-lg">Good food habits don't have to be complicated.</h1>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mt-6 drop-shadow-lg">Thoughtfully sourced botanical powders for familiar Indian meals. Simple recipes, clear information, and quality you can ask us about.</p>
          </div>
        </div>
        <style>{`@keyframes heroReveal { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }`}</style>
      </section>

      <About embedded />
    </div>
  );
}
