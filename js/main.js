const linkList = ["wdd330/week01/index.html", "wdd330/week02/index.html"];
const titleList = ["Week01", "Week02"];

let weekLinks = document.querySelector('#weekLinks');

linkList.forEach((x, i) => {
  weekLinks.insertAdjacentHTML("beforeend", `<li><a href="${x}"><div>${titleList[i]}</div></a></li>`)
})