// Write a JavaScript program to get the n maximum elements from the provided array. If n is greater than or equal to the provided array's length, return the original array (sorted in descending order).

const maxElem = (arr, n = 1) => {
  return [...arr].sort((a, b) => b - a).slice(0, n);
};

const prompt = require("prompt-sync")();

var size = parseInt(prompt("Enter The Array Size : "));

var arr = [];

console.log("Enter Array Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr.push(elem);
}

var ele = parseInt(prompt("Enter How Many Element You Want Find : "));

var ans = maxElem(arr, ele);

console.log(ans);
