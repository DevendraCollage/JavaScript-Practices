// Write a JavaScript program to get the largest even number from an array of integers.

const prompt = require("prompt-sync")();

console.log("Enter Size Array : ");
var size = parseInt(prompt());

var arr = [];

console.log("Enter Elements : ");
for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr.push(elem);
}

var max = arr[0];

for (let i = 0; i < size; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);
