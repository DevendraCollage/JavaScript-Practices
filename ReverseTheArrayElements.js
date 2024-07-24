// Write a JavaScript program to reverse the elements of a given array of integers of length 3.

const prompt = require("prompt-sync")();

console.log("Enter the Array Size : ");
var size = parseInt(prompt());

var arr = [];

for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr.push(elem);
}

console.log(`Array Before the Reversed : ${arr}`);

var firstElem = arr[0];
var lastElem = arr[arr.length - 1];

arr[0] = lastElem;
arr[arr.length - 1] = firstElem;

console.log(`Array After the Reversed : ${arr}`);
