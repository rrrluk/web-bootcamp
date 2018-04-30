function sayHello(firstName, lastName) {
  var name = firstName + " " + lastName;
  console.log("Hello there " + name + "!");
}

sayHello("Plap", "Plop");

function ruut(num) {
  return num * num;
}

ruut(4);

console.log("4 ruudus on " + ruut(4));

function test(x) {
  return x * 2;
  // pärast esimest returni funktsioon lõpetab töö
  console.log(x);
  return x / 2;
}

console.log(test(40));

// IS EVEN
// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// IS EVEN v.2
function isEven(num) {
  return num % 2 === 0;
}

// factorial
// 4! is 4 x 3 x 2 x 1 = 24
// 5! is 5 x 4 x 3 x 2 x 1 = 120
// 0! is 1!!! ei ole bugi, ongi nii

function factorial(num) {
  var result = 1;
  for (var i = 2; i <= num; i++) {
    result = result * i;
  }
  return result;
}

// kebab to snake
// how to replace a character in a string?
function kebabToSnake(str) {
  var snakeStr = str.replace(/-/g, "_");
  return snakeStr;
}

console.log(kebabToSnake("hello-snake-kebab-plap-whee"));

console.log("---");

function sing() {
  console.log("esimene salm");
  console.log("teine salm");
  console.log("kolmas salm");
  console.log("neljas salm");
}

setInterval(sing, 1000);
