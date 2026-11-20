import { useEffect } from "react";
import { approvedImages } from "../data/approvedImages";
const recipes = [
  {title:"Moringa Green Chutney", image:approvedImages.dip, ingredients:"Fresh coriander, mint, green chilli, lemon juice, salt, water and a pinch of moringa leaf powder.", method:"Blend coriander, mint, chilli, lemon and a little water until smooth. Mix in the moringa powder and season to taste."},
  {title:"Moringa Vegetable Khichdi", image:approvedImages.dal, ingredients:"Rice, moong dal, carrots, peas, cumin, turmeric, ghee and a small amount of moringa leaf powder.", method:"Rinse rice and dal. Cook with vegetables, spices and water until soft. Mix moringa powder into a little water and stir through before serving."},
  {title:"Moringa Banana Smoothie", image:approvedImages.smoothie, ingredients:"Ripe banana, milk or unsweetened plant milk, plain curd if desired and a pinch of moringa leaf powder.", method:"Blend all ingredients until creamy. Serve immediately; add water or milk to adjust consistency."},
  {title:"Moringa Sattu Cooler", image:approvedImages.cooler, ingredients:"Roasted chana sattu, chilled water, lemon juice, roasted cumin, black salt and a pinch of moringa leaf powder.", method:"Whisk sattu with a little water to remove lumps. Stir in the remaining ingredients, top up with cold water and serve."},
  {title:"Moringa Raita", image:approvedImages.raita, ingredients:"Plain curd, grated cucumber, roasted cumin, salt, chopped coriander and a pinch of moringa leaf powder.", method:"Whisk the curd, squeeze excess water from cucumber and combine everything. Chill before serving."},

  {title:"Lemon-Mint Moringa Refresher", image:approvedImages.refresher, ingredients:"Cold water, lemon juice, fresh mint, a pinch of moringa leaf powder and optional honey.", method:"Stir moringa powder into a little water until smooth. Add lemon, mint and remaining chilled water; mix and serve."},
  {title:"Ginger-Lemon Moringa Shot", image:approvedImages.shot, ingredients:"Water, fresh ginger, lemon juice and a pinch of moringa leaf powder.", method:"Grate or crush ginger and steep briefly in water. Strain, cool, then whisk in lemon juice and moringa powder."},
  {title:"Moringa Dahi Dip", image:approvedImages.dip, ingredients:"Thick plain curd, cucumber, roasted cumin, mint, salt and a pinch of moringa leaf powder.", method:"Grate and squeeze the cucumber. Mix all ingredients into the curd and refrigerate before serving with vegetables or paratha."},
  {title:"Moringa Vegetable Sabzi", image:approvedImages.sabzi, ingredients:"Seasonal vegetables, onion, cumin, turmeric, salt, oil and a small amount of moringa leaf powder.", method:"Cook the vegetables with the spices until tender. Mix moringa powder with a spoonful of water, stir in near the end and cook briefly."},

  {title:"Moringa Paratha", image:approvedImages.paratha, ingredients:"Whole wheat flour, a small amount of moringa leaf powder, ajwain, salt and water.", method:"Mix the ingredients into a soft dough. Rest briefly, roll into parathas and cook on a hot tawa until done."},
  {title:"Moringa Dal", image:approvedImages.dal, ingredients:"Cooked moong or toor dal, turmeric, cumin, garlic and moringa leaf powder.", method:"Prepare dal as usual. Stir in a small amount of moringa powder near the end, simmer briefly and serve."},
  {title:"Moringa Chaas", image:approvedImages.chaas, ingredients:"Plain curd, water, roasted cumin, mint, salt and a pinch of moringa leaf powder.", method:"Whisk curd with water until smooth. Blend in the remaining ingredients and serve chilled."}
];
export default function Recipes(){
  useEffect(()=>{document.title="Recipes | Bio Periposa"},[]);
  return <div className="bg-brand-cream min-h-screen pt-24 pb-20 px-5">
    <div className="max-w-6xl mx-auto">
      <p className="text-brand-green uppercase tracking-widest font-semibold text-sm mb-3">From our kitchen</p>
      <h1 className="font-serif text-4xl md:text-6xl mb-4">Simple botanical recipes</h1>
      <p className="text-muted-foreground max-w-2xl mb-12">Explore twelve food and drink ideas using moringa leaf powder. Start with a small amount and adjust to taste.</p>
      <p className="text-xs text-muted-foreground mb-5">Images for green chutney and vegetable khichdi are illustrative serving suggestions.</p>
      <div className="grid md:grid-cols-3 gap-7">{recipes.map(r=><article key={r.title} className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm">
        <img src={r.image} alt={r.title+" prepared dish"} className="w-full h-52 object-cover"/>
        <div className="p-6"><h2 className="font-serif text-2xl mb-4">{r.title}</h2><h3 className="font-semibold mb-2">Ingredients</h3><p className="text-sm text-muted-foreground mb-5">{r.ingredients}</p><h3 className="font-semibold mb-2">Method</h3><p className="text-sm text-muted-foreground">{r.method}</p></div>
      </article>)}</div>

    </div>
  </div>
}