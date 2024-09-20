// Write a JavaScript program to find all elements in a given array except the first one. Return the whole array if its length is 1.

const prompt = require("prompt-sync")();

var size = parseInt(prompt("Enter Array Size : "));

var arr = [];

console.log("Enter Array Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr.push(elem);
}

var ans = [];
for (let i = 1; i < arr.length; i++) {
  ans.push(arr[i]);
}

if (arr.length === 1) {
  console.log(arr);
} else if (arr.length > 1) {
  console.log(ans);
}
