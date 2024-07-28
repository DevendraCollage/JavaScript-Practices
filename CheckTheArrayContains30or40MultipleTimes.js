// Write a JavaScript program to test whether a given array of integers contains 30 or 40 twice. The array length should be 0, 1, or 2.

const prompt = require("prompt-sync")();

console.log("Enter the size of the Array : ");
var size = parseInt(prompt());

var arr = [];

for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  arr[i] = parseInt(prompt());
}
var count = 0;
for (let i = 0; i < size; i++) {
  if (arr[i] === 30 || arr[i] === 40) {
    count++;
  } else {
    continue;
  }
}

if (count >= 2) {
  console.log(true);
} else {
  console.log(false);
}
