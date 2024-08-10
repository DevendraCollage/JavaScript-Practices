// Write a JavaScript program to find two elements of an array such that their absolute difference is not larger than a given integer. However, it is as close as possible to the integer.

const prompt = require("prompt-sync")();

console.log("Enter size of Array : ");
var size = parseInt(prompt());

var arr = [];

console.log("Enter Array Elements : ");
for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr.push(elem);
}

console.log("Enter the number here : ");
var num = parseInt(prompt());

var diff = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    var m = Math.abs(arr[i] - arr[j]);
    if (m <= num) {
      diff = Math.max(m, diff);
    }
  }
}

console.log(diff);
