// Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.

const prompt = require("prompt-sync")();

console.log("Enter the number-1 here : ");
var n1 = Number.parseInt(prompt());
console.log("Enter the number-2 here : ");
var n2 = Number.parseInt(prompt());

if (n1 % 7 == 0 || n2 % 11 == 0) {
  console.log(true);
} else {
  console.log(false);
}
