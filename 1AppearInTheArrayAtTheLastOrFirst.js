// Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.

const prompt = require("prompt-sync")();

console.log("Enter the size of the Array : ");
var size = parseInt(prompt());

var arr = [];

for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr.push(elem);
}

if (arr.length >= 1) {
  if (arr[0] === 1 || arr[arr.length - 1] === 1) {
    console.log(true);
  } else {
    console.log(false);
  }
}
