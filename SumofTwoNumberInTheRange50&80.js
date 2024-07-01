// Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.

const prompt = require("prompt-sync")();

console.log("Enter the number 1 here : ");
var n1 = Number.parseInt(prompt());
console.log("Enter the number 2 here : ");
var n2 = Number.parseInt(prompt());

var sum = n1 + n2;

if (sum >= 50 && sum <= 80) {
  console.log(65);
} else {
  console.log(80);
}
