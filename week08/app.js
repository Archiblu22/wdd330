let page = 1;
console.log(page);
let url = `https://swapi.dev/api/starships/?page=${page}`;

fetch(url)
.then((response) => {
    if(response.ok) {
        const jsonData = response.json();
        console.log(jsonData);
        return jsonData;
    }
    throw Error(response.statusText);
})

.then((responses) => {
    const shipList = document.getElementById('list');

    const previous = document.getElementById('prev');

    const next = document.getElementById('next');

    previous.addEventListener("click", function () {
        if (previous.clicked == true && page > 1) {
            page--;
        } else {
            alert("You are already on the first page.")
        }
    })

    next.addEventListener("click", function () {
        if (next.clicked == true && page < 4) { //possibly change to page < 5
            page++;
        }
    })

    for (let i = 0; i < responses.results.length; i++) {
        const ship = document.createElement("li");
        ship.innerHTML = `<h2>${responses.results[i].name}</h2>`
        shipList.appendChild(ship);
    }

})
.catch(error => console.log('There was an error', error))

