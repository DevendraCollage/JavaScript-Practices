// Write a JavaScript program to find the smallest round number not less than a given value.

// Note: A round number is informally considered to be an integer that ends with one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600.

const prompt = require("prompt-sync")();

console.log("Enter the number here : ");
var n = parseInt(prompt());

while (n % 10) {
  n++;
}

console.log(n);
