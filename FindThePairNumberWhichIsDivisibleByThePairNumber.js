// Write a JavaScript program to find the number of sorted pairs formed by arrays of integers. This is such that one element in the pair is divisible by the other one.

const prompt = require("prompt-sync")();

console.log("Enter Array Size : ");
var size = parseInt(prompt());

var arr = [];

console.log("Enter the Array Elements : ");
for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr.push(elem);
}

var result = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
      result++;
    }
  }
}

console.log(result);
