const linkList = ["/week01/index.html", "/week02/index.html"];
const titleList = ["Week01", "Week02"];

let weekLinks = document.querySelector('#weekLinks');

linkList.forEach((x, i) => {
  weekLinks.insertAdjacentHTML("beforeend", `<li><a href="${x}"><div>${titleList[i]}</div></a></li>`)
})