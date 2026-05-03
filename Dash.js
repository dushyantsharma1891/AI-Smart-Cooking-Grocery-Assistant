
/* ══════════ DATA ══════════ */
const RDB=[
  {id:1,name:"Paneer Butter Masala",e:"🍛",t:"30 min",tm:30,c:"420 kcal",diet:"veg",d:"Medium",stars:4.8,desc:"Creamy tomato-based paneer curry, rich and aromatic.",
   ingredients:["200g paneer","2 tomatoes","1 onion","2 tbsp butter","1 tsp garam masala","1 cup cream","Salt"],
   steps:["Blend tomatoes and onions.","Heat butter, fry paste 5 min.","Add garam masala & salt.","Add paneer and cream, simmer 10 min.","Garnish with coriander."]},
  {id:2,name:"Dal Tadka",e:"🥘",t:"25 min",tm:25,c:"310 kcal",diet:"veg",d:"Easy",stars:4.7,desc:"Protein-rich lentil dish tempered with cumin and garlic.",
   ingredients:["1 cup yellow dal","1 tomato","2 garlic cloves","1 tsp cumin","1 tsp turmeric","2 tbsp ghee","Salt"],
   steps:["Pressure cook dal with turmeric.","Heat ghee, add cumin & garlic.","Add tomato, cook 3 min.","Pour tadka over dal.","Serve hot."]},
  {id:3,name:"Chicken Biryani",e:"🍚",t:"55 min",tm:55,c:"650 kcal",diet:"nonveg",d:"Hard",stars:4.9,desc:"Fragrant basmati rice cooked with spiced chicken.",
   ingredients:["500g chicken","2 cups basmati rice","1 cup yogurt","2 onions","Biryani masala","Saffron","Mint"],
   steps:["Marinate chicken 30 min.","Cook rice 70% done.","Layer chicken and rice.","Dum cook 25 min.","Serve with raita."]},
  {id:4,name:"Egg Bhurji",e:"🍳",t:"15 min",tm:15,c:"280 kcal",diet:"egg",d:"Easy",stars:4.5,desc:"Spiced scrambled eggs with onions, tomatoes & chillies.",
   ingredients:["3 eggs","1 onion","1 tomato","2 green chillies","1 tsp cumin","Oil","Salt"],
   steps:["Heat oil, add cumin.","Sauté onion & chillies 3 min.","Add tomato.","Add beaten eggs, scramble.","Season and serve."]},
  {id:5,name:"Aloo Gobi",e:"🥦",t:"30 min",tm:30,c:"220 kcal",diet:"jain",d:"Easy",stars:4.4,desc:"Classic potato and cauliflower sabzi without onion-garlic.",
   ingredients:["2 potatoes","1 cauliflower","1 tsp cumin","1 tsp turmeric","Coriander powder","Oil","Salt"],
   steps:["Cut vegetables.","Heat oil, add cumin.","Add potato, cook 5 min.","Add cauliflower & spices.","Cover and cook 15 min."]},
  {id:6,name:"Butter Chicken",e:"🍗",t:"45 min",tm:45,c:"560 kcal",diet:"nonveg",d:"Medium",stars:4.9,desc:"Tender chicken in a velvety makhani sauce.",
   ingredients:["500g chicken","2 tomatoes","1 cup cream","2 tbsp butter","Kashmiri chilli","Garam masala","Salt"],
   steps:["Marinate and grill chicken.","Blend tomatoes with butter.","Cook gravy 10 min.","Add grilled chicken.","Finish with cream."]},
  {id:7,name:"Palak Paneer",e:"🌿",t:"35 min",tm:35,c:"380 kcal",diet:"veg",d:"Medium",stars:4.6,desc:"Cottage cheese cubes in a silky spinach gravy.",
   ingredients:["200g paneer","2 cups spinach","1 onion","2 garlic cloves","Ginger","Cream","Spices"],
   steps:["Blanch spinach, blend.","Sauté onion, garlic, ginger.","Add spinach puree.","Add paneer cubes.","Finish with cream."]},
  {id:8,name:"Masala Omelette",e:"🥚",t:"10 min",tm:10,c:"240 kcal",diet:"egg",d:"Easy",stars:4.3,desc:"Mumbai-style spicy omelette served with bread.",
   ingredients:["2 eggs","1 small onion","1 green chilli","Coriander","Oil","Salt & pepper"],
   steps:["Beat eggs with seasoning.","Add onion, chilli, coriander.","Heat oil in pan.","Pour mix, cook medium heat.","Fold and serve with toast."]},
];

const NUTR=[{n:"Protein",v:72,col:"#16a34a"},{n:"Carbohydrates",v:58,col:"#f59e0b"},{n:"Fats",v:44,col:"#ef4444"},{n:"Fibre",v:81,col:"#2563eb"}];
const VITS=[{n:"Vitamin C",v:65,col:"#f97316"},{n:"Vitamin D",v:30,col:"#eab308"},{n:"Iron",v:58,col:"#dc2626"},{n:"Calcium",v:70,col:"#8b5cf6"}];
const NOTIFS=[
  {ico:"🍳",title:"New recipe added!",sub:"Try our new Chole Bhature",time:"2m ago",unread:true},
  {ico:"💧",title:"Hydration reminder",sub:"Only 4 glasses today",time:"1h ago",unread:true},
  {ico:"🛒",title:"Grocery reminder",sub:"Milk is running low",time:"3h ago",unread:true},
  {ico:"🎉",title:"Milestone reached!",sub:"10 meals cooked this month!",time:"Yesterday",unread:false},
];
const ACTS=[
  {ico:"🍛",bg:"#dcfce7",title:"Cooked Paneer Butter Masala",time:"Today, 1:30 PM",right:"420 kcal"},
  {ico:"🛒",bg:"#dbeafe",title:"Updated grocery list",time:"Today, 11:00 AM",right:"5 items"},
  {ico:"💧",bg:"#e0f2fe",title:"Logged 6 glasses of water",time:"Today, 9:00 AM",right:"75% goal"},
  {ico:"🥘",bg:"#fef3c7",title:"Cooked Dal Tadka",time:"Yesterday, 7:30 PM",right:"310 kcal"},
];
const SPICE_LABELS=["","😌 Mild","🙂 Light Spicy","😋 Medium Spice","🥵 Hot","🔥 Extra Hot"];

/* ═══════════════════════════════════
   SPECIFIC RECIPE TEMPLATES
   Each dish has exact ingredients with
   proper quantities, emojis & prices
═══════════════════════════════════ */
const RTPL = {
  "Paneer Butter Masala": {
    ingr:[
      {e:"🧀",name:"Paneer",qty:"per",unit:"g",base:200,price:3.5,note:"Fresh or frozen"},
      {e:"🍅",name:"Ripe Tomatoes",qty:"per",unit:"pcs",base:3,price:5,note:"Medium size"},
      {e:"🧅",name:"Onion",qty:"per",unit:"pcs",base:1,price:8,note:"Large"},
      {e:"🧈",name:"Butter",qty:"flat",unit:"tbsp",base:3,price:0,note:"Unsalted preferred"},
      {e:"🥛",name:"Fresh Cream",qty:"flat",unit:"ml",base:100,price:0,note:"Amul or similar"},
      {e:"🌰",name:"Cashews",qty:"flat",unit:"g",base:20,price:1.5,note:"For richness"},
      {e:"🧄",name:"Ginger-Garlic Paste",qty:"flat",unit:"tsp",base:2,price:0},
      {e:"🌶️",name:"Kashmiri Chilli Powder",qty:"spice",unit:"tsp",base:1,price:0,note:"For colour"},
      {e:"🫙",name:"Garam Masala",qty:"flat",unit:"tsp",base:1,price:0},
      {e:"🌿",name:"Kasuri Methi",qty:"flat",unit:"tsp",base:1,price:0,note:"Dried fenugreek"},
      {e:"🧂",name:"Salt",qty:"flat",unit:"to taste",base:0,price:0},
    ],
    steps:["Soak 20g cashews in warm water 10 min. Blend with tomatoes to a smooth paste.","Heat 2 tbsp butter in a heavy pan. Add onions, fry until golden brown (~8 min).","Add ginger-garlic paste, sauté 2 min until raw smell disappears.","Add the tomato-cashew paste. Cook on medium heat 10 min until oil separates.","Add Kashmiri chilli powder, garam masala, salt. Stir and cook 2 min.","Add cubed paneer gently. Toss to coat.","Add fresh cream, lower heat. Simmer 3 min — do not boil.","Crush kasuri methi between palms, sprinkle on top.","Garnish with a swirl of cream. Serve hot with naan or steamed rice."],
    tips:"Pan-fry paneer cubes in 1 tbsp butter until golden before adding to gravy — it adds a beautiful crust and prevents crumbling.",
    time:"30 min",cal:"420 kcal",nut:{protein:"18g",carbs:"22g",fat:"28g",fibre:"4g"}
  },
  "Dal Tadka": {
    ingr:[
      {e:"🫘",name:"Yellow Moong/Toor Dal",qty:"per",unit:"g",base:100,price:1.5},
      {e:"🍅",name:"Tomato",qty:"per",unit:"pcs",base:1,price:5},
      {e:"🧅",name:"Onion",qty:"per",unit:"pcs",base:1,price:8},
      {e:"🧄",name:"Garlic Cloves",qty:"per",unit:"cloves",base:4,price:0},
      {e:"🫚",name:"Ghee",qty:"flat",unit:"tbsp",base:2,price:0},
      {e:"🌿",name:"Cumin Seeds",qty:"flat",unit:"tsp",base:1,price:0},
      {e:"🌶️",name:"Dry Red Chillies",qty:"spice",unit:"pcs",base:2,price:0},
      {e:"💛",name:"Turmeric Powder",qty:"flat",unit:"tsp",base:0.5,price:0},
      {e:"🌿",name:"Fresh Coriander",qty:"flat",unit:"handful",base:1,price:0},
      {e:"🧂",name:"Salt",qty:"flat",unit:"to taste",base:0,price:0},
    ],
    steps:["Wash dal thoroughly. Pressure cook with turmeric, salt and 2.5 cups water for 3-4 whistles.","Mash the cooked dal lightly. Add water to adjust consistency.","Heat ghee in a small tadka pan until hot.","Add cumin seeds — let them splutter 10 seconds.","Add sliced garlic, fry until golden. Add dry red chillies.","Add chopped onion, cook until translucent.","Add chopped tomato, cook until soft.","Pour the hot tadka directly over the dal. Mix gently.","Garnish with fresh coriander. Serve with rice or roti."],
    tips:"The tadka should be very hot when poured over dal — the sizzle is key! Use ghee over oil for authentic flavour.",
    time:"25 min",cal:"310 kcal",nut:{protein:"14g",carbs:"44g",fat:"8g",fibre:"12g"}
  },
  "Chicken Biryani": {
    ingr:[
      {e:"🍗",name:"Chicken (curry cut)",qty:"per",unit:"g",base:250,price:2.5},
      {e:"🍚",name:"Basmati Rice",qty:"per",unit:"g",base:125,price:0.8},
      {e:"🧅",name:"Onions (for frying)",qty:"per",unit:"pcs",base:2,price:5},
      {e:"🍶",name:"Yogurt",qty:"flat",unit:"g",base:100,price:0},
      {e:"🌿",name:"Biryani Masala",qty:"spice",unit:"tbsp",base:2,price:0},
      {e:"🌸",name:"Saffron",qty:"flat",unit:"pinch",base:1,price:0},
      {e:"🥛",name:"Warm Milk (for saffron)",qty:"flat",unit:"tbsp",base:3,price:0},
      {e:"🌿",name:"Fresh Mint Leaves",qty:"flat",unit:"handful",base:1,price:0},
      {e:"🫚",name:"Oil / Ghee",qty:"flat",unit:"tbsp",base:4,price:0},
      {e:"🍋",name:"Lemon Juice",qty:"flat",unit:"tbsp",base:1,price:0},
      {e:"🧂",name:"Salt",qty:"flat",unit:"to taste",base:0,price:0},
    ],
    steps:["Marinate chicken with yogurt, biryani masala, lemon juice, salt for minimum 1 hour.","Soak saffron in warm milk for 20 min.","Fry sliced onions in hot oil until crispy golden. Drain on paper.","Parboil rice 70% done with whole spices. Drain completely.","In a heavy pot, layer: chicken at bottom, half rice, fried onions, mint.","Add remaining rice, pour saffron milk on top. Add ghee.","Seal with foil then lid. Dum cook on very low flame 25 min.","Let rest 10 min before opening. Gently mix from edges.","Serve with raita, sliced onions and lemon wedges."],
    tips:"Sealing the pot tightly (dum) is the secret to authentic biryani. Use a heavy iron pot or Dutch oven for best results.",
    time:"55 min",cal:"650 kcal",nut:{protein:"32g",carbs:"72g",fat:"22g",fibre:"3g"}
  },
  "Butter Chicken": {
    ingr:[
      {e:"🍗",name:"Boneless Chicken",qty:"per",unit:"g",base:250,price:2.5,note:"Thigh preferred"},
      {e:"🍅",name:"Tomatoes",qty:"per",unit:"pcs",base:3,price:5},
      {e:"🧅",name:"Onion",qty:"per",unit:"pcs",base:1,price:8},
      {e:"🧈",name:"Butter",qty:"flat",unit:"tbsp",base:3,price:0},
      {e:"🥛",name:"Fresh Cream",qty:"flat",unit:"ml",base:100,price:0},
      {e:"🧄",name:"Ginger-Garlic Paste",qty:"flat",unit:"tbsp",base:1,price:0},
      {e:"🌶️",name:"Kashmiri Chilli Powder",qty:"spice",unit:"tsp",base:1.5,price:0},
      {e:"🫙",name:"Garam Masala",qty:"flat",unit:"tsp",base:1,price:0},
      {e:"🍶",name:"Yogurt (for marinade)",qty:"flat",unit:"tbsp",base:3,price:0},
      {e:"🌿",name:"Kasuri Methi",qty:"flat",unit:"tsp",base:1,price:0},
      {e:"🧂",name:"Salt & Sugar",qty:"flat",unit:"to taste",base:0,price:0},
    ],
    steps:["Marinate chicken with yogurt, ginger-garlic paste, chilli powder, salt. Rest 1 hour.","Grill or pan-fry chicken on high heat until charred edges appear. Set aside.","Heat butter, add onions. Cook until very soft and golden (~12 min).","Add tomatoes. Cook until completely mushy and oil separates.","Blend to a smooth sauce. Strain for restaurant-smooth texture.","Return to heat. Add chilli powder, garam masala, pinch of sugar.","Add grilled chicken pieces. Simmer 10 min in gravy.","Pour cream, lower flame. Simmer 3-4 min — do not boil.","Crush kasuri methi on top. Garnish with cream swirl. Serve."],
    tips:"The charred grilled chicken makes all the difference. Don't skip the grill step — it adds a smoky depth that defines this dish.",
    time:"45 min",cal:"560 kcal",nut:{protein:"35g",carbs:"18g",fat:"38g",fibre:"4g"}
  },
  "Palak Paneer": {
    ingr:[
      {e:"🧀",name:"Paneer",qty:"per",unit:"g",base:200,price:3.5},
      {e:"🥬",name:"Fresh Spinach",qty:"per",unit:"g",base:250,price:1.5},
      {e:"🧅",name:"Onion",qty:"per",unit:"pcs",base:1,price:8},
      {e:"🍅",name:"Tomato",qty:"per",unit:"pcs",base:1,price:5},
      {e:"🧄",name:"Garlic Cloves",qty:"flat",unit:"cloves",base:4,price:0},
      {e:"🌿",name:"Ginger",qty:"flat",unit:"inch",base:1,price:0},
      {e:"🥛",name:"Fresh Cream",qty:"flat",unit:"tbsp",base:2,price:0},
      {e:"🫙",name:"Garam Masala",qty:"flat",unit:"tsp",base:0.5,price:0},
      {e:"🌶️",name:"Green Chillies",qty:"spice",unit:"pcs",base:2,price:0},
      {e:"🫚",name:"Oil / Butter",qty:"flat",unit:"tbsp",base:2,price:0},
      {e:"🧂",name:"Salt",qty:"flat",unit:"to taste",base:0,price:0},
    ],
    steps:["Blanch spinach in boiling water 2 min. Immediately transfer to ice-cold water (retains colour).","Drain and blend spinach with green chillies to smooth puree.","Heat oil, sauté onion until golden. Add garlic and ginger, cook 2 min.","Add chopped tomato, cook until soft. Add spices.","Pour spinach puree. Mix well. Simmer 5 min.","Add paneer cubes (lightly pan-fried if preferred).","Add cream, stir gently on low heat 2 min.","Adjust salt and spice. Serve hot with roti."],
    tips:"The ice bath after blanching is essential — it locks in the vivid green colour. Never overcook the spinach once pureed.",
    time:"35 min",cal:"380 kcal",nut:{protein:"20g",carbs:"14g",fat:"26g",fibre:"8g"}
  },
};

function makeGenericTemplate(dish,people,spice){
  return{
    ingr:[
      {e:"🍲",name:"Main ingredient ("+dish+")",qty:"per",unit:"g",base:200,price:3},
      {e:"🧅",name:"Onions",qty:"per",unit:"pcs",base:2,price:5},
      {e:"🍅",name:"Tomatoes",qty:"per",unit:"pcs",base:2,price:5},
      {e:"🧄",name:"Ginger-Garlic Paste",qty:"flat",unit:"tbsp",base:2,price:0},
      {e:"🫚",name:"Oil / Ghee",qty:"flat",unit:"tbsp",base:3,price:0},
      {e:"🌶️",name:"Red Chilli Powder",qty:"spice",unit:"tsp",base:spice,price:0},
      {e:"💛",name:"Turmeric Powder",qty:"flat",unit:"tsp",base:0.5,price:0},
      {e:"🫙",name:"Garam Masala",qty:"flat",unit:"tsp",base:1,price:0},
      {e:"🌿",name:"Coriander Powder",qty:"flat",unit:"tsp",base:1,price:0},
      {e:"🌿",name:"Fresh Coriander (garnish)",qty:"flat",unit:"handful",base:1,price:0},
      {e:"🧂",name:"Salt",qty:"flat",unit:"to taste",base:0,price:0},
    ],
    steps:[
      "Heat oil/ghee in a heavy-bottomed pan on medium heat.",
      "Add finely chopped onions. Fry until golden brown (8–10 min).",
      "Add ginger-garlic paste. Sauté 2 min until raw smell disappears.",
      "Add chopped tomatoes. Cook until soft and oil separates (5–6 min).",
      "Add turmeric, chilli powder, coriander powder. Stir and cook 1 min.",
      "Add the main ingredient. Coat well with the masala.",
      "Add ½ cup water per person. Cover and cook on low-medium heat 12–15 min.",
      "Add garam masala. Check seasoning and adjust.",
      "Garnish with fresh coriander. Serve hot with rice, roti or naan.",
    ],
    tips:"Always bloom spices in oil before adding wet ingredients for maximum flavour. Taste and adjust seasoning at the very end.",
    time:"35 min",cal:"380 kcal",nut:{protein:"15g",carbs:"35g",fat:"18g",fibre:"6g"}
  };
}

/* ══════════ STATE ══════════ */
let groceries=[{id:1,text:"Onions",done:false},{id:2,text:"Tomatoes",done:false},{id:3,text:"Paneer 200g",done:true}];
let meals=[{id:1,text:"Breakfast – Poha 250 kcal",done:false}];
let cartItems=[],gc=4,mc=2,wg=6;
let likedIds=new Set(),sideOpen=true,chatTyping=false,pplCount=2;
let timerSec=0,timerMax=0,timerInt=null,timerRunning=false;

/* ══════════ INIT ══════════ */
window.addEventListener("DOMContentLoaded",()=>{
  const name=localStorage.getItem("userName")||"Chef";
  const diet=localStorage.getItem("userDiet")||"veg";
  document.getElementById("wuser").textContent="👋 Welcome back, "+name+"!";
  document.getElementById("navName").textContent=name.split(" ")[0];
  document.getElementById("navAv").textContent=name.charAt(0).toUpperCase();
  const dm={veg:"🥦 Vegetarian recipes crafted just for you.",nonveg:"🍗 Non-veg recipes and nutrition insights.",egg:"🥚 Eggetarian meal ideas ready for today.",jain:"🪷 Pure Jain recipes — wholesome and delicious."};
  document.getElementById("dinfo").textContent=dm[diet]||"Personalised recipes for you.";
  const tm={nonveg:"dnv",egg:"deg",jain:"djn"};
  if(tm[diet]) document.getElementById("body").classList.add(tm[diet]);
  if(localStorage.getItem("darkMode")==="true"){document.getElementById("body").classList.add("dark");document.getElementById("dkbtn").textContent="☀️";}
  document.getElementById("gDiet").value={veg:"Vegetarian",nonveg:"Non-Vegetarian",egg:"Eggetarian",jain:"Jain"}[diet]||"Vegetarian";
  renderR("rg1","fc1","");renderR("rg2","fc2","");
  renderG("gl1");renderG("gl2");
  renderNB("nb1",NUTR);renderNB("nb2",NUTR);renderNB("nb3",NUTR);renderNB("nb4",VITS);
  renderMealDays();renderNotifs();renderActs();renderMealLog();renderHydration();
  loadProfile();renderCart();
});

/* ══════════ SECTIONS ══════════ */
function showSec(n){
  const secs=["home","recipes","planner","diet","nutri","hydro","groc","activity"];
  secs.forEach(s=>{document.getElementById("sec-"+s).style.display=s===n?"":"none";});
  // show banner only on home
  document.getElementById("bannerWrap").style.display=n==="home"?"":"none";
  window.scrollTo({top:0,behavior:"smooth"});
  // page title in shdr
  const titles={recipes:"All Recipes",planner:"📅 Meal Planner",diet:"🥗 Diet Tracker",nutri:"📊 Nutrition",hydro:"💧 Hydration",groc:"🛒 Grocery List",activity:"⚡ Activity"};
}

/* ══════════ RECIPE CARDS ══════════ */
const BL={veg:"🥦 Veg",nonveg:"🍗 Non-Veg",egg:"🥚 Egg",jain:"🪷 Jain"};
const BC={veg:"",nonveg:"nv",egg:"eg",jain:"jn"};

function rCard(r){
  const f="★".repeat(Math.floor(r.stars))+"☆".repeat(5-Math.floor(r.stars));
  return`<div class="rcard" onclick="openMod(${r.id})">
    <div class="rthumb">
      <span class="rthumb-emoji">${r.e}</span>
      <button class="rfav ${likedIds.has(r.id)?"liked":""}" onclick="event.stopPropagation();toggleFav(${r.id},this)">${likedIds.has(r.id)?"❤️":"🤍"}</button>
      <div class="rtime-badge">⏱ ${r.t}</div>
    </div>
    <div class="rinfo">
      <h4>${r.name}</h4>
      <div class="rmeta"><span class="rbadge ${BC[r.diet]}">${BL[r.diet]}</span><span style="font-size:.72rem;font-weight:700;color:var(--muted)">${r.d}</span></div>
      <div style="font-size:.72rem;color:var(--muted);margin-top:3px">🔥 ${r.c}</div>
      <div class="rstars">${f} <span style="color:var(--muted);font-size:.68rem">${r.stars}</span></div>
    </div>
  </div>`;
}
function renderR(gridId,fcId,diet){
  const pd=localStorage.getItem("userDiet")||"veg";
  let list=diet==="easy"?RDB.filter(r=>r.tm<=20):diet?RDB.filter(r=>r.diet===diet):[...RDB].sort((a,b)=>(b.diet===pd?1:0)-(a.diet===pd?1:0));
  document.getElementById(gridId).innerHTML=list.map(rCard).join("");
  const c=document.getElementById("recipe-count");if(c)c.textContent=list.length+" recipes";
}
function filterR(el,diet){document.querySelectorAll("#fc1 .fc").forEach(c=>c.classList.remove("on"));el.classList.add("on");renderR("rg1","fc1",diet);}
function filterR2(el,diet){document.querySelectorAll("#fc2 .fc").forEach(c=>c.classList.remove("on"));el.classList.add("on");renderR("rg2","fc2",diet);}
function toggleFav(id,btn){
  if(likedIds.has(id)){likedIds.delete(id);btn.textContent="🤍";btn.classList.remove("liked");showToast("Removed from favourites","info");}
  else{likedIds.add(id);btn.textContent="❤️";btn.classList.add("liked");showToast("Saved to favourites ❤️","ok");document.getElementById("sv-r").textContent=24+likedIds.size;}
}

/* ══════════ RECIPE MODAL ══════════ */
function openMod(id){
  const r=RDB.find(x=>x.id===id);if(!r)return;
  document.getElementById("modbox").innerHTML=`
    <div class="mthumb">${r.e}</div>
    <div class="mbody">
      <h2>${r.name}</h2>
      <div class="mtags"><span class="mtag">⏱ ${r.t}</span><span class="mtag">🔥 ${r.c}</span><span class="mtag">📈 ${r.d}</span><span class="mtag rbadge ${BC[r.diet]}">${BL[r.diet]}</span><span class="mtag">⭐ ${r.stars}</span></div>
      <p class="mdesc">${r.desc}</p>
      <div class="mingr"><h4>Ingredients</h4><ul>${r.ingredients.map(i=>`<li>${i}</li>`).join("")}</ul></div>
      <div class="msteps"><h4>Cooking Steps</h4>${r.steps.map((s,i)=>`<div class="mstep-row"><div class="mstep-n">${i+1}</div><span>${s}</span></div>`).join("")}</div>
      <div class="mbtns">
        <button class="mbtn ai" onclick="openAIWithDish('${r.name}')">✨ AI Full Recipe</button>
        <button class="mbtn fv" onclick="toggleFavById(${r.id})">${likedIds.has(r.id)?"❤️ Saved":"🤍 Save"}</button>
        <button class="mbtn gr" onclick="startTimer(${r.tm}*60,'${r.name}');closeMod()">⏱ Start Timer</button>
        <button class="mbtn cl" onclick="closeMod()">Close</button>
      </div>
    </div>`;
  document.getElementById("modov").classList.add("on");
}
function closeMod(){document.getElementById("modov").classList.remove("on");}
function handleModOv(e){if(e.target===document.getElementById("modov"))closeMod();}
function toggleFavById(id){const liked=likedIds.has(id);liked?likedIds.delete(id):likedIds.add(id);const btn=document.querySelector(".mbtn.fv");if(btn)btn.textContent=likedIds.has(id)?"❤️ Saved":"🤍 Save";showToast(liked?"Removed":"Saved ❤️",liked?"info":"ok");}
function openAIWithDish(name){closeMod();document.getElementById("gDish").value=name;openAI();}

/* ══════════ AI PANEL ══════════ */
function openAI(){document.getElementById("aiov").classList.add("on");}
function closeAI(){document.getElementById("aiov").classList.remove("on");}
function handleAIOv(e){if(e.target===document.getElementById("aiov"))closeAI();}
function switchTab(t,el){
  document.querySelectorAll(".ai-tab").forEach(x=>x.classList.remove("on"));
  document.querySelectorAll(".ai-tc").forEach(x=>x.classList.remove("on"));
  el.classList.add("on");
  document.getElementById("tab-"+t).classList.add("on");
}
function updateSpice(){const v=parseInt(document.getElementById("gSpice").value);document.getElementById("spiceBadge").textContent=SPICE_LABELS[v];}
function changePpl(d){pplCount=Math.max(1,Math.min(20,pplCount+d));document.getElementById("pplval").textContent=pplCount;}

/* ══════════ GENERATE RECIPE ══════════ */
function generateRecipe(){
  const dish=document.getElementById("gDish").value.trim();
  if(!dish){showToast("Please enter a dish name 🍽️","warn");document.getElementById("gDish").focus();return;}
  const btn=document.getElementById("genBtn");
  btn.classList.add("busy");btn.innerHTML="⏳ Generating your recipe…";
  setTimeout(()=>{
    const spice=parseInt(document.getElementById("gSpice").value);
    const people=pplCount;
    const diet=document.getElementById("gDiet").value;
    const cuisine=document.getElementById("gCuisine").value;
    const occ=document.getElementById("gOcc").value;
    const avoid=document.getElementById("gAvoid").value;

    // find specific template or use generic
    const key=Object.keys(RTPL).find(k=>dish.toLowerCase().includes(k.toLowerCase()));
    const tpl=key?RTPL[key]:makeGenericTemplate(dish,people,spice);

    // scale ingredients
    const scaled=tpl.ingr.map(i=>{
      let qty;
      if(i.qty==="per") qty=Math.round(i.base*people);
      else if(i.qty==="spice") qty=Math.max(0.5, +(i.base*(spice/3)).toFixed(1));
      else qty=i.base;
      if(qty===0||i.unit==="to taste") return{...i,qtyStr:"To taste",price:0,priceStr:"—"};
      const tp=Math.round(qty*(i.price||0));
      return{...i,qtyStr:qty+" "+i.unit,price:tp,priceStr:tp>0?"₹"+tp:"—"};
    });

    const totalCost=scaled.reduce((s,i)=>s+i.price,0);

    // render header
    document.getElementById("rTitle").textContent="🍽️ "+dish;
    document.getElementById("rTags").innerHTML=
      `<span class="rtag">⏱ ${tpl.time}</span>
       <span class="rtag">🔥 ${tpl.cal}</span>
       <span class="rtag">👨‍👩‍👧‍👦 ${people} serving${people>1?"s":""}</span>
       <span class="rtag">🌶️ ${SPICE_LABELS[spice]}</span>
       <span class="rtag">🌍 ${cuisine}</span>
       <span class="rtag">🎉 ${occ}</span>
       <span class="rtag">${diet}</span>`;

    // serving note
    const sn=document.getElementById("servingNote");
    sn.children[1].textContent="Ingredients scaled for "+people+" person"+(people>1?"s":"")+" · "+cuisine+" style";

    // render ingredient CARDS
    window._currentIngr=scaled;
    document.getElementById("ingrGrid").innerHTML=scaled.map((i,idx)=>`
      <div class="ingr-card ${i.qtyStr==="To taste"?"":"checked"}" onclick="toggleIngrCard(this,${idx})" id="ic-wrap-${idx}">
        <input type="checkbox" ${i.qtyStr!=="To taste"?"checked":""} class="ingr-chk" id="ic${idx}" onclick="event.stopPropagation()">
        <div class="ingr-emoji">${i.e}</div>
        <div class="ingr-info">
          <div class="ingr-name">${i.name}</div>
          <div class="ingr-qty">${i.qtyStr}${i.note?" · "+i.note:""}</div>
        </div>
        <div class="ingr-price">${i.priceStr}</div>
      </div>`).join("");

    // cost bar
    document.getElementById("costVal").textContent=totalCost>0?"₹"+totalCost:"—";
    document.getElementById("costPer").textContent=totalCost>0&&people>1?"≈ ₹"+Math.round(totalCost/people)+" per person":"";

    // steps
    document.getElementById("stepsBody").innerHTML=tpl.steps.map((s,i)=>`
      <div class="step-item"><div class="step-num">${i+1}</div><span>${s}</span></div>`).join("");

    // nutrition quick view
    document.getElementById("recipeNutrition").innerHTML=
      Object.entries(tpl.nut||{}).map(([k,v])=>`
        <div class="rnut-item">
          <div class="rnut-val">${v}</div>
          <div class="rnut-lbl">${k}</div>
        </div>`).join("");

    // tips
    if(tpl.tips){
      document.getElementById("tipsTxt").textContent=tpl.tips;
      document.getElementById("tipsBox").classList.add("on");
    }

    // avoid note
    if(avoid){
      const tips=document.getElementById("tipsTxt");
      tips.textContent+=" ⚠️ Note: This recipe has been adjusted to avoid — "+avoid+".";
      document.getElementById("tipsBox").classList.add("on");
    }

    document.getElementById("resultCard").classList.add("on");
    btn.classList.remove("busy");btn.innerHTML="✨ Generate Full Recipe";
    setTimeout(()=>document.getElementById("resultCard").scrollIntoView({behavior:"smooth",block:"start"}),100);
    showToast("Recipe generated! 🎉 Scroll down to see it","pur");
  },1800);
}

function toggleIngrCard(card,idx){
  const chk=document.getElementById("ic"+idx);
  chk.checked=!chk.checked;
  card.classList.toggle("checked",chk.checked);
}
function toggleAllIngr(masterChk){
  const ingrs=window._currentIngr||[];
  ingrs.forEach((_,idx)=>{
    const chk=document.getElementById("ic"+idx);
    const wrap=document.getElementById("ic-wrap-"+idx);
    if(chk){chk.checked=masterChk.checked;if(wrap)wrap.classList.toggle("checked",masterChk.checked);}
  });
}

/* ══════════ CART ══════════ */
function addAllToCart(){
  const ingrs=window._currentIngr||[];
  if(!ingrs.length){showToast("Generate a recipe first!","warn");return;}
  let count=0;
  ingrs.forEach(i=>{if(i.qtyStr!=="To taste"){addItemToCart(i.name,i.qtyStr,i.price||0);count++;}});
  showToast("🛒 "+count+" ingredients added to cart!","ok");
  renderCart();animateCartBadge();
}
function addSelectedToCart(){
  const ingrs=window._currentIngr||[];
  let count=0;
  ingrs.forEach((i,idx)=>{
    const chk=document.getElementById("ic"+idx);
    if(chk&&chk.checked&&i.qtyStr!=="To taste"){addItemToCart(i.name,i.qtyStr,i.price||0);count++;}
  });
  if(!count){showToast("Select at least one ingredient","warn");return;}
  showToast("🛒 "+count+" item(s) added to cart!","ok");
  renderCart();animateCartBadge();
}
function addItemToCart(name,meta,price){
  const ex=cartItems.find(c=>c.name===name);
  if(ex){ex.qty++;ex.totalPrice+=price;}
  else cartItems.push({id:Date.now()+Math.random(),name,meta,price,qty:1,totalPrice:price});
}
function animateCartBadge(){
  const b=document.getElementById("cbadge");
  b.style.transform="scale(1.7)";b.style.background="#f59e0b";
  setTimeout(()=>{b.style.transform="scale(1)";b.style.background="#ef4444";},380);
}
function renderCart(){
  const badge=document.getElementById("cbadge");
  const total=cartItems.reduce((s,c)=>s+c.qty,0);
  badge.textContent=total;
  document.getElementById("cartCountLbl").textContent=total>0?total+" item(s)":"";
  const empty=document.getElementById("cartEmpty"),foot=document.getElementById("cartFoot");
  if(!cartItems.length){document.getElementById("citems").innerHTML="";empty.style.display="flex";foot.style.display="none";return;}
  empty.style.display="none";foot.style.display="block";
  document.getElementById("citems").innerHTML=cartItems.map(c=>`
    <div class="citem">
      <div class="cico">${getEmoji(c.name)}</div>
      <div class="cdetail"><div class="cname">${c.name}</div><div class="cmeta">${c.meta}</div></div>
      <div class="cqty">
        <button class="cqbtn" onclick="updCart(${c.id},-1)">−</button>
        <div class="cqval">${c.qty}</div>
        <button class="cqbtn" onclick="updCart(${c.id},1)">+</button>
      </div>
      <div class="cprice">${c.price>0?"₹"+c.totalPrice:"—"}</div>
      <button class="cdel" onclick="delCart(${c.id})">🗑</button>
    </div>`).join("");
  const t=cartItems.reduce((s,c)=>s+c.totalPrice,0);
  document.getElementById("ctotal").textContent=t>0?"₹"+t:"—";
}
function updCart(id,d){const c=cartItems.find(x=>x.id===id);if(!c)return;c.qty+=d;c.totalPrice=c.price*c.qty;if(c.qty<=0)cartItems=cartItems.filter(x=>x.id!==id);renderCart();}
function delCart(id){cartItems=cartItems.filter(x=>x.id!==id);renderCart();showToast("Removed from cart","info");}
function clearCart(){cartItems=[];renderCart();showToast("Cart cleared","info");}
function checkout(){if(!cartItems.length)return;const t=cartItems.reduce((s,c)=>s+c.totalPrice,0);showToast("🎉 Order placed! Total: ₹"+t,"ok");cartItems=[];renderCart();closeCart();}
function getEmoji(n){
  n=n.toLowerCase();
  if(n.includes("paneer"))return"🧀";if(n.includes("chicken")||n.includes("mutton"))return"🍗";
  if(n.includes("tomato"))return"🍅";if(n.includes("onion"))return"🧅";if(n.includes("garlic"))return"🧄";
  if(n.includes("butter"))return"🧈";if(n.includes("cream")||n.includes("milk"))return"🥛";
  if(n.includes("egg"))return"🥚";if(n.includes("rice"))return"🍚";if(n.includes("dal")||n.includes("lentil"))return"🫘";
  if(n.includes("spinach")||n.includes("palak"))return"🥬";if(n.includes("potato")||n.includes("aloo"))return"🥔";
  if(n.includes("oil")||n.includes("ghee"))return"🫙";if(n.includes("salt")||n.includes("sugar"))return"🧂";
  if(n.includes("chilli")||n.includes("chili"))return"🌶️";if(n.includes("coriander"))return"🌿";
  if(n.includes("ginger"))return"🫚";if(n.includes("masala"))return"🫙";return"🛒";
}

/* ══════════ GROCERY ══════════ */
function renderG(id){
  document.getElementById(id).innerHTML=groceries.map(g=>`
    <li class="gitem ${g.done?"done":""}" id="gi-${g.id}">
      <input type="checkbox" ${g.done?"checked":""} onchange="toggleG(${g.id})">
      <label onclick="toggleG(${g.id})">${g.text}</label>
      <button class="dx" onclick="delG(${g.id})">🗑</button>
    </li>`).join("");
}
function addG1(){const v=document.getElementById("gi1").value.trim();if(!v)return;groceries.push({id:gc++,text:v,done:false});document.getElementById("gi1").value="";renderG("gl1");renderG("gl2");showToast("Added ✓","ok");}
function addG2(){const v=document.getElementById("gi2").value.trim();if(!v)return;groceries.push({id:gc++,text:v,done:false});document.getElementById("gi2").value="";renderG("gl1");renderG("gl2");showToast("Added ✓","ok");}
function toggleG(id){const g=groceries.find(x=>x.id===id);if(g){g.done=!g.done;renderG("gl1");renderG("gl2");}}
function delG(id){groceries=groceries.filter(x=>x.id!==id);renderG("gl1");renderG("gl2");}
function clearDone(){groceries=groceries.filter(x=>!x.done);renderG("gl1");renderG("gl2");showToast("Cleared checked items","info");}

/* ══════════ MEAL LOG ══════════ */
function renderMealLog(){
  document.getElementById("mllog").innerHTML=meals.map(m=>`
    <li class="gitem ${m.done?"done":""}">
      <input type="checkbox" ${m.done?"checked":""} onchange="toggleM(${m.id})">
      <label>${m.text}</label>
      <button class="dx" onclick="delM(${m.id})">🗑</button>
    </li>`).join("");
}
function logMeal(){const v=document.getElementById("mli").value.trim();if(!v)return;meals.push({id:mc++,text:v,done:false});document.getElementById("mli").value="";renderMealLog();showToast("Meal logged! 🍽️","ok");}
function toggleM(id){const m=meals.find(x=>x.id===id);if(m){m.done=!m.done;renderMealLog();}}
function delM(id){meals=meals.filter(x=>x.id!==id);renderMealLog();}

/* ══════════ NUTRITION ══════════ */
function renderNB(id,data){
  document.getElementById(id).innerHTML=data.map(n=>`
    <div class="nrow">
      <div class="nhdr"><span>${n.n}</span><span>${n.v}%</span></div>
      <div class="nbar"><div class="nfill" data-w="${n.v}%" style="width:0%;background:${n.col}"></div></div>
    </div>`).join("");
  setTimeout(()=>{document.querySelectorAll("#"+id+" .nfill").forEach(el=>{el.style.width=el.dataset.w;});},200);
}

/* ══════════ MEAL PLANNER ══════════ */
function renderMealDays(){
  const days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const plans=[["Poha","Dal Rice","Paneer"],["Paratha","Chole","Rajma"],["Idli","Palak Paneer","Dal"],["Oats","Biryani",""],["","Aloo Gobi","Dosa"],["Upma","Egg Bhurji",""],["","","Butter Chicken"]];
  const today=new Date().getDay();const todayIdx=today===0?6:today-1;const date=new Date();
  document.getElementById("mdays").innerHTML=days.map((d,i)=>{
    const dd=new Date(date);dd.setDate(date.getDate()-(todayIdx-i));
    return`<div class="mday ${i===todayIdx?"today":""}">
      <div class="mday-name">${d}</div><div class="mday-date">${dd.getDate()}</div>
      <div class="mday-meals">${["B","L","D"].map((l,j)=>`<div class="mmeal ${plans[i][j]?"filled":""}">${plans[i][j]||l}</div>`).join("")}</div>
    </div>`;
  }).join("");
}

/* ══════════ HYDRATION ══════════ */
function renderHydration(){
  document.getElementById("hrow").innerHTML=
    Array.from({length:8},(_,i)=>`<button class="gbtn ${i<wg?"filled":""}" onclick="logW(${i+1})">💧</button>`).join("")+
    `<span style="font-size:.88rem;font-weight:800;color:var(--p);margin-left:8px">${wg}/8</span>`;
  const pct=Math.round((wg/8)*100);
  document.getElementById("hpfill").style.width=pct+"%";
  document.getElementById("htxt").textContent=wg>=8?"🎉 Daily goal reached! Excellent!":wg>=5?"💪 Almost there! "+(8-wg)+" more glass(es) to go.":"🌊 Stay hydrated — drink up!";
  document.getElementById("sv-w").textContent=wg+"/8";
}
function logW(n){wg=n;renderHydration();showToast(n>=8?"Goal reached! 🎉":"Logged "+n+" glass"+(n>1?"es":"")+" 💧","ok");}
function resetH(){wg=0;renderHydration();showToast("Hydration reset","info");}

/* ══════════ NOTIFICATIONS ══════════ */
function renderNotifs(){
  document.getElementById("nlist").innerHTML=NOTIFS.map((n,i)=>`
    <div class="ni-item ${n.unread?"unread":""}">
      <div class="ni-ico">${n.ico}</div>
      <div style="flex:1"><div class="ni-title">${n.title}</div><div class="ni-sub">${n.sub}</div></div>
      <div class="ni-time">${n.time}</div>
    </div>`).join("");
  document.getElementById("ndot").className="ndot"+(NOTIFS.some(n=>n.unread)?" on":"");
}
function markAllRead(){NOTIFS.forEach(n=>n.unread=false);document.querySelectorAll(".ni-item").forEach(el=>el.classList.remove("unread"));document.getElementById("ndot").classList.remove("on");showToast("All caught up! ✓","ok");}
function openNotif(){document.getElementById("notifPanel").classList.add("on");document.getElementById("pov3").classList.add("on");}
function closeNotif(){document.getElementById("notifPanel").classList.remove("on");document.getElementById("pov3").classList.remove("on");}

/* ══════════ ACTIVITY ══════════ */
function renderActs(){
  document.getElementById("alist").innerHTML=ACTS.map(a=>`
    <div class="aitem"><div class="aico" style="background:${a.bg}">${a.ico}</div>
    <div><div class="atitle">${a.title}</div><div class="atime">${a.time}</div></div>
    <div class="aright">${a.right}</div></div>`).join("");
}

/* ══════════ AI CHAT ══════════ */
const CHAT_REPLIES=[
  "Always bloom your spices in hot oil first — this releases the essential oils and creates deep, complex flavour that raw spices can't achieve! 🌶️",
  "For perfect curry, cook onions until truly golden brown (at least 10 min). Most people under-cook them and that's why homemade curry doesn't taste like restaurant food. 🍳",
  "Add a small pinch of sugar to any tomato-based gravy — it neutralises acidity and rounds out the flavour beautifully. ✨",
  "Restaurant secret: pour a hot ghee tadka over your dal or curry right before serving. The sizzle and aroma is what you get in dhabas! 🧈",
  "For healthier cooking: air-fry snacks instead of deep-frying (80% less oil), use yogurt instead of cream, and add more vegetables to bulk out dishes. 💪",
  "To prevent paneer from crumbling, soak it in warm salted water for 15 minutes before using. It softens and stays intact when cooking! 🧀",
  "The secret to fluffy rice: rinse until water runs clear, then use the 1:1.5 ratio (rice:water) and never lift the lid while cooking! 🍚",
  "When making dough for roti, knead for at least 8 minutes until smooth. Rest it covered for 30 min — the gluten relaxes and makes rolling much easier. 🌾",
];
function sendChat(txt){
  if(chatTyping)return;
  const inp=document.getElementById("chatinp");
  const t=txt||inp.value.trim();if(!t)return;if(!txt)inp.value="";
  const msgs=document.getElementById("chatmsgs");
  const u=document.createElement("div");u.className="cmsg user";u.textContent=t;msgs.appendChild(u);
  const b=document.createElement("div");b.className="cmsg bot";
  b.innerHTML=`<div class="typing-dots"><span></span><span></span><span></span></div>`;
  msgs.appendChild(b);msgs.scrollTop=msgs.scrollHeight;chatTyping=true;
  setTimeout(()=>{b.innerHTML=CHAT_REPLIES[Math.floor(Math.random()*CHAT_REPLIES.length)];msgs.scrollTop=msgs.scrollHeight;chatTyping=false;},1600);
}

/* ══════════ SEARCH ══════════ */
function doSearch(){
  const q=document.getElementById("sinp").value.trim().toLowerCase();if(!q)return;
  const found=RDB.filter(r=>r.name.toLowerCase().includes(q)||r.diet.includes(q)||r.desc.toLowerCase().includes(q));
  if(!found.length){showToast('No results for "'+q+'"');return;}
  showSec("recipes");setAct(document.querySelectorAll(".nitem")[1]);
  document.getElementById("rg2").innerHTML=found.map(rCard).join("");
  const c=document.getElementById("recipe-count");if(c)c.textContent=found.length+" recipe(s)";
  showToast("Found "+found.length+" recipe(s)","info");
}

/* ══════════ PROFILE ══════════ */
function loadProfile(){
  document.getElementById("pname").value=localStorage.getItem("userName")||"";
  document.getElementById("page").value=localStorage.getItem("userAge")||"";
  document.getElementById("pemail").value=localStorage.getItem("userEmail")||"";
  document.getElementById("pphone").value=localStorage.getItem("userPhone")||"";
  const loc=localStorage.getItem("userLoc"),diet=localStorage.getItem("userDiet");
  if(loc)document.getElementById("ploc").value=loc;
  if(diet)document.getElementById("pdiet").value=diet;
  const n=localStorage.getItem("userName")||"?";
  document.getElementById("pavt").textContent=n.charAt(0).toUpperCase();
}
function openProfile(){document.getElementById("ppanel").classList.add("on");document.getElementById("pov1").classList.add("on");}
function closeProfile(){document.getElementById("ppanel").classList.remove("on");document.getElementById("pov1").classList.remove("on");}
function saveProfile(){
  const name=document.getElementById("pname").value.trim();
  if(!name){showToast("Name is required","warn");return;}
  localStorage.setItem("userName",name);localStorage.setItem("userAge",document.getElementById("page").value);
  localStorage.setItem("userEmail",document.getElementById("pemail").value);localStorage.setItem("userPhone",document.getElementById("pphone").value);
  localStorage.setItem("userLoc",document.getElementById("ploc").value);localStorage.setItem("userDiet",document.getElementById("pdiet").value);
  document.getElementById("wuser").textContent="👋 Welcome back, "+name+"!";
  document.getElementById("navName").textContent=name.split(" ")[0];
  document.getElementById("navAv").textContent=name.charAt(0).toUpperCase();
  document.getElementById("pavt").textContent=name.charAt(0).toUpperCase();
  closeProfile();showToast("Profile saved! ✅","ok");
}

/* ══════════ PANELS ══════════ */
function openCart(){document.getElementById("cpanel").classList.add("on");document.getElementById("pov2").classList.add("on");}
function closeCart(){document.getElementById("cpanel").classList.remove("on");document.getElementById("pov2").classList.remove("on");}

/* ══════════ SIDEBAR ══════════ */
function toggleSidebar(){
  sideOpen=!sideOpen;
  const sb=document.getElementById("sidebar"),mn=document.getElementById("main");
  if(window.innerWidth<=700){sb.classList.toggle("mob",sideOpen);}
  else{sb.classList.toggle("collapsed",!sideOpen);mn.classList.toggle("expanded",!sideOpen);}
}
function setAct(el){document.querySelectorAll(".nitem").forEach(n=>n.classList.remove("act"));el.classList.add("act");}

/* ══════════ DARK MODE ══════════ */
function toggleDark(){
  document.getElementById("body").classList.toggle("dark");
  const d=document.getElementById("body").classList.contains("dark");
  document.getElementById("dkbtn").textContent=d?"☀️":"🌙";
  localStorage.setItem("darkMode",d);
  showToast(d?"Dark mode on 🌙":"Light mode on ☀️","info");
}

/* ══════════ TIMER ══════════ */
function startTimer(secs,label){timerMax=secs;timerSec=secs;timerRunning=false;document.getElementById("tlbl").textContent=label||"Cooking Timer";document.getElementById("tgobtn").textContent="Start";document.getElementById("tbar").classList.add("on");updateTimerDisp();}
function toggleTimer(){
  const btn=document.getElementById("tgobtn");
  if(timerRunning){clearInterval(timerInt);timerRunning=false;btn.textContent="Resume";}
  else{
    timerRunning=true;btn.textContent="Pause";
    timerInt=setInterval(()=>{
      timerSec--;updateTimerDisp();
      if(timerSec<=0){clearInterval(timerInt);timerRunning=false;btn.textContent="Done!";
        showToast("⏰ Timer done! Time to serve!","ok");
        document.getElementById("tdisp").style.color="#ef4444";
        setTimeout(()=>{document.getElementById("tdisp").style.color="var(--p)";},2500);}
    },1000);
  }
}
function updateTimerDisp(){const m=Math.floor(timerSec/60),s=timerSec%60;document.getElementById("tdisp").textContent=(m<10?"0"+m:m)+":"+(s<10?"0"+s:s);}
function resetTimerUI(){clearInterval(timerInt);timerRunning=false;timerSec=timerMax;updateTimerDisp();document.getElementById("tgobtn").textContent="Start";}
function closeTimer(){clearInterval(timerInt);timerRunning=false;document.getElementById("tbar").classList.remove("on");}

/* ══════════ LOGOUT ══════════ */
function logout(){
  if(!confirm("Are you sure you want to logout?")) return;
  // Keep accounts, just clear session + user keys
  localStorage.removeItem("currentUserEmail");
  ["userName","userAge","userDiet","userEmail","userPhone","userGender","userLoc","rememberEmail"]
    .forEach(k => localStorage.removeItem(k));
  window.location.href = "sign.html";
}

/* ══════════ TOAST ══════════ */
function showToast(msg,type=""){
  const t=document.getElementById("toast");t.textContent=msg;
  t.className="toast "+type+" show";
  clearTimeout(t._t);t._t=setTimeout(()=>{t.className="toast";},3400);
}

/* ══════════ KEYBOARD SHORTCUTS ══════════ */
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){closeAI();closeMod();closeProfile();closeCart();closeNotif();}
  if((e.ctrlKey||e.metaKey)&&e.key==="k"){e.preventDefault();document.getElementById("sinp").focus();}
});