// Write a JavaScript program to reverse the bits of a given 16-bit unsigned short integer.

const prompt = require("prompt-sync")();

console.log("Enter the number here : ");
var n = parseInt(prompt());

var result = 0;

for (let i = 0; i < 16; i++) {
  result = result * 2 + (n % 2);
  n = Math.floor(n / 2);
}

console.log(result);
