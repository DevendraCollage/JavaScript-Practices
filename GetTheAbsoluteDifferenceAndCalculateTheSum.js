// Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers.

const prompt = require("prompt-sync")();

console.log("Enter the size of the Array : ");
var size = parseInt(prompt());

var arr = [];

console.log("Enter the Array Elements : ");
for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr.push(elem);
}

var sum = 0;

for (let i = 1; i < size; i++) {
  var diff = Math.abs(arr[i] - arr[i - 1]);
  sum += diff;
}

console.log(sum);
