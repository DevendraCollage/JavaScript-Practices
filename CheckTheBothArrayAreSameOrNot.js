// Write a JavaScript program to find the number of elements in both arrays.

const prompt = require("prompt-sync")();

function isArrayEqual(arr1, arr2) {
  var count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      count++;
    }
  }

  return count;
}

console.log("Enter Array-1 Size : ");
var size1 = parseInt(prompt());

var arr1 = [];

console.log("Enter Array-1 Elements : ");
for (let i = 0; i < size1; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr1.push(elem);
}
console.log("\n");

console.log("Enter Array-2 Size : ");
var size2 = parseInt(prompt());

var arr2 = [];

console.log("Enter Array-2 Elements : ");
for (let i = 0; i < size2; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr2.push(elem);
}
console.log("\n");

if (arr1.length === arr2.length) {
  var equal = isArrayEqual(arr1, arr2);
  console.log(equal);
} else {
  console.log("Array Size cannot be same!");
  console.log("We cannot match the elements!");
}
