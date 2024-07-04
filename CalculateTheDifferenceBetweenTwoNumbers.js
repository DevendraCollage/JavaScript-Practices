// Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.

const prompt = require("prompt-sync")();

console.log("Enter the number one here : ");
var n1 = Number.parseInt(prompt());
console.log("Enter the number two here : ");
var n2 = Number.parseInt(prompt());

var diff = n1 - n2;
var sum = n1 + n2;

if (diff == 15 || sum == 15 || n1 == 15 || n2 == 15) {
  console.log(true);
} else {
  console.log(false);
}
