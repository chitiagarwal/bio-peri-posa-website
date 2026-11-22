import { useEffect } from "react";
import { approvedImages } from "../data/approvedImages";
const recipes = [
  {title:"Moringa Green Chutney", image:"https://images.pexels.com/photos/37845143/pexels-photo-37845143.jpeg?auto=compress&cs=tinysrgb&w=1200", ingredients:"Fresh coriander, mint, green chilli, lemon juice, salt, water and a pinch of moringa leaf powder.", method:"Blend coriander, mint, chilli, lemon and a little water until smooth. Mix in the moringa powder and season to taste."},
  {title:"Moringa Vegetable Khichdi", image:"https://clubmahindra.gumlet.io/blog/images/Khichdi-resized.jpg?dpr=2.6&w=376", ingredients:"Rice, moong dal, carrots, peas, cumin, turmeric, ghee and a small amount of moringa leaf powder.", method:"Rinse rice and dal. Cook with vegetables, spices and water until soft. Mix moringa powder into a little water and stir through before serving."},
  {title:"Moringa Banana Smoothie", image:"https://greggwallace.health/cdn/shop/articles/green_brekfast_smoothie_ccaae211-cb69-4f28-a70b-0ec1a4b8d037.png?v=1765991961", ingredients:"Ripe banana, milk or unsweetened plant milk, plain curd if desired and a pinch of moringa leaf powder.", method:"Blend all ingredients until creamy. Serve immediately; add water or milk to adjust consistency."},
  {title:"Moringa Sattu Cooler", image:approvedImages.cooler, ingredients:"Roasted chana sattu, chilled water, lemon juice, roasted cumin, black salt and a pinch of moringa leaf powder.", method:"Whisk sattu with a little water to remove lumps. Stir in the remaining ingredients, top up with cold water and serve."},
  {title:"Moringa Raita", image:approvedImages.raita, ingredients:"Plain curd, grated cucumber, roasted cumin, salt, chopped coriander and a pinch of moringa leaf powder.", method:"Whisk the curd, squeeze excess water from cucumber and combine everything. Chill before serving."},

  {title:"Lemon and Mint Moringa Refresher", image:approvedImages.refresher, ingredients:"Serves 1: 200 ml chilled water, 1 tbsp fresh lemon juice, 5–6 mint leaves, 1/4 tsp moringa leaf powder, ice and optional honey to taste.", method:"Whisk moringa powder with 2 tbsp water until smooth. Lightly muddle the mint, add lemon juice and remaining water, then stir in the moringa mixture. Add ice and serve immediately."},
  {title:"Ginger and Lemon Moringa Shot", image:approvedImages.shot, ingredients:"Makes 1 small shot: 50 ml drinking water, 1/2 tsp finely grated fresh ginger, 1 tsp lemon juice and 1/8 tsp moringa leaf powder.", method:"Steep ginger in the water for 3–5 minutes and strain. Allow to cool, whisk in the moringa powder until smooth, then stir in lemon juice. Serve fresh."},
  {title:"Moringa Dahi Dip", image:approvedImages.dip, ingredients:"Serves 2–3: 1 cup thick plain curd, 1/4 cup finely grated cucumber, 1 tbsp chopped mint, 1/4 tsp roasted cumin, 1/4 tsp moringa leaf powder and salt to taste.", method:"Squeeze excess liquid from the cucumber. Whisk curd until creamy, mix in cucumber, mint, cumin, moringa powder and salt. Refrigerate for 15 minutes; serve with fresh vegetable sticks or paratha."},
  {title:"Moringa Vegetable Sabzi", image:approvedImages.sabzi, ingredients:"Serves 2: 2 cups chopped mixed vegetables (cauliflower, carrot, beans and peas), 1 small onion, 1 tbsp oil, 1/2 tsp cumin, 1/4 tsp turmeric, 1/4 tsp moringa leaf powder, salt and a splash of water.", method:"Heat oil and crackle cumin; sauté chopped onion until translucent. Add vegetables, turmeric, salt and a splash of water. Cover and cook until tender. Mix moringa powder with 1 tbsp water, stir through the cooked vegetables and heat briefly before serving."},

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
      <p className="text-muted-foreground max-w-2xl mb-12">Already making dal, raita, paratha or chaas at home? Explore familiar recipes where you can try a small amount of moringa leaf powder. Start with a pinch and adjust to your taste.</p>
      <div className="grid md:grid-cols-3 gap-7">{recipes.map(r=><article key={r.title} className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm">
        <img src={r.image} alt={r.title+" prepared dish"} className="w-full h-52 object-cover"/>
        <div className="p-6"><h2 className="font-serif text-2xl mb-4">{r.title}</h2><h3 className="font-semibold mb-2">Ingredients</h3><p className="text-sm text-muted-foreground mb-5">{r.ingredients}</p><h3 className="font-semibold mb-2">Method</h3><p className="text-sm text-muted-foreground">{r.method}</p></div>
      </article>)}</div>

    </div>
  </div>
}