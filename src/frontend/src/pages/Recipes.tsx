import { useEffect } from "react";
const recipes = [
  {title:"Moringa Paratha", image:"/assets/generated/product-moringa.dim_600x480.jpg", ingredients:"Whole wheat flour, a small amount of moringa leaf powder, ajwain, salt and water.", method:"Mix the ingredients into a soft dough. Rest briefly, roll into parathas and cook on a hot tawa until done."},
  {title:"Moringa Dal", image:"/assets/generated/hero-herbal-collection.dim_800x600.jpg", ingredients:"Cooked moong or toor dal, turmeric, cumin, garlic and moringa leaf powder.", method:"Prepare dal as usual. Stir in a small amount of moringa powder near the end, simmer briefly and serve."},
  {title:"Moringa Chaas", image:"/assets/generated/hero-herbal-flatlay.dim_800x600.jpg", ingredients:"Plain curd, water, roasted cumin, mint, salt and a pinch of moringa leaf powder.", method:"Whisk curd with water until smooth. Blend in the remaining ingredients and serve chilled."}
];
export default function Recipes(){
  useEffect(()=>{document.title="Recipes | Bio Periposa"},[]);
  return <div className="bg-brand-cream min-h-screen pt-24 pb-20 px-5">
    <div className="max-w-6xl mx-auto">
      <p className="text-brand-green uppercase tracking-widest font-semibold text-sm mb-3">From our kitchen</p>
      <h1 className="font-serif text-4xl md:text-6xl mb-4">Simple botanical recipes</h1>
      <p className="text-muted-foreground max-w-2xl mb-12">Everyday ideas for using moringa leaf powder in familiar Indian foods. Start with a small amount and adjust to taste.</p>
      <div className="grid md:grid-cols-3 gap-7">{recipes.map(r=><article key={r.title} className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm">
        <img src={r.image} alt={r.title+" botanical ingredient reference"} className="w-full h-52 object-cover"/>
        <div className="p-6"><h2 className="font-serif text-2xl mb-4">{r.title}</h2><h3 className="font-semibold mb-2">Ingredients</h3><p className="text-sm text-muted-foreground mb-5">{r.ingredients}</p><h3 className="font-semibold mb-2">Method</h3><p className="text-sm text-muted-foreground">{r.method}</p></div>
      </article>)}</div>
      <p className="text-sm text-muted-foreground mt-8">Photographs are botanical ingredient references, not photographs of the finished dishes.</p>
    </div>
  </div>
}