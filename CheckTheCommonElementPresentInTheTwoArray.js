// Write a JavaScript program to check if there is at least one element in two given sorted arrays of integers.

const prompt = require("prompt-sync")();

function checkCommonElem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) != -1) {
      return true;
    }
    return false;
  }
}

console.log("Enter the size of the Array-1 : ");
var size1 = parseInt(prompt());

var arr1 = [];

console.log("Enter Array Elements : ");
for (let i = 0; i < size1; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr1.push(elem);
}
console.log("\n");

console.log("Enter the size of the Array-2 : ");
var size2 = parseInt(prompt());

var arr2 = [];

console.log("Enter Array Elements : ");
for (let i = 0; i < size2; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr2.push(elem);
}
var res = checkCommonElem(arr1, arr2);

console.log(res);
