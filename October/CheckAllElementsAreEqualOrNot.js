// Write a JavaScript program to check whether all elements in a given array are equal or not.

const prompt = require("prompt-sync")();

//! Type-2 to check all array elements are equal or not.
const arrEqual = (arr) => {
  return arr.every((currElem) => currElem === arr[0]);
};

var size = parseInt(prompt("Enter Array Size : "));

var arr = [];

console.log("Enter Array Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr.push(elem);
}

//! Type-1 to check all the array elements are equal or not.
var flag = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[i + 1]) {
    flag = true;
  }
}

console.log(flag);
