//  Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.

const prompt = require("prompt-sync")();

console.log("Enter the number-1 here : ");
var n1 = Number.parseInt(prompt());
console.log("Enter the number-2 here : ");
var n2 = Number.parseInt(prompt());

if (n2 == 0) {
  console.log("Cannot divide number with zero.");
}
var result = n1 / n2;
var formatResult = result.toLocaleString(undefined, {
  maximumFractionDigits: 2,
});

console.log(formatResult);
