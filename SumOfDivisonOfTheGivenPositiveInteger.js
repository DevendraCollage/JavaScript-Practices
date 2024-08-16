// Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers.

const prompt = require("prompt-sync")();

console.log("Enter the number here : ");
var n = parseInt(prompt());

var sum = 0;

while (n > 0) {
  sum = sum + n;
  n = Math.floor(n / 2);
}

console.log(sum);
