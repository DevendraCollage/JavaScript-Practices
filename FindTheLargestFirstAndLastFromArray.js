// Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.

const prompt = require("prompt-sync")();

console.log("Enter the size of Array : ");
var size = parseInt(prompt());

var arr = [];

for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr.push(elem);
}

var first = arr[0];
var last = arr[arr.length - 1];

var max;

if (first > last) {
  max = first;
} else {
  max = last;
}

for (let i = 0; i < arr.length; i++) {
  arr[i] = max;
}

console.log(arr);
