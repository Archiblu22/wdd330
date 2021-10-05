const linkList = ["week01/index.html", "week02/index.html", "week03/index.html", "week04/index.html"];
const titleList = ["Week01", "Week02", "Week03", "Week04"];

let weekLinks = document.querySelector('#weekLinks');

linkList.forEach((x, i) => {
  weekLinks.insertAdjacentHTML("beforeend", `<li><a href="${x}"><div>${titleList[i]}</div></a></li>`)
})