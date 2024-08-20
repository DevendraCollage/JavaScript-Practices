// Write a JavaScript program to check whether a given array of integers represents a strictly increasing or decreasing sequence.

const prompt = require("prompt-sync")();

function checkTheArrayIsIncreasing(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      return true;
    }
  }

  return false;
}

console.log("Enter the size of Array : ");
var size = parseInt(prompt());

var arr = [];

console.log("Enter the Array Elements : ");
for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr.push(elem);
}

var flag = checkTheArrayIsIncreasing(arr);

console.log(flag);
