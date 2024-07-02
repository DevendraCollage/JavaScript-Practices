// Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.

const prompt = require("prompt-sync")();

console.log("Enter the number 1 here : ");
var num1 = Number.parseInt(prompt());
console.log("Enter the number 2 here : ");
var num2 = Number.parseInt(prompt());
console.log("Enter the number 3 here : ");
var num3 = Number.parseInt(prompt());

if ((num1 === num2) === num3) {
  console.log(30);
} else if (num1 == num2 || num1 == num3 || num2 == num3) {
  console.log(40);
} else {
  console.log(20);
}
