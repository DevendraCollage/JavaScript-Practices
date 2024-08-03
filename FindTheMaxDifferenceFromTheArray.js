// Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.

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
console.log("\n");

//! Possible in this way also
// var maxDiff = arr[0] - arr[1];
var maxDiff = -1;
var temp;

for (let i = 0; i < arr.length - 1; i++) {
  temp = Math.abs(arr[i] - arr[i + 1]);
  maxDiff = Math.max(maxDiff, temp);
}

console.log(arr);
console.log(maxDiff);
