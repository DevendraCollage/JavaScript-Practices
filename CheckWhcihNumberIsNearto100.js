// Write a JavaScript program to find the closest value to 100 from two numerical values.

const prompt = require("prompt-sync")();

// Read the number from the user
console.log("Enter the number 1 here : ");
var n1 = Number.parseInt(prompt());
console.log("Enter the number 2 here : ");
var n2 = Number.parseInt(prompt());

var near100_1 = 100 - n1;
var near100_2 = 100 - n2;

if (near100_1 < near100_2) {
  console.log(`The Number ${n1} is Nearest to 100`);
} else {
  console.log(`The number ${n2} is Nearest to 100`);
}
