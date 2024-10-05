// Write a JavaScript program to compute the average of an array, after mapping each element to a value using the provided function.

const prompt = require("prompt-sync")();

var size = parseInt(prompt("Enter Array Size : "));

var arr = [];
var sum = 0;

console.log("Enter Array Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr.push(elem);
  sum += elem;
}

var avg = sum / arr.length;

console.log(`Average of the Given Array : ${avg}`);
