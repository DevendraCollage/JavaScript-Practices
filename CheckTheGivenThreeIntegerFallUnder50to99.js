// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.

const prompt = require("prompt-sync")();

// Read the three number from the user
console.log("Enter the number 1 here : ");
var num1 = Number.parseInt(prompt());
console.log("Enter the number 2 here : ");
var num2 = Number.parseInt(prompt());
console.log("Enter the number 3 here : ");
var num3 = Number.parseInt(prompt());

if (
  (num1 >= 50 && num1 <= 99) ||
  (num2 >= 50 && num2 <= 99) ||
  (num3 >= 50 && num3 <= 99)
) {
  console.log(true);
} else {
  console.log(false);
}
