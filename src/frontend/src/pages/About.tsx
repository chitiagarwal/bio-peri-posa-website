import { useEffect } from "react";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";

const commitments = [
  { title: "Quality in every batch", description: "We aim for consistent quality through thoughtful sourcing, careful processing and attention to every batch. Quality is not something we compromise on." },
  { title: "Knowledge without exaggerated claims", description: "Herbal powders are food ingredients, not medicines. We share practical information about using them in everyday cooking without promising cures or medical outcomes." },
  { title: "Small habits, lasting value", description: "A healthier routine can begin with small choices in the kitchen. Our goal is to make botanical ingredients approachable, useful and easy to incorporate into familiar meals." }
];

export default function About({ embedded = false }: { embedded?: boolean }) {
 useEffect(() => {
  if (embedded) return;
  document.title = "About Bio Periposa | Nature Around Us";
  let meta = document.querySelector("meta[name='description']") as HTMLMetaElement | null;
  if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
  meta.content = "Learn about Bio Periposa's vision for everyday botanical foods, quality across every batch, and science guided ingredient education.";
 }, [embedded]);
 return <div className="bg-white">
  {!embedded && <PageHero eyebrow="About Us" title="Nature belongs in everyday life." subtitle="Herbal powders for everyday kitchens, guided by science and a commitment to quality."/>}
  <section className="py-16 md:py-20 px-5 bg-white">
   <div className="max-w-4xl mx-auto">
    <div>
     <p className="text-sm font-bold uppercase tracking-widest text-[#3c7834] mb-4">Our vision</p>
     <h2 className="text-4xl md:text-5xl font-extrabold text-[#17442f] mb-6">Better everyday choices, naturally.</h2>
     <p className="text-lg text-[#35583d] leading-relaxed mb-5">At Bio Periposa, we believe that caring for ourselves can start with something as simple as what we put on our plates. We want to make botanical ingredients a familiar, practical part of everyday cooking.</p>
     <p className="text-lg text-[#35583d] leading-relaxed mb-5">Our purpose is to offer thoughtfully sourced herbal powders, share useful knowledge and encourage small, sustainable lifestyle habits. These ingredients are foods to enjoy as part of a balanced diet, not medicines or shortcuts to good health.</p>
     <p className="text-lg text-[#35583d] leading-relaxed">Whether you are cooking for yourself, your family or exploring ingredients for your business, we want you to feel confident about what you choose.</p>
    </div>

   </div>
  </section>
  <section className="py-16 px-5 bg-[#f5fbef]">
   <div className="max-w-6xl mx-auto">
    <p className="text-sm font-bold uppercase tracking-widest text-[#3c7834] mb-4">Our promise</p>
    <h2 className="text-4xl font-extrabold text-[#17442f] mb-10">Quality, clarity and care.</h2>
    <div className="grid md:grid-cols-3 gap-6">{commitments.map(({title,description})=><article key={title} className="bg-white border border-[#d2e9c3] rounded-3xl p-7 shadow-sm"><h3 className="text-2xl font-bold text-[#17442f] mb-3">{title}</h3><p className="text-base text-[#35583d] leading-relaxed">{description}</p></article>)}</div>
   </div>
  </section>
  <section className="py-16 px-5 bg-white">
   <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    <div className="rounded-3xl bg-[#edf8e5] p-7 sm:p-9 flex flex-col items-center text-center">
     <img src="/assets/founder-chiti-agarwal.jfif" alt="Dr. Chiti Agarwal, founder of Bio Periposa" className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl object-cover object-top border-4 border-white shadow-md mb-6" loading="eager" decoding="async" />
     <p className="text-sm font-bold uppercase tracking-widest text-[#3c7834] mb-4">Meet the founder</p>
     <h2 className="text-3xl font-extrabold text-[#17442f] mb-3">Dr. Chiti Agarwal</h2>
     <p className="text-lg text-[#35583d]">PhD, Plant Pathology</p>
     <p className="text-base text-[#35583d]">Washington State University, USA</p>
    </div>
    <div>
     <p className="text-sm font-bold uppercase tracking-widest text-[#3c7834] mb-4">A note from our founder</p>
     <h2 className="text-3xl md:text-4xl font-extrabold text-[#17442f] mb-5">Why I started Bio Periposa</h2>
     <p className="text-lg text-[#35583d] leading-relaxed mb-5">After years of studying and working in the United States, I returned to India with a new perspective on something deeply familiar: the food we bring home to our families. I found myself thinking more carefully about how much trust we place in everyday ingredients, and how difficult it can be to know what quality really means.</p>
     <p className="text-lg text-[#35583d] leading-relaxed mb-5">I have spent my career studying plants, biotechnology and quality-focused production. But behind that scientific experience is a simple, personal belief: everyone deserves to feel confident about the food they choose for themselves and the people they love.</p>
     <p className="text-lg text-[#35583d] leading-relaxed mb-5">That belief led me to create Bio Periposa. I wanted to bring scientific care, thoughtful sourcing and clear information into everyday botanical ingredients, without exaggerated promises or complicated health claims.</p>
     <p className="text-lg text-[#35583d] leading-relaxed">My hope is that Bio Periposa becomes more than a name on a pouch. I want it to stand for trust, care and small everyday choices that help us build happier, healthier routines together.</p>
     <p className="text-base font-semibold text-[#17442f] mt-6">— Dr. Chiti Agarwal, Founder</p>
    </div>
   </div>
  </section>
  <CTASection heading="Bring a little nature into your routine." subtext="Discover our botanical powders and simple ways to use them in everyday food." primaryLabel="Explore Products" primaryTo="/products" secondaryLabel="Explore Recipes" secondaryTo="/recipes"/>
 </div>;
}
