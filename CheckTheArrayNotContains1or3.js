// Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.

const prompt = require("prompt-sync")();

console.log("Enter the size of the Array : ");
var size = parseInt(prompt());

var arr = [];

for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  arr[i] = parseInt(prompt());
}

if (arr.indexOf(1) == -1 || arr.indexOf(3) == -1) {
  console.log(true);
} else {
  console.log(false);
}
