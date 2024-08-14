// Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.

// Sample sequence = [1,2,3,4,5,6,7,8]
// Given number: 5
// Output: 2

const prompt = require("prompt-sync")();

console.log("Enter Length of Array : ");
var size = parseInt(prompt());

var arr = [];

console.log("Enter the Array Elements : ");
for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr.push(elem);
}

console.log("Enter the number here : ");
var n = parseInt(prompt());

var count = 0;
for (let i = n; i <= arr.length; i++) {
  if (arr[i] % 2 == 0) {
    count++;
  }
}

console.log(count);
