function show_section2() {
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "block";
}

const categories_items = document.getElementById("categories_items");
const salad_items = document.querySelector(".salad_items");
const pasta_items = document.querySelector(".pasta_items");
const breakfast_items = document.querySelector(".breakfast_items");
const lunch_items = document.querySelector(".lunch_items");
function food(name, src, ingredients, preparation) {
  (this.name = name), (this.src = src), (this.ingredients = ingredients);
  this.preparation = preparation;
}

let total_recipes = [];

food.prototype.salads = function () {
  const newDiv = document.createElement("div");
  newDiv.className = "salad";

  const newimg = document.createElement("img");
  const title = document.createElement("label");
  title.className = "recipes_title";

  const ingredients = document.createElement("p");
  ingredients.className = "ingredients";
  salad_items.append(newDiv);

  const preparation = document.createElement("p");
  preparation.className = "preparation";
  newDiv.append(newimg, title, ingredients, preparation);
  title.append(this.name);
  newimg.src = this.src;
  ingredients.append(this.ingredients);
  preparation.append(this.preparation);

  total_recipes.push(newDiv);
};

food.prototype.pasta = function () {
  const newDiv = document.createElement("div");
  newDiv.className = "pasta";

  const newimg = document.createElement("img");
  const title = document.createElement("label");
  title.className = "recipes_title";
  const ingredients = document.createElement("p");
  ingredients.className = "ingredients";
  pasta_items.append(newDiv);
  const preparation = document.createElement("p");
  preparation.className = "preparation";
  newDiv.append(newimg, title, ingredients, preparation);
  title.append(this.name);
  newimg.src = this.src;
  ingredients.append(this.ingredients);
  preparation.append(this.preparation);
  total_recipes.push(newDiv);
};

food.prototype.breakfast = function () {
  const newDiv = document.createElement("div");
  newDiv.className = "breakfast";

  const newimg = document.createElement("img");
  const title = document.createElement("label");
  title.className = "recipes_title";
  const ingredients = document.createElement("p");
  ingredients.className = "ingredients";
  breakfast_items.append(newDiv);
  const preparation = document.createElement("p");
  preparation.className = "preparation";
  newDiv.append(newimg, title, ingredients, preparation);
  title.append(this.name);
  newimg.src = this.src;
  ingredients.append(this.ingredients);
  preparation.append(this.preparation);
  total_recipes.push(newDiv);
};

food.prototype.lunch = function () {
  const newDiv = document.createElement("div");
  newDiv.className = "lunch";

  const newimg = document.createElement("img");
  const title = document.createElement("label");
  title.className = "recipes_title";
  const ingredients = document.createElement("p");
  ingredients.className = "ingredients";
  lunch_items.append(newDiv);
  const preparation = document.createElement("p");
  preparation.className = "preparation";
  newDiv.append(newimg, title, ingredients, preparation);
  title.append(this.name);
  newimg.src = this.src;
  ingredients.append(this.ingredients);
  preparation.append(this.preparation);
  total_recipes.push(newDiv);
};

const salad1 = new food(
  "Gnocchi with avocado sauce 🥑 ",
  "imagess/salads.img/Screenshot 2024-02-04 at 8.52.13 PM.png",
  "Ingredients for the sauce:.2 ripe avocados.1 tbsp olive oil.2 tbsp water.1 clove fresh garlic or 1 tsp garlic powder.Juice of 1/2 lemon (optional)Salt and pepper to taste",
  "Preparation.So easy! 😁. Peel the avocados and the garlic, put them together with all the other ingredients in a blender and blend until smooth and creamy.Ingredients for the sauce:.2 ripe avocados.1 tbsp olive oil.2 tbsp water.1 clove fresh garlic or 1 tsp garlic powder.Juice of 1/2 lemon (optional)Salt and pepper to taste .Preparation.So easy! 😁. Peel the avocados and the garlic, put them together with all the other ingredients in a blender and blend until smooth and creamy."
);
salad1.salads();
const salad2 = new food(
  "coconut rice pudding 🍚 🍓 🫐 ",
  "imagess/salads.img/Screenshot 2024-02-04 at 9.06.31 PM.png",
  "Ingredients:2/3 cup (125 g) jasmin rice (or Milchreis here in Germany).3/4 cup (180 ml) plant based milk or water.2/3 cup (160 ml) coconut milk (full fat).1-2 tsp coconut sugar or another sweetener of your choice.1 tsp coconut butter (optional).",
  "Preparation:Put all the ingredients except the coconut butter in a pot and bring to a boil. Reduce to a low heat, cover and let it simmer for roughly 15 minutes (it takes longer if you use “Milchreis”). Do not stir too often and keep the lid closed.Remove from heat, add the coconut butter and maybe some more coconut milk if desired. Have a wonderful evening"
);
salad2.salads();

const pasta1 = new food(
  "Creamy tahini-garlic pasta 🍝",
  "imagess/pasta.img/Screenshot 2024-02-05 at 1.53.50 AM.png",
  "Ingredients:.1/2 cup/120 ml tahini (try to get some of the runny original arabic good stuff).3/4 cup/180 ml water.1 tsp garlic powder (or 1 fresh clove).1 tsp onion powder.1 tsp pepper.1 tsp salt.",
  "So so easy ☺️. Put everything together in a small blender or food processor and blend until everything is combined.Mix with your favorite pasta 🍝."
);
pasta1.pasta();

const pasta2 = new food(
  "Creamy spinach pasta 🍝",
  "imagess/pasta.img/Screenshot 2024-02-04 at 11.18.48 PM.png",
  "Ingredients:1 box pasta1/2 Can white besns (I used great northern beans)1 cup cashew milk2 tbsp nutritional yeast2 cups spinach , chopped1/4 cup raw cashews (optional...)1 tsp garlic powder1/2 tsp salt1/4 tsp pepper",
  "Preparation: Cook pasta according to directions on package. Combine the remainder ingredients (except spinach) in a blender and blend until smooth. Add more cashew milk if needed.In a pan heat 1 tsp avocado oil and add chopped spinach, season with salt and pepper. This should wilt down in only 30 seconds! Once pasta is cooked drain add to cooked spinach and add in the sauce. "
);
pasta2.pasta();

const breakfast1 = new food(
  "🌿 Simple Basil Pesto Recipe 🌿",
  "imagess/breakfast.img/Screenshot 2024-02-04 at 11.29.49 PM.png",
  "↠ 3 cups basil↠ juice of one lemon↠ 1/4 cup olive oil↠ 1/3 cup pine nuts↠ 2 garlic cloves↠ himalayan sea salt",
  "Add all ingredients except olive oil to a food processor. Pulse until evenly chopped. Slowly add olive oil through the top of the processor and pulse until combined."
);
breakfast1.breakfast();

const breakfast2 = new food(
  "Crispy Oven Baked Potato 🍠",
  "imagess/breakfast.img/Screenshot 2024-02-04 at 11.34.43 PM.png",
  " 1 cup chickpea flour also called garbanzo bean flour (120 g)⠀1/2 cup tapioca flour/starch (60 g)⠀2 oz fresh baby spinach leaves (60 g)⠀1 - 1 1/8 cup water (240-270 ml)⠀1/3 tsp salt",
  "Process all ingredients in your food processor or blender until the batter is smooth. Use 1 cup of water if you plan to make thicker/smaller tortillas for tacos. Add about 1 1/8 cup of water if you want to make thinner/bigger tortillas for e.g. burritos"
);
breakfast2.breakfast();

const salad3 = new food(
  "🍄 Grilled mushrooms 🍄 ",
  "imagess/salads.img/Screenshot 2024-02-04 at 11.48.45 PM.png",
  "8 medium mushroom fiats60mls (1/4 cup) olive oilgarlic cloves, crushed1/4 chopped fresh continental parsley",
  "Step 1Preheat grill on medium-high. Line a grill tray or baking tray with foil. Place the mushrooms on the lined tray.Step 2Combine the olive oil, garlic and 2 tablespoons of the parsley in a bowl. Drizzle the mushrooms with the garlic oil."
);
salad3.salads();

const salad4 = new food(
  " Spinach salad 🍓🥑 ",
  "imagess/salads.img/Screenshot 2024-02-04 at 11.45.53 PM.png",
  "Spicy Cashew Dressing 🔥1 tbsp cashew butter1 tbsp apple cider vinegar1/2 tbsp water"
);
salad4.salads();

const salad5 = new food(
  " Oven baked sweet potato 🍠",
  "imagess/salads.img/IMG_8520.jpg ",
  "4 sweet potatoes, scrubbed clean Olive oil, optional 4 tbsp. butter Kosher saltFreshly ground black pepper",
  "Step 1 Preheat oven to 425º. On a baking sheet lined with aluminum foil, prick sweet potatoes all over with a fork. Rub the outsides with a small amount of olive oil if you intend to eat the skins. Step 2 Bake until tender, 45 to 50 minutes. Step 3 Let cool, then split the tops open with a knife and top with a pat of butter. Step 4 Season with salt and pepper before serving."
);
salad5.salads();

const pasta3 = new food(
  " bolognese pasta 🍝 ",
  "imagess/pasta.img/IMG_8521.jpg",
  "Spicy Cashew Dressing 🔥1 tbsp cashew butter1 tbsp apple cider vinegar1/2 tbsp water",
  "Thread a cherry tomato, a mozzarella ball, and a basil leaf onto small skewers or toothpicks.Arrange the skewers on a serving platter. Drizzle balsamic glaze over the skewers.  Serve as a refreshing and colorful appetizer."
);
pasta3.pasta();

const salad6 = new food(
  " Buddha.Bowl 🥗",
  "imagess/salads.img/IMG_8522.jpg",
  "Spicy Cashew Dressing 🥗 1 tbsp cashew butter1 tbsp apple cider vinegar1/2 tbsp water",
  "Thread a cherry tomato, a mozzarella ball, and a basil leaf onto small skewers or toothpicks.Arrange the skewers on a serving platter.Drizzle balsamic glaze over the skewers.Serve as a refreshing and colorful appetizer."
);
salad6.salads();

const lunch1 = new food(
  " Soup with Zucchini Noodles 🍜",
  "imagess/lunch.img/IMG_8524.jpg",
  "Spicy Cashew Dressing 🔥1 tbsp cashew butter1 tbsp apple cider vinegar1/2 tbsp water",
  "Thread a cherry tomato, a mozzarella ball, and a basil leaf onto small skewers or toothpicks.Arrange the skewers on a serving platter.Drizzle balsamic glaze over the skewers.Serve as a refreshing and colorful appetizer."
);
lunch1.lunch();

const breakfast3 = new food(
  "Chickpeas and kale 🥑 ",
  "imagess/breakfast.img/Screenshot 2024-02-02 at 1.15.14 AM.png",
  "Spicy Cashew Dressing 🔥1 tbsp cashew butter1 tbsp apple cider vinegar1/2 tbsp water",
  "Thread a cherry tomato, a mozzarella ball, and a basil leaf onto small skewers or toothpicks.Arrange the skewers on a serving platter.Drizzle balsamic glaze over the skewers.Serve as a refreshing and colorful appetizer."
);
breakfast3.breakfast();

function display_salad(event) {
  document.getElementById("salad_ID").style.display = "block";
  document.getElementById("pasta_ID").style.display = "none";
  document.getElementById("lunch_ID").style.display = "none";
  document.getElementById("breakfast_ID").style.display = "none";
}
function display_lunch(event) {
  document.getElementById("lunch_ID").style.display = "block";
  document.getElementById("salad_ID").style.display = "none";
  document.getElementById("pasta_ID").style.display = "none";

  document.getElementById("breakfast_ID").style.display = "none";
}
function display_breakfast(event) {
  document.getElementById("salad_ID").style.display = "none";
  document.getElementById("pasta_ID").style.display = "none";
  document.getElementById("lunch_ID").style.display = "none";
  document.getElementById("breakfast_ID").style.display = "block";
}
function display_pasta(event) {
  document.getElementById("salad_ID").style.display = "none";
  document.getElementById("pasta_ID").style.display = "block";
  document.getElementById("lunch_ID").style.display = "none";
  document.getElementById("breakfast_ID").style.display = "none";
}

let noResults_found = document.querySelector(".noResults_found");
const labels = document.getElementsByClassName("recipes_title");

const label_array = [...labels];

const result_Div = document.getElementById("result_Div");
const hidden_div = document.getElementById("hidden_div");
const search_btn = document.getElementById("search_btn");
const labelTextArray = label_array.map((label) =>
  label.textContent.trim().toLowerCase()
);
console.log(labelTextArray);
const search_container = document.getElementById("search_container");

search_btn.addEventListener("click", (event) => {
  event.preventDefault();

  let search_text = document
    .getElementById("second_page_search_inpt")
    .value.trim();
  const filtered = labelTextArray.filter((labeltext) =>
    labeltext.includes(search_text.toLowerCase())
  );

  result_Div.style.display = "inline-block";
  if (filtered.length > 0) {
    const matchingStyledDivs = Array.from(total_recipes).filter((div) => {
      const divLabelText = div
        .querySelector(".recipes_title")
        .textContent.trim()
        .toLowerCase();

      return filtered.includes(divLabelText);
    });
    hidden_div.style.display = matchingStyledDivs.forEach((matchingDiv) => {
      hidden_div.append(matchingDiv.cloneNode(true));
    });
  } else {
    hidden_div.style.display = "block";
    noResults_found.style.display = "flex";
    hidden_div.append(noResults_found);
  }
});

document.addEventListener("mousedown", (event) => {
  const clicked = event.target;
  let search_text = document.getElementById("second_page_search_inpt");
  let search_form = document.querySelector(".search_form");

  if (
    !search_container.contains(clicked) ||
    noResults_found.contains(clicked)
  ) {
    hidden_div.innerHTML = "";
    result_Div.style.display = "none";
    search_text.value = "";
    noResults_found.style.display = "none";
  }
});

let random_favs_conatiner = document.querySelector(".random_trendy_container");
let selectedIndices = [];

function random_trending_items() {
  for (let i = 0; i < 6; i++) {
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * total_recipes.length);
    } while (selectedIndices.includes(randomIndex));

    selectedIndices.push(randomIndex);

    let random_meal = total_recipes[randomIndex];
    let cloned_meal = random_meal.cloneNode(true);
    cloned_meal.className = "trendy_recipes";
    random_favs_conatiner.append(cloned_meal);
  }
}

random_trending_items();
