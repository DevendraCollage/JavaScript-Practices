// Write a JavaScript program to find the longest string from a given array of strings.

const prompt = require("prompt-sync")();

console.log("Enter the size of the Array : ");
var size = parseInt(prompt());

var arr = [];

console.log("\n");
for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  arr[i] = prompt();
}

var max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(`The Largest String From The Given Array is : ${max}`);
