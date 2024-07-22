// Write a JavaScript program to rotate the elements left in a given array of integers of length 3.

const prompt = require("prompt-sync")();

console.log("Enter the size of the Array : ");
var size = Number.parseInt(prompt());

var arr = [];

for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  arr.push(parseInt(prompt()));
}

var firstElem = arr[0];

arr.shift();

arr.push(firstElem);

console.log(arr);
