// Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.

const prompt = require("prompt-sync")();

console.log("Enter the Number : ");
var num = parseInt(prompt());

console.log("Enter the Divisor : ");
var div = parseInt(prompt());

if (div == 1) {
  console.log(num);
} else {
  while (num % div == 0) {
    num = num / div;
  }
}

console.log(num);
