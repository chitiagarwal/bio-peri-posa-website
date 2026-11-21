import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
export default function AshwagandhaDetail(){
 useEffect(()=>{document.title="Ashwagandha Root Powder Enquiry | Bio Periposa";},[]);
 return <div className="bg-[#fffdf5] pt-24 min-h-screen"><div className="max-w-7xl mx-auto px-5 pt-4 text-sm"><Link to="/products" className="underline">Products</Link> / Ashwagandha Root Powder</div>
 <section className="max-w-7xl mx-auto px-5 py-12 grid lg:grid-cols-2 gap-12 items-center">
 <div className="rounded-[2rem] bg-gradient-to-br from-[#fff4d8] to-[#eed8aa] p-6"><img src="/assets/generated/product-ashwagandha.dim_600x480.jpg" alt="Ashwagandha root powder product" className="w-full max-h-[550px] object-contain"/></div>
 <div><span className="inline-block bg-[#ffedb8] rounded-full px-4 py-2 text-sm font-semibold text-[#735322]">Available on enquiry</span><h1 className="text-4xl md:text-6xl font-bold text-[#17442f] leading-tight mt-5">Ashwagandha Root Powder</h1><p className="mt-4 text-lg text-[#526a55]">अश्वगंधा जड़ · <i>Withania somnifera</i></p>
 <p className="mt-7 text-lg leading-8">We are accepting enquiries for ashwagandha root powder. Contact us for availability, pack sizes and prices.</p>
 <p className="mt-5 text-sm text-[#526a55]">Root powder, not leaf powder. No ashwagandha recipes or online checkout are offered at this stage.</p>
 <div className="flex flex-wrap gap-3 mt-8"><a href={"https://wa.me/919810859162?text="+encodeURIComponent("Hello, I would like to enquire about Ashwagandha Root Powder, availability and specifications.")} target="_blank" rel="noreferrer" className="bg-[#87c936] rounded-xl px-7 py-4 font-semibold text-[#17442f]">Ask on WhatsApp</a><Link to="/contact" className="border-2 border-[#87c936] rounded-xl px-7 py-4 font-semibold text-[#17442f]">Send an enquiry</Link><Link to="/bulk-orders" className="border-2 border-[#d7b879] rounded-xl px-7 py-4 font-semibold text-[#17442f]">Bulk enquiry</Link></div></div></section>
 <section className="bg-[#f3f8e9] py-12 px-5"><div className="max-w-4xl mx-auto"><h2 className="text-3xl font-bold text-[#17442f]">Product information on request</h2><p className="mt-4 leading-8 text-[#526a55]">Explore the botanical identity, available grades, packaging options and quality approach for Ashwagandha Root Powder.</p></div></section></div>;
}
