// Write a JavaScript program to remove specified elements from the left of a given array of elements.

const prompt = require("prompt-sync")();

var size = parseInt(prompt("Enter Size of Array : "));

var arr = [];

console.log("Enter Array Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr.push(elem);
}

var findElem = parseInt(prompt("Enter Elements You Want to Remove : "));

console.log(arr.slice(findElem));
