// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

const prompt = require("prompt-sync")();

console.log("Enter the number 1 here : ");
var n1 = Number.parseInt(prompt());
console.log("Enter the number 2 here : ");
var n2 = Number.parseInt(prompt());
console.log("Enter the number 3 here : ");
var n3 = Number.parseInt(prompt());

num1 = n1 % 10;
num2 = n2 % 10;
num3 = n3 % 10;

if (num1 == num2 && num1 == num3 && num2 == num3) {
  console.log(true);
} else {
  console.log(false);
}
