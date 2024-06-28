// Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.

const prompt = require("prompt-sync")();

// Read the two number from the user
console.log("Enter the number 1 here : ");
var n1 = Number.parseInt(prompt());
console.log("Enter the number 2 here : ");
var n2 = Number.parseInt(prompt());

if (
  (n1 >= 40 && n1 <= 70) ||
  (n1 >= 70 && n1 <= 100) ||
  (n2 >= 40 && n2 <= 60) ||
  (n2 >= 70 && n2 <= 100)
) {
  console.log(true);
} else {
  console.log(false);
}
