const urlParams = new URLSearchParams(window.location.search);

// General Info
const myAPI = "https://api.spoonacular.com/recipes/complexSearch?apiKey=2d1b394733e145a9a09f32b6ce3dbf6b";

const resultsArray = [];

const ready = callback => {
  if (document.readyState !== 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
};

//  Load Results From API
ready(function () {
  if (urlParams.has('q')) {
    fetchResults(urlParams.get('q'));
  }
});

function fetchResults(query) {
  fetching(true);
  fetch(`${myAPI}&query=${query}&offset=${resultsArray.length}`)
    .then(function (response) {
      if (response.status !== 200) {
        console.log(
          `Oops!. Status Code: ${response.status}`
        );
        return;
      }
      response.json().then(function (data) {
        if (!resultsArray.length && !data.results.length) {
          showMessage();
        }
        resultsArray.push(...data.results);
        showData(data);
      });
      fetching(false);
    })
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
}

function fetching(state) {
  const loader = document.querySelector('.loader');
  if (state) {
    loader.classList.remove('hidden');
  } else {
    loader.classList.add('hidden');
  }
}

//  Display Results
function showData(data) {
  if (data.results.length) {
    const appendValue = document.querySelectorAll('.results-query-name');
    appendValue.forEach(element => {
      if (!element.innerHTML) {
        if (element.classList.contains('hidden')) {
          element.classList.remove('hidden');
        }
        element.append(urlParams.get('q'));
      }
    });
  }
  const appendCards = document.querySelector('.show-results');
  data.results.forEach(results => {
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
          <div class="my-3 font-title text-center">${params.title}</div>
          </div>
          </div>
        </a>
    </div>
    `;
}