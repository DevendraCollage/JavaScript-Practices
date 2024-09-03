// Write a JavaScript program to swap two halves of a given array of integers of even length.

const prompt = require("prompt-sync")();

console.log("Enter Array Length : ");
var size = parseInt(prompt());
console.log("\n");

var arr = [];

for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr.push(elem);
}

var len = arr.length;

if (len % 2 === 0) {
  var mid = len / 2;

  for (let i = 0; i < mid; i++) {
    let temp = arr[i];
    arr[i] = arr[mid + i];
    arr[mid + i] = temp;
  }

  console.log("Array After swapping two halves : ");
  console.log(arr);
} else {
  console.log("Array length is not even. Cannot swap elements!");
}
