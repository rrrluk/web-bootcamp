var p1Btn = document.getElementById("p1");
var p2Btn = document.getElementById("p2");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var resetBtn = document.getElementById("reset");
var numInput = document.querySelector("input");
var gameOver = false;
var winningScore = 5;
var winningScoreDisplay = document.getElementById("winningScoreDisplay");

p1Btn.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1Display.classList.add("winner");
      console.log("Game Over!");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Btn.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2Display.classList.add("winner");
      console.log("Game Over!");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetBtn.addEventListener("click", function() {
  reset();
});

numInput.addEventListener("change", function() {
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value);
  reset();
});

function reset() {
  p1Score = 0;
  p2SCore = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}
