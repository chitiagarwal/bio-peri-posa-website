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
     <h2 className="text-4xl md:text-5xl font-extrabold text-[#17442f] mb-6">Real kitchens. Everyday choices.</h2>
     <p className="text-lg text-[#35583d] leading-relaxed mb-5">Food choices should feel understandable, not overwhelming. Whether you are preparing a quick breakfast or cooking for your family, we want botanical ingredients to fit the meals you already know.</p>
     <p className="text-lg text-[#35583d] leading-relaxed mb-5">Our purpose is to offer botanical powders with clear ingredient information, share realistic recipe ideas and encourage small, sustainable food habits. These ingredients are foods to enjoy as part of a balanced diet, not medicines or shortcuts to good health.</p>
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
     <p className="text-lg text-[#35583d] leading-relaxed mb-5">After years of studying and working in the United States, I returned to India and started asking a simple question about everyday ingredients: how can we know what we are buying? A familiar food can still leave us with questions about its source, processing and quality.</p>
     <p className="text-lg text-[#35583d] leading-relaxed mb-5">My work in plant science, biotechnology and quality-focused production taught me to ask questions and look for evidence. As a customer, I believe you deserve understandable answers about what goes into the food you bring home.</p>
     <p className="text-lg text-[#35583d] leading-relaxed mb-5">That is why I started Bio Periposa: to make botanical ingredients easier to understand and use, without miracle claims. I want us to explain what we know, show the documentation we can share, and be clear about what is still being verified.</p>
     <p className="text-lg text-[#35583d] leading-relaxed">My hope is that you feel comfortable asking us questions, trying a simple recipe and deciding for yourself whether our products fit your routine. Your trust has to be earned, not requested.</p>
     <p className="text-base font-semibold text-[#17442f] mt-6">— Dr. Chiti Agarwal, Founder</p>
    </div>
   </div>
  </section>
  <CTASection heading="Bring a little nature into your routine." subtext="Discover our botanical powders and simple ways to use them in everyday food." primaryLabel="Explore Products" primaryTo="/products" secondaryLabel="Explore Recipes" secondaryTo="/recipes"/>
 </div>;
}
