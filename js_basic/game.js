// create secretNumber
var secretNumber = 4;
// ask user to guess
var stringGuess = prompt("Enter a number");
var guess = Number(stringGuess);

// check if guess is right
if (guess === secretNumber) {
  alert("Correct!");
} else if (guess > secretNumber) {
  // check if higher
  alert("Too high, guess again.");
} else {
  // otherwise, check if lower
  alert("Too low, guess again.");
}
