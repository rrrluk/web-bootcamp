var btn = document.getElementById("btn");
var txt = document.getElementById("txt");
var bgBtn = document.getElementById("bgBtn");
var isGold = false;

console.log(btn);
console.log(txt);

btn.addEventListener("click", function() {
  txt.textContent = "Clicked!";
});

// // With logic and .style.background
// bgBtn.addEventListener("click", function() {
//   if (isGold) {
//     document.body.style.background = "white";
//   } else {
//     document.body.style.background = "gold";
//   }
//   isGold = !isGold;
// });

//  With .classList.toggle
bgBtn.addEventListener("click", function() {
  document.body.classList.toggle("bg");
});

var select = document.querySelector("ul");

// select.addEventListener("click", function() {
//   console.log("You clicked the ul?");
// });

var lis = document.querySelectorAll("li");

// for (var i = 0; i < lis.length; i++) {
//   lis[i].addEventListener("click", function() {
//     this.style.background = "lime";
//   });
// }

for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", changeBackground);
}

function changeBackground() {
  this.style.background = "red";
}
