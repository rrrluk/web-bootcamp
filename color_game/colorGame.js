var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetBtn = document.getElementById("reset");
var modeBtns = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1");

init();

function init() {
  setupModeBtns();
  setupSquares();
  reset();
}

resetBtn.textContent = "New Colors";

resetBtn.addEventListener("click", function() {
  reset();
});

function setupModeBtns() {
  for (var i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener("click", function() {
      modeBtns[0].classList.remove("selected");
      modeBtns[1].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        numOfSquares = 3;
      } else {
        numOfSquares = 6;
      }

      reset();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    // add eventListeners
    squares[i].addEventListener("click", function() {
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare color to picked color
      console.log(pickedColor, clickedColor);
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetBtn.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function changeColors(color) {
  // loop through all squares
  // change each color to match given color
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function generateRandomColors(num) {
  // make an array
  var arr = [];
  // repeat num times
  for (var i = 0; i < num; i++) {
    // get random color and push into arr
    arr.push(randomColor());
  }
  // return array
  return arr;
}

function randomColor() {
  // pick a "red" from 0-255
  var r = Math.floor(Math.random() * 256);
  // pick a "green" from 0-255
  var g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0-255
  var b = Math.floor(Math.random() * 256);
  // concatenate string
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function reset() {
  // generate all new colors
  colors = generateRandomColors(numOfSquares);
  // pick a new random color
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  // change all colors on page
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  messageDisplay.textContent = "";
  h1.style.backgroundColor = "steelblue";
  resetBtn.textContent = "New Colors";
}
