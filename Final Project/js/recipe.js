const urlParams = new URLSearchParams(window.location.search);

const recipeId = urlParams.get('id');
const recipeURL = "https://api.spoonacular.com/recipes/" + recipeId + "/information?apiKey=2d1b394733e145a9a09f32b6ce3dbf6b";


console.log(recipeId);
fetch(recipeURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const recipeContainer = document.querySelector('.recipe-container');
    recipeContainer.innerHTML = showRecipe(jsObject);
    const ingredientContainer = document.querySelector('.ingredients-list');
    const recipeTitle = document.getElementById('recipe-title');
    recipeTitle.innerHTML = jsObject.title;
    //ingredientContainer.innerHTML = showIngreds(jsObject)
    var ingredientsList = document.createElement('ul');
    for (i = 0; i < jsObject.extendedIngredients.length; i++) {
      var list = document.createElement('li');
      list.innerHTML = jsObject.extendedIngredients[i]["amount"] +
        " " +
        jsObject.extendedIngredients[i]["unit"] +
        " " +
        jsObject.extendedIngredients[i]["name"];

      ingredientsList.append(list);
    }
    ingredientContainer.append(ingredientsList);
  });



function showRecipe(params) {
  return `
      <div class="recipe">
        <div class="card">
          <img src = "https://spoonacular.com/recipeImages/${params.id}-556x370.jpg" class="img-recipe"/>
          <div class="info">
            <p>Cooks in ${params.readyInMinutes} minutes</p>
            <hr>
            <p>Servings: ${params.servings}</p>
          </div>
        </div>
        <h3 class="directionsTitle">Directions</h3>
        <div class="recipe-info">
          <p>${params.instructions}</p>
        </div>
      </div>
      `;
}