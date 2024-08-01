// Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not.

const prompt = require("prompt-sync")();

console.log("Enter the Number-1 : ");
var num1 = parseInt(prompt());
console.log("Enter the Number-2 : ");
var num2 = parseInt(prompt());
console.log("Enter the Divisor Number : ");
var div = parseInt(prompt());

if (num1 % div == 0 && num2 % div == 0) {
  console.log(true);
} else {
  console.log(false);
}
