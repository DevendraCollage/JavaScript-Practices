// Write a JavaScript program to check whether a given fraction is proper or not.

// Note: There are two types of common fractions, proper or improper. When the numerator and the denominator are both positive, the fraction is called proper if the numerator is less than the denominator, and improper otherwise.

const prompt = require("prompt-sync")();

console.log("Enter Array Size : ");
var size = parseInt(prompt());

var arr = [];

console.log("Enter Array Elements : ");
for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr.push(elem);
}

var div = Math.abs(arr[0] / arr[1]);

if (div < 1) {
  console.log("Proper Fraction!");
} else {
  console.log("Improper Fraction!");
}
