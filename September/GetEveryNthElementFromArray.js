// Write a JavaScript program to get every nth element in a given array.

const prompt = require("prompt-sync")();

var size = parseInt(prompt("Enter Array Size : "));

var arr = [];

console.log("Enter Array Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr.push(elem);
}

var answer = [];

var n = parseInt(prompt("Enter Nth Element : "));

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % n == 0) {
    answer.push(arr[i]);
  }
}

console.log(answer);
