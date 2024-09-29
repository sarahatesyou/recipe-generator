function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "recipe goes here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);

/*`<h2>the recipe title</h2>
    <h3>ingredients:</h3>
          <ul>
            <li>first ingredient</li>
            <li>so on</li>
            <li>and so on</li>
          </ul>

          <h3>directions:</h3>
          the recipe goes here`*/
