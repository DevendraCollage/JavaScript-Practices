// Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.

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

var maxDiff = 0;
for (let i = 0; i < size; i++) {
  for (let j = 0; j < i; j++) {
    var diff = Math.abs(arr[i] - arr[j]);
    maxDiff = Math.max(maxDiff, diff);
  }
}

console.log(maxDiff);
