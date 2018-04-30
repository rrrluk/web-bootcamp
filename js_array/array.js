var fruits = ["Lemon", "Apple", "Banana", "Orange", "Watermelon"];

// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// console.log("---");

fruits.forEach(function(element) {
  console.log(element);
});

// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// numbers.forEach(function(number) {
//   if (number % 4 === 0) {
//     console.log(number);
//   }
// });

// console.log("---");

// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 4 === 0) {
//     console.log(numbers[i]);
//   }
// }

// problem set

// printReverse function (take array and print it in reverse order)
function printReverse(list) {
  for (var i = list.length - 1; i >= 0; i--) {
    console.log(list[i]);
  }
}

printReverse([1, 3, 4]);

// isUniform function (take array as argument, and check if all the items are the same)
// store 1-st item in variable, check that against every item in array

function isUniform(list) {
  var controlValue = list[0];
  for (var i = 1; i < list.length; i++) {
    if (list[i] !== controlValue) {
      return false;
    }
  }
  console.log("whoot, true");
  return true;
}

console.log("isUniform:");
isUniform([2, 2, 2]);

// sumArray function (assume array is all numbers, add them up)
function sumArray(list) {
  var result = 0;
  list.forEach(function(item) {
    result = result + item;
  });
  console.log(result);
}
console.log("sumArray:");
sumArray([1, 1, 1, -10]);

// max function(assume all are numbers, return max)
function max(list) {
  var maxValue = list[0];
  list.forEach(function(item) {
    if (item > maxValue) {
      maxValue = item;
    }
  });
  console.log(maxValue);
}

console.log("Max:");
max([-100, 22, 300]);
