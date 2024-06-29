// Write a JavaScript program that checks whether the last digit of three positive integers is the same.

const prompt = require("prompt-sync")();

console.log("Enter the number 1 here : ");
var n1 = Number.parseInt(prompt());
console.log("Enter the number 2 here : ");
var n2 = Number.parseInt(prompt());
console.log("Enter the number 3 here : ");
var n3 = Number.parseInt(prompt());

var n1Last = n1 % 10;
var n2Last = n2 % 10;
var n3Last = n3 % 10;

if (n1Last == n2Last && n2Last == n3Last) {
  console.log(true);
} else {
  console.log(false);
}
