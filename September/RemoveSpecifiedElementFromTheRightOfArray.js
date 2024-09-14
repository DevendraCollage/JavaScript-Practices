// Write a JavaScript program to remove specified elements from the right of a given array of elements.

const prompt = require("prompt-sync")();

function arrSliced(arr, n = -1) {
  return arr.slice(n);
}

var size = parseInt(prompt("Enter Array Size : "));

var arr = [];

console.log("Enter Array Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr.push(elem);
}
console.log("\n");

var slicedElem = parseInt(prompt("Enter Specified Element : "));

var n = arrSliced(arr, slicedElem);

console.log(n);
