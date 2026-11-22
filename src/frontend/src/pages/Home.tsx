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
      <section className="relative mt-16 bg-[#17442f]" aria-labelledby="home-heading">
        <img src={approvedImages.hero} alt="Fresh botanicals and finely ground herbal powders" className="block w-full h-auto object-contain" />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-5 sm:px-8 text-center">
          <div className="w-full max-w-4xl mx-auto text-white motion-safe:animate-[heroReveal_850ms_ease-out_both]">
            <h1 id="home-heading" className="text-lg sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-lg break-words"><span className="bg-[#071d16]/65 backdrop-blur-[12px] rounded-lg px-2 py-1 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">Good food habits don't have to be complicated.</span></h1>
            <p className="text-[11px] sm:text-base md:text-xl leading-snug sm:leading-relaxed max-w-3xl mx-auto mt-1 sm:mt-4 drop-shadow-lg"><span className="bg-[#071d16]/65 backdrop-blur-[12px] rounded-lg px-2 py-1 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">Thoughtfully sourced botanical powders for familiar Indian meals. Simple recipes, clear information, and quality you can ask us about.</span></p>
          </div>
        </div>
        <style>{`@keyframes heroReveal { from { opacity: 0; transform: translateY(24px) scale(.97); } to { opacity: 1; transform: translateY(0) scale(1); } }`}</style>
      </section>

      <About embedded />
    </div>
  );
}
