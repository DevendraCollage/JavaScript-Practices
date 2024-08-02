// Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.

// For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z

const prompt = require("prompt-sync")();

console.log("Enter the number-1 here : ");
var n1 = parseInt(prompt());
console.log("Enter the number-2 here : ");
var n2 = parseInt(prompt());
console.log("Enter the random number here : ");
var r = parseInt(prompt());

if (n1 + n2 === r) {
  console.log(true);
} else if (n1 - n2 === r) {
  console.log(true);
} else if (n1 * n2 === r) {
  console.log(true);
} else if (n1 / n2 === r) {
  console.log(true);
} else {
  console.log(false);
}
