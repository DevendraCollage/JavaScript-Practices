// Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer.

const prompt = require("prompt-sync")();

console.log("Enter the number here : ");
var n = parseInt(prompt());

var sum = 0;
var i = 0;

while (sum <= n) {
  sum = sum + i++;
}

console.log(`You Required ${i - 2} Numbers for this sum!`);
