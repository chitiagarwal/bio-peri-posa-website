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
 useEffect(()=>{document.title="Moringa Leaf Powder | Bio Periposa";},[]);
 return <div className="bg-[#f9fff2] pt-24 text-[#17442f]">
 <div className="max-w-7xl mx-auto px-5 pt-4"><Link to="/products" className="text-sm underline">Products</Link> / Moringa Leaf Powder</div>
 <section className="max-w-7xl mx-auto px-5 py-10 grid lg:grid-cols-2 gap-12 items-center">
 <div className="rounded-[2rem] bg-gradient-to-br from-[#e8f5d8] to-[#b9df95] p-5"><img src="/assets/generated/product-moringa.dim_600x480.jpg" alt="Moringa leaf powder product" className="w-full max-h-[550px] object-contain"/></div>
 <div><h1 className="text-4xl md:text-6xl font-bold leading-tight">Organic Moringa Leaf Powder</h1><p className="text-lg mt-4">सहजन पत्ती · Drumstick leaf · <i>Moringa oleifera</i></p>
 <p className="text-4xl font-bold mt-7">₹289 <span className="text-sm font-normal">100 g pouch, including taxes</span></p>
 <p className="bg-[#e7f5d9] rounded-2xl p-4 mt-5 text-sm"><b>Members get discounts.</b> Message us to join. <b>Bulk orders:</b> pricing depends on quantity.</p>
 <div className="grid grid-cols-2 gap-3 text-sm mt-6"><p><b>Ingredient:</b> moringa leaf powder</p><p><b>Net quantity:</b> 100 g</p><p><b>Best before:</b> Check pouch label</p><p><b>Batch information:</b> Available on request</p></div>
 <div className="flex flex-wrap gap-3 mt-7"><a className="bg-[#87c936] rounded-xl px-6 py-4 font-semibold" href={wa+"?text="+encodeURIComponent("Hello, I would like to order Moringa Leaf Powder 100 g.")} target="_blank" rel="noreferrer">Order on WhatsApp</a><Link to="/bulk-orders" className="border-2 border-[#87c936] rounded-xl px-6 py-4 font-semibold">Bulk enquiry</Link></div></div>
 </section>
 <section className="bg-[#184631] text-white py-14 px-5"><div className="max-w-6xl mx-auto"><h2 className="text-3xl md:text-4xl font-bold">Quality, testing and traceability</h2><p className="mt-4 max-w-3xl">We prioritise ingredient identity, supplier documentation and batch specific quality information. Our quality approach covers ingredient identity, supplier standards and batch traceability.</p><div className="grid md:grid-cols-3 gap-5 mt-9">{["Organic documentation","Manufacturing information","Batch laboratory reports"].map(t=><div className="bg-white text-[#17442f] rounded-2xl p-6" key={t}><h3 className="font-bold text-lg">{t}</h3><p className="text-sm mt-3">Learn about our approach to product quality and traceability.</p></div>)}</div><Link to="/quality" className="inline-block mt-6 underline text-[#b9e37d]">Quality information</Link></div></section>
 <section className="max-w-4xl mx-auto px-5 py-14"><h2 className="text-3xl font-bold">One plant, many names</h2><div className="flex flex-wrap gap-2 mt-4">{["सहजन · Hindi","शेवगा · Marathi","முருங்கை · Tamil","మునగ · Telugu","മുരിങ്ങ · Malayalam","સરગવો · Gujarati","ನುಗ್ಗೆ · Kannada","সজনে · Bengali"].map(t=><span className="rounded-full bg-[#e8f5d9] px-4 py-2 text-sm" key={t}>{t}</span>)}</div><p className="mt-5 leading-8">Moringa oleifera is a drumstick tree grown across India. Its leaves can be dried and finely milled into powder for use in everyday food.</p>
 <section aria-labelledby="moringa-nutrition" className="mt-12 rounded-3xl border border-[#c9dfba] bg-white p-6 md:p-8 shadow-sm">
 <h2 id="moringa-nutrition" className="text-3xl font-bold text-[#17442f]">Nutrition Information</h2>
 <p className="mt-3 text-[#36583d]">Serving size: 3 g · Servings per 100 g pack: approximately 33</p>
 <p className="mt-1 text-sm font-semibold text-[#36583d]">Typical values per 100 g</p>
 <div className="mt-5 overflow-x-auto"><table className="w-full text-left border-collapse"><thead><tr className="bg-[#e8f5d9]"><th scope="col" className="p-3 border-b border-[#b8d6a7]">Nutrient</th><th scope="col" className="p-3 border-b border-[#b8d6a7] text-right">Per 100 g</th></tr></thead><tbody>
 <tr><th scope="row" className="p-3 border-b border-[#e1ebda] font-medium">Energy</th><td className="p-3 border-b border-[#e1ebda] text-right">205 kcal</td></tr>
<tr><th scope="row" className="p-3 border-b border-[#e1ebda] font-medium">Protein</th><td className="p-3 border-b border-[#e1ebda] text-right">27.1 g</td></tr>
<tr><th scope="row" className="p-3 border-b border-[#e1ebda] font-medium">Total carbohydrate</th><td className="p-3 border-b border-[#e1ebda] text-right">38.2 g</td></tr>
<tr><th scope="row" className="p-3 border-b border-[#e1ebda] font-medium">Dietary fibre</th><td className="p-3 border-b border-[#e1ebda] text-right">19.2 g</td></tr>
<tr><th scope="row" className="p-3 border-b border-[#e1ebda] font-medium">Total fat</th><td className="p-3 border-b border-[#e1ebda] text-right">2.3 g</td></tr>
<tr><th scope="row" className="p-3 border-b border-[#e1ebda] font-medium">Calcium</th><td className="p-3 border-b border-[#e1ebda] text-right">2,003 mg</td></tr>
<tr><th scope="row" className="p-3 border-b border-[#e1ebda] font-medium">Iron</th><td className="p-3 border-b border-[#e1ebda] text-right">28.2 mg</td></tr>
<tr><th scope="row" className="p-3 border-b border-[#e1ebda] font-medium">Potassium</th><td className="p-3 border-b border-[#e1ebda] text-right">1,324 mg</td></tr>
 </tbody></table></div>
 <p className="mt-4 text-sm text-[#536b55]">Typical values; may vary slightly with crop and season. Source: Bio Periposa Moringa pouch back label.</p>
 </section>
 <h2 className="text-3xl font-bold mt-12">What is in the leaf?</h2><p className="mt-4 leading-8">Moringa leaves naturally contain dietary fibre and various nutrients. Amounts vary with crop, processing and serving size. Refer to the product's verified nutrition label for batch specific information.</p>
 <div className="bg-[#fff2cd] rounded-3xl p-7 mt-10"><h2 className="text-2xl font-bold">What about “superfood”?</h2><p className="mt-3 leading-8">“Superfood” is a popular description, not a medical classification. Moringa is a food ingredient, not a medicine. We do not make disease treatment claims.</p></div>
 <h2 className="text-3xl font-bold mt-12">Using it in your kitchen</h2><p className="mt-4 leading-8">Try a small amount in curd, buttermilk or dal after the heat is off, knead it into paratha dough or mix into a lemon and mint drink.</p><Link to="/recipes" className="inline-block bg-[#87c936] rounded-xl px-7 py-4 mt-5 font-semibold">See 12 moringa recipes</Link>
 <h2 className="text-3xl font-bold mt-12 mb-5">Good to know</h2>{facts.map(([q,a],i)=><div key={q} className="bg-[#eef8e7] rounded-2xl mb-3"><button type="button" onClick={()=>setOpened(v=>v.includes(i)?v.filter(x=>x!==i):[...v,i])} className="w-full text-left flex justify-between p-5 font-semibold"><span>{q}</span><span>{opened.includes(i)?"−":"+"}</span></button>{opened.includes(i)&&<p className="px-5 pb-5 leading-7">{a}</p>}</div>)}<p className="text-xs text-[#6a846b] mt-10">General food information only; not medical advice.</p></section>
 </div>;
}
