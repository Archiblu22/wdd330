const linkList = ["week01/index.html", "week02/index.html", "week03/index.html", "week04/index.html", "week05/index.html", "ChallengeOne/index.html", "week07/index.html", "week08/index.html" ];
const titleList = ["Week01", "Week02", "Week03", "Week04", "Week05", "ToDo App", "Week07", "Week08"];

let weekLinks = document.querySelector('#weekLinks');

linkList.forEach((x, i) => {
  weekLinks.insertAdjacentHTML("beforeend", `<li><a href="${x}"><div>${titleList[i]}</div></a></li>`)
})