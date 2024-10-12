// Write a JavaScript program to count a value in an array.

const prompt = require("prompt-sync")();

var size = parseInt(prompt("Enter The Array Size : "));

var arr = [];

console.log("Enter the Array Elements: ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr.push(elem);
}

var specElem = parseInt(prompt("Enter Element You Want to find : "));

// Using Linear Searching int (O(n)) time.
var count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === specElem) {
    count++;
  }
}

console.log(count);
