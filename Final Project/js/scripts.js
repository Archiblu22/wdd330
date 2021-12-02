const menuPlannerAPI = 'https://api.spoonacular.com/mealplanner/generate?apiKey=6214a0aba94c48758687d70ed6918c7d&timeFrame=day';

fetchMealPlanner();

function handler(e) {
  e.preventDefault();
  const {
    value
  } = document.getElementById('search');
  if (value) {
    window.location.href = `results.html?q=${value}`;
  }
}

function fetchMealPlanner() {
  fetch(menuPlannerAPI)
    .then(function (response) {
      if (response.status !== 200) {
        console.log(
          `Oops! Status Code: ${response.status}`
        );
        return;
      }

      response.json().then(function (data) {
        console.log(data);
        showMenuPlan(data.meals);
      });
    })
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
}

function showMenuPlan(data) {
  const appendCards = document.querySelector('.meals');
  data.forEach(results => {
    appendCards.innerHTML += getCard(results);
  });
}

function getCard(params) {
  return `
      <div class="card-container">
        <a href=recipe.html?id=${params.id}>
          <div class="card">
            <img src = "https://spoonacular.com/recipeImages/${params.id}-556x370.jpg" class="img-card"/>
          <div>
          <div class="my-3 font-title text-center">
            ${params.title}
          </div>
          <hr>
          <div class="my-3 font-title text-center">
          Prep time: ${params.readyInMinutes} minutes
          </div>
          </div>
          </div>
        </a>
      </div>
    `;
}