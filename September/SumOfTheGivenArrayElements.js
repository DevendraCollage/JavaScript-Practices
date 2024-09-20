// Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function. (Version-1)

const prompt = require("prompt-sync")();

var size = parseInt(prompt("Enter Array Size : "));

var arr = [];

var sum = 0;

console.log("Enter Array Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr.push(elem);
  sum = sum + arr[i];
}

console.log(sum);
