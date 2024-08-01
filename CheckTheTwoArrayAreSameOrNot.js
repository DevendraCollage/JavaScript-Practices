// Write a JavaScript program to determine if two arrays of integers of the same length are similar. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.

const prompt = require("prompt-sync")();

console.log("Enter the size of the Array-1 : ");
var size1 = parseInt(prompt());

console.log("Enter the size of the Array-2 : ");
var size2 = parseInt(prompt());

var arr1 = [];
var arr2 = [];

console.log("\n");
console.log("Enter the Array-1 Elements : ");
for (let i = 0; i < size1; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr1.push(elem);
}
console.log("\n");

console.log("Enter the Array-2 Elements : ");
for (let i = 0; i < size2; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr2.push(elem);
}

var flag = true;
for (let i = 0; i < size1; i++) {
  if (arr1[i] !== arr2[i]) {
    flag = false;
  } else {
    flag = true;
  }
}
console.log("\n");

console.log(arr1);
console.log(arr2);
console.log(flag);
