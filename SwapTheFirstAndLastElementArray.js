// Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

const prompt = require("prompt-sync")();

console.log("Enter the size of the Array : ");
var size = parseInt(prompt());

var arr = [];

for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  arr[i] = parseInt(prompt());
}

var first = arr[0];
var last = arr[arr.length - 1];

arr[arr.length - 1] = first;
arr[0] = last;

console.log(arr);
