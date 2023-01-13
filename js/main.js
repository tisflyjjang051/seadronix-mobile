// function average(a, b) {
//   const avg = (a + b) / 2;
//   console.log(avg);
// }
//average(76, 56);
//average(90, 80);

const btnAll = document.querySelector(".btn--all");
const header = document.querySelector(".header");
btnAll.addEventListener("click", function () {
  //console.log("btnAll 클릭");
  //header.classList.add("on");
  if (header.classList.contains("on")) {
    header.classList.remove("on");
  } else {
    header.classList.add("on");
  }
});
