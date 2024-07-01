// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

const prompt = require("prompt-sync")();

console.log("Enter the number 1 here : ");
var num1 = Number.parseInt(prompt());
console.log("Enter the number 2 here : ");
var num2 = Number.parseInt(prompt());

if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8) {
  console.log(true);
} else {
  console.log(false);
}
