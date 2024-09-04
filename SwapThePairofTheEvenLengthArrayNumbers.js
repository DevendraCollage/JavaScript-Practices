// Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.

const prompt = require("prompt-sync")();

console.log("Enter the Array Size : ");
var size = parseInt(prompt());

var arr = [];

console.log("Enter Array Elements : ");
for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr.push(elem);
}

var len = arr.length;

if (len % 2 === 0) {
  for (let i = 0; i < len; i += 2) {
    var temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
} else {
  console.log("Array Length is not even!");
}

console.log(arr);
