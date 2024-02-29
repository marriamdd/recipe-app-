function show_section2() {
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "block";
}

const categories_items = document.getElementById("categories_items");
const salad_items = document.querySelector(".salad_items");
const pasta_items = document.querySelector(".pasta_items");
const breakfast_items = document.querySelector(".breakfast_items");
const lunch_items = document.querySelector(".lunch_items");

function food(name, src, ingredients, preparation, prep_info) {
  (this.name = name), (this.src = src), (this.ingredients = ingredients);
  this.preparation = preparation;
  this.additionalClassName = "common_class_forAll_recipe";
  this.prep_info_value = prep_info;
}

let total_recipes = [];
let ing = [];

food.prototype.salads = function () {
  const newDiv = document.createElement("div");
  newDiv.className = this.additionalClassName + " " + "salad";

  const newimg = document.createElement("img");
  const title = document.createElement("label");
  title.className = "recipes_title";
  const recipe_title_div = document.createElement("div");
  recipe_title_div.className = "recipe_title_div";
  recipe_title_div.append(title);

  const ingredients = document.createElement("p");
  ingredients.className = "ingredients";
  salad_items.append(newDiv);

  const preparation = document.createElement("p");
  preparation.className = "preparation";

  const prep_info = document.createElement("span");
  prep_info.className = "prep_info";
  prep_info.append(this.prep_info_value);

  newDiv.append(newimg, recipe_title_div, ingredients, preparation, prep_info);

  title.append(this.name);
  newimg.src = this.src;
  ing.push(this.ingredients);
  ingredients.append(this.ingredients);

  preparation.append(this.preparation);

  total_recipes.push(newDiv);
};

food.prototype.pasta = function () {
  const newDiv = document.createElement("div");
  newDiv.className = this.additionalClassName + " " + "pasta";

  const newimg = document.createElement("img");
  const title = document.createElement("label");
  title.className = "recipes_title";
  const recipe_title_div = document.createElement("div");
  recipe_title_div.className = "recipe_title_div";
  recipe_title_div.append(title);
  const ingredients = document.createElement("p");
  ingredients.className = "ingredients";
  pasta_items.append(newDiv);
  const preparation = document.createElement("p");
  preparation.className = "preparation";

  const prep_info = document.createElement("span");
  prep_info.className = "prep_info";
  prep_info.append(this.prep_info_value);

  newDiv.append(newimg, recipe_title_div, ingredients, preparation, prep_info);
  title.append(this.name);

  newimg.src = this.src;
  ingredients.append(this.ingredients);
  preparation.append(this.preparation);
  total_recipes.push(newDiv);
};

food.prototype.breakfast = function () {
  const newDiv = document.createElement("div");
  newDiv.className = this.additionalClassName + " " + "breakfast";

  const newimg = document.createElement("img");
  const title = document.createElement("label");
  title.className = "recipes_title";
  const recipe_title_div = document.createElement("div");
  recipe_title_div.className = "recipe_title_div";
  recipe_title_div.append(title);
  const ingredients = document.createElement("p");
  ingredients.className = "ingredients";
  breakfast_items.append(newDiv);
  const preparation = document.createElement("p");
  preparation.className = "preparation";
  const prep_info = document.createElement("span");
  prep_info.className = "prep_info";
  prep_info.append(this.prep_info_value);

  newDiv.append(newimg, recipe_title_div, ingredients, preparation, prep_info);
  title.append(this.name);
  newimg.src = this.src;
  ingredients.append(this.ingredients);
  preparation.append(this.preparation);
  total_recipes.push(newDiv);
};

food.prototype.lunch = function () {
  const newDiv = document.createElement("div");
  newDiv.className = this.additionalClassName + " " + "lunch";

  const newimg = document.createElement("img");
  const title = document.createElement("label");
  title.className = "recipes_title";
  const recipe_title_div = document.createElement("div");
  recipe_title_div.className = "recipe_title_div";
  recipe_title_div.append(title);
  const ingredients = document.createElement("p");
  ingredients.className = "ingredients";
  lunch_items.append(newDiv);
  const preparation = document.createElement("p");
  preparation.className = "preparation";
  const prep_info = document.createElement("span");
  prep_info.className = "prep_info";
  prep_info.append(this.prep_info_value);

  newDiv.append(newimg, recipe_title_div, ingredients, preparation, prep_info);
  title.append(this.name);
  newimg.src = this.src;
  ingredients.append(this.ingredients);
  preparation.append(this.preparation);
  total_recipes.push(newDiv);
};

const salad1 = new food(
  "Gnocchi with avocado sauce 🥑 ",
  "imagess/salads.img/Screenshot 2024-02-04 at 8.52.13 PM.png",
  "Ingredients ,avocados - 2 ripe  ,olive oil - 1 tbsp ,water - 2 tbsp ,fresh garlic - 1 clove ,lemon Juice - 1/2  ,Salt and pepper ",
  "Preparation : So easy! 😁. Peel the avocados and the garlic, put them together with all the other ingredients in a blender and blend until smooth and creamy.Ingredients for the sauce:.2 ripe avocados.1 tbsp olive oil.2 tbsp water.1 clove fresh garlic or 1 tsp garlic powder.Juice of 1/2 lemon (optional)Salt and pepper to taste .",
  " 0 hrs , 30 min , 2 - 3 "
);
salad1.salads();


const salad2 = new food(
  "coconut rice pudding 🍚 🍓 🫐 ",
  "imagess/salads.img/Screenshot 2024-02-04 at 9.06.31 PM.png",
  "Ingredients , jasmin rice - 2/3 cup , plant based milk - 180 ml , coconut milk -2/3 , coconut sugar- 1-2 tsp , coconut butter- 1 tsp  .",
  "Preparation : Put all the ingredients except the coconut butter in a pot and bring to a boil. Reduce to a low heat, cover and let it simmer for roughly 15 minutes (it takes longer if you use “Milchreis”). Do not stir too often and keep the lid closed.Remove from heat, add the coconut butter and maybe some more coconut milk if desired. Have a wonderful evening",
  " 40 hrs , 0 min ,2 - 3 "
);
salad2.salads();

const pasta1 = new food(
  "Creamy tahini-garlic pasta 🍝",
  "imagess/pasta.img/Screenshot 2024-02-05 at 1.53.50 AM.png",
  "Ingredients ,tahini - 1/2 cup,water - 180 ml , garlic powder - 1 tsp  ,onion powder - 1 tsp , pepper-1 tsp , salt - 1 tsp .",
  "Preparation :So so easy . Put everything together in a small blender or food processor and blend until everything is combined.Mix with your favorite pasta 🍝.",
  " 1 hrs , 10 min , 2 - 3 "
);
pasta1.pasta();

const pasta2 = new food(
  "Creamy spinach pasta 🍝",
  "imagess/pasta.img/Screenshot 2024-02-04 at 11.18.48 PM.png",
  "Ingredients  , pasta - 1 box ,white besns - 1/2 Can,cashew mil k- 1 cup ,nutritional yeast -2 tbsp ,spinach - 2 cups,raw cashews  - 1/4 cup, garlic powder - 1 tsp , salt- 1/2 tsp, pepper - 1/4 tsp",
  "Preparation: Cook pasta according to directions on package. Combine the remainder ingredients (except spinach) in a blender and blend until smooth. Add more cashew milk if needed.In a pan heat 1 tsp avocado oil and add chopped spinach, season with salt and pepper. This should wilt down in only 30 seconds! Once pasta is cooked drain add to cooked spinach and add in the sauce. ",
  " 1 hrs , 15 min ,  2 - 3 "
);
pasta2.pasta();

const breakfast1 = new food(
  "🌿 Simple Basil Pesto Recipe 🌿",
  "imagess/breakfast.img/Screenshot 2024-02-04 at 11.29.49 PM.png",
  "Ingredients  ,lemon juice - 3 cups , olive oil-1/4 cup ,pine nuts -  1/3 cup , garlic cloves - 2 , himalayan sea salt",
  "Preparation : Add all ingredients except olive oil to a food processor. Pulse until evenly chopped. Slowly add olive oil through the top of the processor and pulse until combined.",
  " 30 min ,  0 min , 1 - 2 "
);
breakfast1.breakfast();

const breakfast2 = new food(
  "Crispy Oven Baked Potato 🍠",
  "imagess/breakfast.img/Screenshot 2024-02-04 at 11.34.43 PM.png",
  "Ingredients  ,chickpea flour - 1 cup ,  bean flour - 120 g ,tapioca - 1/2 cup  , flour/starch - 60g , spinach leaves - 60 g , water - 1/8 cup ,salt -  1/3 tsp ",
  "Preparation : Process all ingredients in your food processor or blender until the batter is smooth. Use 1 cup of water if you plan to make thicker/smaller tortillas for tacos. Add about 1 1/8 cup of water if you want to make thinner/bigger tortillas for e.g. burritos",
  " 30 min  ,  0 min  ,  2 - 3 "
);
breakfast2.breakfast();

const salad3 = new food(
  "🍄 Grilled mushrooms 🍄 ",
  "imagess/salads.img/Screenshot 2024-02-04 at 11.48.45 PM.png",
  "Ingredients , mushroom fiats - 8 medium , olive cloves - 60mls , continental parsley - 1/4 chopped ",
  "Preparation :Step 1Preheat grill on medium-high. Line a grill tray or baking tray with foil. Place the mushrooms on the lined tray.Step 2Combine the olive oil, garlic and 2 tablespoons of the parsley in a bowl. Drizzle the mushrooms with the garlic oil.",
  " 1 hrs , 0 min , 2 - 3 "
);
salad3.salads();

const salad4 = new food(
  " Spinach salad 🍓🥑 ",
  "imagess/salads.img/Screenshot 2024-02-04 at 11.45.53 PM.png",
  "Ingredients  ,cashew butter -  1 tbsp , apple cider - 1 tbsp , vinegar  - 1/2 tbsp  , water - 60mls",
  "Preparation :Step 1Preheat grill on medium-high. Line a grill tray or baking tray with foil. Place the mushrooms on the lined tray.Step 2Combine the olive oil, garlic and 2 tablespoons of the parsley in a bowl. Drizzle the mushrooms with the garlic oil.",

  " 1 hrs  ,10 min , 2 - 3 "
);
salad4.salads();

const salad5 = new food(
  " Oven baked sweet potato 🍠",
  "imagess/salads.img/IMG_8520.jpg ",
  "Ingredients ,sweet potatoes - 4 ,  optional - 4 tbsp, black pepper",
  "Preparation :Step 1 Preheat oven to 425º. On a baking sheet lined with aluminum foil, prick sweet potatoes all over with a fork. Rub the outsides with a small amount of olive oil if you intend to eat the skins. Step 2 Bake until tender, 45 to 50 minutes. Step 3 Let cool, then split the tops open with a knife and top with a pat of butter. Step 4 Season with salt and pepper before serving.",
  " 1 hrs , 0 min , 2 - 3 "
);
salad5.salads();

const pasta3 = new food(
  " bolognese pasta 🍝 ",
  "imagess/pasta.img/IMG_8521.jpg",
  "Ingredients  ,cashew butter - 1 tbsp , apple cider vinegar - 1 tbsp ,water- 1/2 tbsp ",
  "Preparation :Thread a cherry tomato, a mozzarella ball, and a basil leaf onto small skewers or toothpicks.Arrange the skewers on a serving platter. Drizzle balsamic glaze over the skewers.  Serve as a refreshing and colorful appetizer.",
  " 1 hrs , 20 min , 2 - 3 "
);
pasta3.pasta();

const salad6 = new food(
  " Buddha.Bowl 🥗",
  "imagess/salads.img/IMG_8522.jpg",
  "Ingredients ,cashew butter- 1 tbsp,apple cider - 1 tbsp , vinegar -1/2 tbsp , water - 1/2 tbsp",
  "Preparation :Thread a cherry tomato, a mozzarella ball, and a basil leaf onto small skewers or toothpicks.Arrange the skewers on a serving platter.Drizzle balsamic glaze over the skewers.Serve as a refreshing and colorful appetizer.",
  " 1 hrs  ,10 min , 2 - 3 "
);
salad6.salads();

const lunch1 = new food(
  " Soup with Zucchini Noodles 🍜",
  "imagess/lunch.img/IMG_8524.jpg",
  "Ingredients  ,cashew butter- 1 tbsp,apple cider - 1 tbsp , vinegar -1/2 tbsp , water - 1/2 tbsp",

  "Preparation :  Thread a cherry tomato, a mozzarella ball, and a basil leaf onto small skewers or toothpicks.Arrange the skewers on a serving platter.Drizzle balsamic glaze over the skewers.Serve as a refreshing and colorful appetizer.",
  " 1 hrs , 10 min , 2 - 3 "
);
lunch1.lunch();

const breakfast3 = new food(
  "Chickpeas and kale 🥑 ",
  "imagess/breakfast.img/Screenshot 2024-02-02 at 1.15.14 AM.png",
  "Ingredients ,cashew butter- 1 tbsp,apple cider - 1 tbsp , vinegar -1/2 tbsp , water - 1/2 tbsp",

  "Preparation ,Thread a cherry tomato, a mozzarella ball, and a basil leaf onto small skewers or toothpicks.Arrange the skewers on a serving platter.Drizzle balsamic glaze over the skewers.Serve as a refreshing and colorful appetizer.",
  " 1 hrs   , 10 min , 2 - 3 "
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
      hidden_div.append(matchingDiv);
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
    cloned_meal.className =
      "common_class_forAll_recipe" + " " + "trendy_recipes";
    random_favs_conatiner.append(cloned_meal);
  }
}
random_trending_items();

function create_ingredients_list(ingredients_text) {
  let ingredientsList = document.createElement("ul");
  ingredientsList.className = "ingredients_list";

  if (ingredients_text) {
    ingredients_text.split(",").forEach((ingredientText) => {
      let listItem = document.createElement("li");
      let colon = ingredientText.split(":");
      listItem.innerHTML = colon.join(":<br>");
      ingredientsList.append(listItem);
    });
  }

  return ingredientsList;
}

function once_clicked(ingredients) {
  let ingredient_list = create_ingredients_list(ingredients.textContent);

  let newdiv_for_clicked = document.createElement("div");
  newdiv_for_clicked.className = "once_clicked_graph";
  newdiv_for_clicked.append(ingredient_list);

  return newdiv_for_clicked;
}

function twice_clicked(ingredients, preparation) {
  const full_recipe_info = document.querySelector(".full_recipe_info");

  let newdiv_for_twice_clicked = document.createElement("div");
  newdiv_for_twice_clicked.className = "twice_clicked_graph";
  if (ingredients) {
    let ingredientsClone = ingredients.cloneNode(true);
    ingredientsClone.className = "ingredients_clone";

    let ingredientsArray = ingredientsClone.textContent.split(",");
    const whole_ingredients_container = document.createElement("div");
    whole_ingredients_container.className = "whole_ingredients_container";
    let headerDiv = document.createElement("div");
    headerDiv.textContent = ingredientsArray.shift().trim();
    headerDiv.className = "ingredients_title";
    whole_ingredients_container.append(headerDiv);

    let ingredientsList = document.createElement("ul");
    ingredientsList.className = "ingredients_list_clone";

    ingredientsArray.forEach((ingredientText) => {
      let listItem = document.createElement("li");
      const ingr_item = document.createElement("div");

      const mass_item = document.createElement("div");
      ingr_item.className = "ingr_item";
      mass_item.className = "mass_item";
      let ingredientText_arr = ingredientText.split("-");

      ingr_item.append(ingredientText_arr[0]);

      if (ingredientText_arr[1]) {
        mass_item.append(ingredientText_arr[1]);
      } else {
        mass_item.innerHTML = "To taste";
      }

      listItem.append(ingr_item, mass_item);

      ingredientsList.append(listItem);
    });

    whole_ingredients_container.append(ingredientsList);
    newdiv_for_twice_clicked.append(whole_ingredients_container);
  }

  if (preparation) {
    let preparations_p = document.createElement("p");
    preparations_p.textContent = preparation.textContent;
    preparations_p.className = "preparations_clone";

    let preparationsArray = preparations_p.textContent.split(":");
    const whole_prep_container = document.createElement("div");
    whole_prep_container.className = "whole_prep_container";
    newdiv_for_twice_clicked.append(whole_prep_container);

    let prep_title_div = document.createElement("div");
    prep_title_div.textContent = preparationsArray[0].trim();
    whole_prep_container.append(prep_title_div);
    prep_title_div.className = "prep_title_div";
    const prep_text_container = document.createElement("div");
    prep_text_container.className = "prep_text_container";

    let prep_text = document.createElement("div");
    prep_text.textContent = preparationsArray.slice(1).join().trim();
    prep_text.className = "prep_text";
    prep_text_container.append(prep_text);
    whole_prep_container.append(prep_text_container);
  }

  full_recipe_info.append(newdiv_for_twice_clicked);

  return newdiv_for_twice_clicked;
}
let clickCount;
function click_Onrecipe() {
  let all_recipe = document.querySelectorAll(".common_class_forAll_recipe");

  all_recipe.forEach(function (recipe) {
    recipe.addEventListener("click", function () {
      clickCount = recipe.dataset.clickCount || 0;

      let ingredients = recipe.querySelector(".ingredients");
      let preparation = recipe.querySelector(".preparation");

      if (clickCount % 2 == 0) {
        let newDiv = once_clicked(ingredients);

        recipe.append(newDiv);
      } else {
        document.getElementById("section1").style.display = "none";
        document.getElementById("section2").style.display = "none";
        document.querySelector(".once_clicked_graph").style.display = "none";

        document.getElementById("full_recipe_info_section").style.display =
          "block";
        recipe.classList.add("clicked");
        prep(recipe);

        const full_recipe_img_div = document.createElement("div");
        let img = recipe.querySelector("img").cloneNode(true);
        full_recipe_img_div.append(img);
        full_recipe_img_div.className = "full_recipe_img_div";

        let newDiv = twice_clicked(ingredients, preparation);
        full_recipe_info_section.append(full_recipe_img_div);
        const full_recipe_title = recipe
          .querySelector(".recipes_title")
          .cloneNode(true);
        full_recipe_title.className = "full_recipe_title";
        const full_recipe_title_div = document.createElement("div");
        full_recipe_title_div.className = "full_recipe_title_div";
        full_recipe_title_div.append(full_recipe_title);
        const full_recipe_prep_info =
          document.querySelector(".full_recipe_info");
        full_recipe_title_div.append(full_recipe_prep_info);
        full_recipe_info_section.append(full_recipe_title_div);

        full_recipe_info_section.append(newDiv);
      }
      clickCount++;
      recipe.dataset.clickCount = clickCount;
    });
  });
}

function prep(clickedRecipe) {
  if (clickedRecipe) {
    const prep_info = clickedRecipe.querySelector(".prep_info").textContent;

    const full_recipe_info_section =
      document.querySelector(".full_recipe_info");

    const prep_info_div = document.createElement("div");
    prep_info_div.className = "prep_info_div";

    prep_info.split(",").forEach((N) => {
      let listitem = document.createElement("span");
      listitem.append(N);
      prep_info_div.append(listitem);
    });

    full_recipe_info_section.append(prep_info_div);
    const prep_template_div = document.querySelector(".prep_inf_container");
    prep_template_div.style.display = "flex";
    full_recipe_info_section.append(prep_template_div);
  }

  clickedRecipe.classList.remove("clicked");
}

click_Onrecipe();

function backtohome(event) {
  document.querySelector("#full_recipe_info_section").style.display = "none";
  document.querySelector("#salads_page_id").style.display = "none";
  document.querySelector("#lunch_page_id").style.display = "none";
document.querySelector("#breakfast_page_id").style.display = "none";
document.querySelector("#pasta_page_id").style.display = "none";
  document.getElementById("section1").style.display = "none";

  document.getElementById("section2").style.display = "block";
}

const second_page = document.querySelector(".second_page");
const menu_bar = document.querySelector(".menu_bar");
const salads_section = document.querySelector(".salads_page");

menu_bar.addEventListener("click", (event) => {
  const nav_bar = document.querySelector(".nav_bar");
  nav_bar.classList.toggle("menu_style");
});

document.querySelector("#salads_page_id").style.display = "none";
document.querySelector("#lunch_page_id").style.display = "none";
document.querySelector("#breakfast_page_id").style.display = "none";
document.querySelector("#pasta_page_id").style.display = "none";

function salads_page() {
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "none";
  document.getElementById("full_recipe_info_section").style.display = "none";
  const salads_section = document.getElementById("salads_page_id"); 
  salads_section.style.display = "block";
  const salad_recipes_arr = Array.from(total_recipes).filter((recipe) => {
    return recipe.classList.contains("salad");
  });
  salad_recipes_arr.forEach((saladrecipe) => {
    salads_section.append(saladrecipe.cloneNode(true));
  });
 
}

function breakfast_page() {
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "none";
  document.getElementById("full_recipe_info_section").style.display = "none";
  const breakfast_section = document.getElementById("breakfast_page_id"); 
  breakfast_section.style.display = "block";
  const breakfast_recipes_arr = Array.from(total_recipes).filter((recipe) => {
    return recipe.classList.contains("breakfast");
  });
  breakfast_recipes_arr.forEach((breakfastrecipe) => {
    breakfast_section.append(breakfastrecipe.cloneNode(true));
  });
 
}

function lunch_page() {
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "none";
  document.getElementById("full_recipe_info_section").style.display = "none";
  const lunch_section = document.getElementById("lunch_page_id"); 
  lunch_section.style.display = "block";
  const lunch_recipes_arr = Array.from(total_recipes).filter((recipe) => {
    return recipe.classList.contains("lunch");
  });
  lunch_recipes_arr.forEach((lunchrecipe) => {
    lunch_section.append(lunchrecipe.cloneNode(true));
  });
}


function pasta_page() {
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "none";
  document.getElementById("full_recipe_info_section").style.display = "none";
  const pasta_section = document.getElementById("pasta_page_id"); 
  pasta_section.style.display = "block";
  const pasta_recipes_arr = Array.from(total_recipes).filter((recipe) => {
    return recipe.classList.contains("pasta");
  });
  pasta_recipes_arr.forEach((pastarecipe) => {
    pasta_section.append(pastarecipe.cloneNode(true));
  });
}

