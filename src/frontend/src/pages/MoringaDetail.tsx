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
 <div className="rounded-[2rem] bg-[#dceecb] p-4 md:p-6">
 <button type="button" className="block w-full cursor-zoom-in" onClick={()=>setLabelSide(labelSide==="front"?"back":"front")} aria-label="View the other Moringa packaging label">
 <img src={labelSide==="front"?"/assets/moringa-pouch-front-v4..png":"/assets/moringa-pouch-back-v19..png"} alt={labelSide==="front"?"Bio Periposa Moringa pouch front packaging":"Bio Periposa Moringa pouch back packaging with printed ingredients and nutrition panel"} className="w-full max-h-[650px] object-contain mix-blend-multiply" />
 </button>
 <div className="mt-4 flex justify-center gap-3" role="group" aria-label="Select packaging image">
 {(["front","back"] as const).map(side=><button type="button" key={side} onClick={()=>setLabelSide(side)} aria-label={side==="front"?"View front pouch image":"View back pouch image"} aria-pressed={labelSide===side} className={`h-24 w-20 overflow-hidden rounded-xl border-2 bg-[#dceecb] p-1 transition-all ${labelSide===side?"border-[#17442f] shadow-md":"border-transparent hover:border-[#87c936]"}`}><img src={side==="front"?"/assets/moringa-pouch-front-v4..png":"/assets/moringa-pouch-back-v19..png"} alt="" className="h-full w-full object-contain mix-blend-multiply" /></button>)}
 </div>
 </div>
 <div><h1 className="text-4xl md:text-6xl font-bold leading-tight">Organic Moringa Leaf Powder</h1><p className="text-lg mt-4">सहजन पत्ती · Drumstick leaf · <i>Moringa oleifera</i></p>
 <p className="text-4xl font-bold mt-7">₹289 <span className="text-sm font-normal">100 g pouch, including taxes</span></p>
 <p className="bg-[#e7f5d9] rounded-2xl p-4 mt-5 text-sm"><b>Members get discounts.</b> Message us to join. <b>Bulk orders:</b> pricing depends on quantity.</p>
 <div className="grid grid-cols-2 gap-3 text-sm mt-6"><p><b>Ingredient:</b> moringa leaf powder</p><p><b>Net quantity:</b> 100 g</p></div>
 <div className="mt-6 text-[#35583d]"><p className="leading-7">We prioritise quality, testing and traceability. Find available batch laboratory reports and quality information on our <Link to="/quality" className="font-semibold underline text-[#17442f] hover:text-[#3c7834]">Quality page</Link>.</p></div>
 <div className="flex flex-wrap gap-3 mt-7"><a className="bg-[#87c936] rounded-xl px-6 py-4 font-semibold" href={wa+"?text="+encodeURIComponent("Hello, I would like to order Moringa Leaf Powder 100 g.")} target="_blank" rel="noreferrer">Order on WhatsApp</a><Link to="/bulk-orders" className="border-2 border-[#87c936] rounded-xl px-6 py-4 font-semibold">Bulk enquiry</Link></div></div>
 </section>
 <section className="max-w-4xl mx-auto px-5 py-14"><h2 className="text-3xl font-bold">One plant, many names</h2><div className="flex flex-wrap gap-2 mt-4">{["सहजन · Hindi","शेवगा · Marathi","முருங்கை · Tamil","మునగ · Telugu","മുരിങ്ങ · Malayalam","સરગવો · Gujarati","ನುಗ್ಗೆ · Kannada","সজনে · Bengali"].map(t=><span className="rounded-full bg-[#e8f5d9] px-4 py-2 text-sm" key={t}>{t}</span>)}</div><p className="mt-5 leading-8">Moringa oleifera is a drumstick tree grown across India. Its leaves can be dried and finely milled into powder for use in everyday food.</p>
 <h2 className="text-3xl font-bold mt-12">What is in a moringa leaf?</h2><p className="mt-4 leading-8">Moringa leaves are the edible leaves of the <i>Moringa oleifera</i> tree. They naturally contain dietary fibre, plant protein and minerals such as calcium, iron and potassium, along with various vitamins and plant compounds. The amounts in dried leaf powder vary with growing conditions, harvesting and processing. For the product-specific nutritional values, see the nutrition information printed on the back of the pouch.</p>
 <h2 className="text-3xl font-bold mt-12">Moringa as an everyday green food</h2><p className="mt-4 leading-8">Moringa leaf powder is simply dried, finely ground moringa leaves. Its earthy, leafy flavour makes it an ingredient you can add in small amounts to familiar foods. It is a food, not a medicine, and is best enjoyed as part of a varied, balanced diet.</p>
 <h2 className="text-3xl font-bold mt-12">Using it in your kitchen</h2><p className="mt-4 leading-8">Try a small amount in curd, buttermilk or dal after the heat is off, knead it into paratha dough or mix into a lemon and mint drink.</p><Link to="/recipes" className="inline-block bg-[#87c936] rounded-xl px-7 py-4 mt-5 font-semibold">See 12 moringa recipes</Link>
 <h2 className="text-3xl font-bold mt-12 mb-5">Good to know</h2>{facts.map(([q,a],i)=><div key={q} className="bg-[#eef8e7] rounded-2xl mb-3"><button type="button" onClick={()=>setOpened(v=>v.includes(i)?v.filter(x=>x!==i):[...v,i])} className="w-full text-left flex justify-between p-5 font-semibold"><span>{q}</span><span>{opened.includes(i)?"−":"+"}</span></button>{opened.includes(i)&&<p className="px-5 pb-5 leading-7">{a}</p>}</div>)}<p className="text-xs text-[#6a846b] mt-10">General food information only; not medical advice.</p></section>
 </div>;
}
