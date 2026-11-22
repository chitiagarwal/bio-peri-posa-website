import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
const wa="https://wa.me/919810859162";
const facts=[
 ["What does it taste like?","Earthy, a little grassy and mildly bitter, like other leafy greens. Start with a small amount in curd, dough or a lemon drink."],
 ["How should I store it?","Keep in a cool, dry place away from sunlight. Close the pouch tightly after each use."],
 ["Is it suitable for everyone?","Pregnant or nursing people, and anyone taking medication or managing a medical condition, should check with a qualified healthcare professional before use."],
 ["How do I know it is tested?","Use the Quality page to look up published batch reports when available."]
];
export default function MoringaDetail(){
 const [opened,setOpened]=useState<number[]>([]);
 const [labelSide,setLabelSide]=useState<"front"|"back">("front");
 useEffect(()=>{document.title="Moringa Leaf Powder | Bio Periposa";},[]);
 return <div className="bg-[#f9fff2] pt-24 text-[#17442f]">
 <div className="max-w-7xl mx-auto px-5 pt-4"><Link to="/products" className="text-sm underline">Products</Link> / Moringa Leaf Powder</div>
 <section className="max-w-7xl mx-auto px-5 py-10 grid lg:grid-cols-2 gap-12 items-center">
 <div className="rounded-[2rem] bg-transparent p-0">
 <button type="button" className="block w-full cursor-zoom-in overflow-hidden rounded-[1.5rem]" onClick={()=>setLabelSide(labelSide==="front"?"back":"front")} aria-label="View the other Moringa packaging label">
 <img src={labelSide==="front"?"/assets/BioPeriposa_Moringa_Front_Website.jpg":"/assets/BioPeriposa_Moringa_Back_Website.jpg"} alt={labelSide==="front"?"Bio Periposa Moringa pouch front packaging":"Bio Periposa Moringa pouch back packaging with printed ingredients and nutrition panel"} className="block w-full max-h-[650px] object-contain" />
 </button>
 <div className="mt-4 flex justify-center gap-3" role="group" aria-label="Select packaging image">
 {(["front","back"] as const).map(side=><button type="button" key={side} onClick={()=>setLabelSide(side)} aria-label={side==="front"?"View front pouch image":"View back pouch image"} aria-pressed={labelSide===side} className={`h-24 w-20 overflow-hidden rounded-xl border-2 bg-transparent p-0 transition-all ${labelSide===side?"border-[#17442f] shadow-md":"border-transparent hover:border-[#87c936]"}`}><img src={side==="front"?"/assets/BioPeriposa_Moringa_Front_Website.jpg":"/assets/BioPeriposa_Moringa_Back_Website.jpg"} alt="" className="h-full w-full object-cover" /></button>)}
 </div>
 </div>
 <div><h1 className="text-4xl md:text-6xl font-bold leading-tight">Organic Moringa Leaf Powder</h1><p className="text-lg mt-4">सहजन / Drumstick · <i>Moringa oleifera</i></p>
 <p className="text-4xl font-bold mt-7">₹289 <span className="text-sm font-normal">100 g pouch, including taxes</span></p>
 <p className="bg-[#e7f5d9] rounded-2xl p-4 mt-5 text-sm"><b>Members get discounts.</b> Message us to join. <b>Bulk orders:</b> pricing depends on quantity.</p>
 <div className="grid grid-cols-2 gap-3 text-sm mt-6"><p><b>Ingredient:</b> moringa leaf powder</p><p><b>Net quantity:</b> 100 g</p></div>
 <div className="mt-6 text-[#35583d]"><p className="leading-7">Want to know more about your pouch? Enter its batch number on our Quality page to check published reports when available, and learn how we approach sourcing and documentation. Visit the <Link to="/quality" className="font-semibold underline text-[#17442f] hover:text-[#3c7834]">Quality page</Link>.</p></div>
 <p className="mt-4 text-sm leading-6 text-[#35583d]">Ordering on WhatsApp: message us to confirm stock, delivery charges, payment details and dispatch estimates before paying. Ask us about any ingredient or batch questions first.</p><div className="flex flex-wrap gap-3 mt-7"><a className="bg-[#87c936] rounded-xl px-6 py-4 font-semibold" href={wa+"?text="+encodeURIComponent("Hello, I would like to order Moringa Leaf Powder 100 g.")} target="_blank" rel="noreferrer">Order on WhatsApp</a><Link to="/bulk-orders" className="border-2 border-[#87c936] rounded-xl px-6 py-4 font-semibold">Bulk enquiry</Link></div></div>
 </section>
 <section className="max-w-4xl mx-auto px-5 py-14 text-[#17442f]">
 <h2 className="text-3xl font-bold">About Moringa Leaf Powder</h2>
 <p className="mt-4 leading-8">Moringa leaf powder is made from dried, finely ground leaves of <i>Moringa oleifera</i>, commonly called सहजन / Drumstick. It has an earthy, leafy flavour and can be added to familiar everyday foods.</p>
 <h2 className="text-3xl font-bold mt-12">Key features</h2>
 <ul className="list-disc pl-7 mt-4 space-y-3 leading-8">
 <li>Single botanical ingredient: moringa leaf powder</li>
 <li>Finely ground dried leaves</li>
 <li>Naturally contains plant protein, dietary fibre and minerals</li>
 <li>Suitable for a range of everyday recipes</li>
 </ul>
 <h2 className="text-3xl font-bold mt-12">What is naturally present in moringa leaves?</h2>
 <p className="mt-4 leading-8">Moringa leaves naturally contain dietary fibre, plant protein and minerals including calcium, iron and potassium, along with vitamins and other plant compounds. Amounts vary with growing and processing conditions. Refer to the nutrition information printed on the back of our pouch for product-specific values.</p>
 <h2 className="text-3xl font-bold mt-12">How to use</h2>
 <p className="mt-4 leading-8">Try a small amount in curd, buttermilk or dal after cooking, or knead it into paratha dough. Start with a small quantity to get used to its naturally leafy taste.</p>
 <Link to="/recipes" className="inline-block bg-[#87c936] rounded-xl px-7 py-4 mt-5 font-semibold">Explore moringa recipes</Link>
 <h2 className="text-3xl font-bold mt-12 mb-5">Good to know</h2>{facts.map(([q,a],i)=><div key={q} className="bg-[#eef8e7] rounded-2xl mb-3"><button type="button" onClick={()=>setOpened(v=>v.includes(i)?v.filter(x=>x!==i):[...v,i])} className="w-full text-left flex justify-between p-5 font-semibold"><span>{q}</span><span>{opened.includes(i)?"−":"+"}</span></button>{opened.includes(i)&&<p className="px-5 pb-5 leading-7">{a}</p>}</div>)}<p className="text-xs text-[#6a846b] mt-10">General food information only; not medical advice.</p></section>
 </div>;
}
