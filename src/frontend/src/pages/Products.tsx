import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

const products = [
  {title:"Organic Moringa Leaf Powder", subtitle:"Moringa oleifera · सहजन पत्ती",image:"/assets/bio_periposa_moringa_product_visual..png?v=original-20261122",fallback:"/assets/generated/product-moringa.dim_600x480.jpg",url:"/products/moringa",action:"View Moringa details",bg:""},
  {title:"Ashwagandha Root Powder", subtitle:"Withania somnifera · अश्वगंधा जड़",image:"/assets/bio_periposa_ashwagandha_product_visual..png?v=original-20261122",fallback:"/assets/generated/product-ashwagandha.dim_600x480.jpg",url:"/products/ashwagandha",action:"Enquire about Ashwagandha",bg:""}
];
export default function Products(){
 useEffect(()=>{document.title="Our Products | Bio Periposa";},[]);
 return <div className="bg-[#fbfff5] pt-24">
  <div className="max-w-7xl mx-auto px-5 py-12"><h1 className="text-4xl md:text-6xl font-bold text-[#164c34]">Our products</h1><p className="mt-4 text-lg text-[#476450]">Explore our botanical powders. Select a product to read more.</p></div>
  <section className="bg-white py-12 px-5"><div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
  {products.map(p=><Link to={p.url} key={p.url} className="group block rounded-[2rem] overflow-hidden border border-[#e5ebdf] hover:shadow-xl transition-shadow">
   <div className="w-full overflow-hidden bg-white"><img src={p.image} alt={p.title} onError={e => { const img = e.currentTarget; const original = `https://raw.githubusercontent.com/chitiagarwal/bio-peri-posa-website/${"recipes-correct-images-nov-2026"}/src/frontend/public${p.image.split("?")[0]}`; if (img.src !== original) img.src = original; }} className="block w-full h-auto object-cover group-hover:scale-[1.015] transition-transform duration-500" /></div>
   <div className="p-7"><h2 className="text-2xl font-bold text-[#164c34]">{p.title}</h2><p className="mt-2 text-[#36583b] italic">{p.subtitle}</p><span className="inline-block mt-5 bg-[#87c936] rounded-xl px-6 py-3 text-[#123d29] font-semibold">{p.action} →</span></div>
  </Link>)}
  </div></section>
 </div>;
}
