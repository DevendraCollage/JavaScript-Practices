// Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers.

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

console.log("Enter the Elements you want the max Sum : ");
var sumNum = parseInt(prompt());

var max = arr[0] + arr[1];

for (let i = 0; i < size; i++) {
  if (arr[i] + arr[i + 1] > max) {
    max = arr[i] + arr[i + 1];
  }
}

console.log(arr);
console.log(max);
