function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let mainIngredient = document.querySelector("#main-ingredient");
  let apiKey = "o091fdfe309a88f508fe60bcaa4tc41a";
  let context =
    "You are a vegetarian cuisine expert and love to create easy vegetarian recipes. Your mission is to generate an easy and fast vegetarian recipe, with the following format: the recipe title inside an <h2>, write ingredients inside an <h3>, then make the list of ingredients with <li> but don't add a marker, write directions inside an <h3>directions:</h3>, and finally write the step-by-step instructions, each step separated with <br />. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate a vegetarian recipe where the main ingredient is ${mainIngredient.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `Generating a vegetarian recipe with ${mainIngredient.value}`;

  axios.get(apiUrl).then(displayRecipe);
}
let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
