// Write a JavaScript program to find out if the members of a given array of integers are a permutation of numbers from 1 to a given integer.

const prompt = require("prompt-sync")();

function checkGivenArray(arr, n) {
  for (let i = 0; i < n; i++) {
    if (arr[i + 1] < 0) {
      return false;
    }
  }

  return true;
}

console.log("Enter Size of Array : ");
var size = parseInt(prompt());

var arr = [];

console.log("Enter the Array Elements : ");
for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr.push(elem);
}

console.log("Enter the Number : ");
var n = parseInt(prompt());

var isPermutation = checkGivenArray(arr, n);

console.log(isPermutation);
