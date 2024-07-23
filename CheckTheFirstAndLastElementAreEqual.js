// Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.

const prompt = require("prompt-sync")();

console.log("Enter the size of the Array : ");
var size = parseInt(prompt());

var arr = [];

for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr.push(elem);
}

if (arr[0] === arr[arr.length - 1]) {
  console.log(true);
} else {
  console.log(false);
}
