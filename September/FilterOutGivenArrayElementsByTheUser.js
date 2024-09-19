// Write a JavaScript program to filter out the element(s) of a given array that have one of the specified values.

const prompt = require("prompt-sync")();

var size = parseInt(prompt("Enter The Array Size : "));

var arr = [];

console.log("Enter Array Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr.push(elem);
}

var ele1 = parseInt(prompt("Enter The Number-1 : "));

var ans = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== ele1) {
    ans.push(arr[i]);
  }
}

console.log(ans);
