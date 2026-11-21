import { useEffect } from "react";
import { approvedImages } from "../data/approvedImages";
import About from "./About";
import { brandLogo } from "../data/brandLogo";

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
      <section className="relative mt-16 h-[45vh] min-h-[340px] max-h-[510px] overflow-hidden bg-[#17442f]" aria-labelledby="home-heading">
        <img src={approvedImages.hero} alt="Fresh botanicals and finely ground herbal powders" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#092b1f]/90 via-[#103a2b]/70 to-[#103a2b]/30" />
        <div className="relative z-10 flex h-full items-center justify-center px-5 py-8 text-center">
          <div className="max-w-4xl text-white motion-safe:animate-[heroReveal_850ms_ease-out_both]">
            <div className="flex items-center justify-center gap-3 mb-3">
              <img src={brandLogo} alt="" className="h-12 w-12 md:h-16 md:w-16 object-contain drop-shadow-lg" />
              <p className="text-base md:text-lg font-bold tracking-[0.12em] uppercase">Bio Periposa Private Limited</p>
            </div>
            <h1 id="home-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-lg">Pure botanicals. Rooted in science.</h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-4 drop-shadow-lg">Discover herbal powders for your everyday kitchen. A little goodness of nature, one simple habit at a time.</p>
          </div>
        </div>
        <style>{`@keyframes heroReveal { from { opacity: 0; transform: translateY(24px) scale(.97); } to { opacity: 1; transform: translateY(0) scale(1); } }`}</style>
      </section>

      <About embedded />
    </div>
  );
}
