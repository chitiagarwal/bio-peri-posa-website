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
        </div>
      </section>

      <About embedded />
    </div>
  );
}
