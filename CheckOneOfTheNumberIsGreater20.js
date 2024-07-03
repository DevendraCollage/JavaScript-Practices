// Write a JavaScript program that evaluates three given integers to determine if any one of them is greater than or equal to 20 and less than the other two.

const prompt = require("prompt-sync")();

console.log("Enter the number-1 here : ");
var n1 = Number.parseInt(prompt());
console.log("Enter the number-2 here : ");
var n2 = Number.parseInt(prompt());
console.log("Enter the number-3 here : ");
var n3 = Number.parseInt(prompt());

if (n1 >= 20 && n1 < n2 && n1 < n3) {
  console.log(true);
} else {
  console.log(false);
}
