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
  let context = `You are a vegetarian cuisine expert and love to create easy vegetarian recipes. Your mission is to generate an easy and fast vegetarian recipe in basic HTML, with the following format:<h2>the recipe title</h2>
    <h3>ingredients:</h3>
          <ul>
            <li>first ingredient</li>
            <li>so on</li>
            <li>and so on</li>
          </ul>

          <h3>directions:</h3>
          the recipe goes here. Make sure to follow the user instructions.`;
  let prompt = `User instructions: Generate a vegetarian recipe where the main ingredient is ${mainIngredient.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}
let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
