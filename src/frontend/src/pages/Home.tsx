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
      <section className="relative mt-16 bg-[#17442f]" aria-labelledby="home-heading">
        <img src={approvedImages.hero} alt="Fresh botanicals and finely ground herbal powders" className="block w-full h-auto object-contain" />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-3 sm:px-5 text-center">
          <div className="relative max-w-4xl text-white px-3 sm:px-7 py-3 sm:py-6 rounded-2xl overflow-hidden motion-safe:animate-[heroReveal_850ms_ease-out_both]">
            <div aria-hidden="true" className="absolute inset-0 bg-[#092b1f]/30 backdrop-blur-[5px]" />
            <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1 sm:mb-3">
              <img src={brandLogo} alt="" className="h-8 w-8 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain drop-shadow-lg" />
              <p className="text-[10px] sm:text-base md:text-lg font-bold tracking-[0.08em] sm:tracking-[0.12em] uppercase">Bio Periposa Private Limited</p>
            </div>
            <h1 id="home-heading" className="text-lg sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-lg">Pure botanicals. Rooted in science.</h1>
            <p className="text-[11px] sm:text-base md:text-xl leading-snug sm:leading-relaxed max-w-3xl mx-auto mt-1 sm:mt-4 drop-shadow-lg">Discover herbal powders for your everyday kitchen. A little goodness of nature, one simple habit at a time.</p>
            </div>
          </div>
        </div>
        <style>{`@keyframes heroReveal { from { opacity: 0; transform: translateY(24px) scale(.97); } to { opacity: 1; transform: translateY(0) scale(1); } }`}</style>
      </section>

      <About embedded />
    </div>
  );
}
