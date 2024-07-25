// Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.

const prompt = require("prompt-sync")();

var arr1 = [];
var arr2 = [];

console.log("Enter the size of the Array-1 : ");
var size1 = parseInt(prompt());

// Get elements of the Array-1
for (let i = 0; i < size1; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr1.push(elem);
}
console.log("\n");

console.log("Enter the size of the Array-2 : ");
var size2 = parseInt(prompt());

// Get elements of the Array-2
for (let i = 0; i < size2; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr2.push(elem);
}
console.log("\n");

var middle1 = arr1[Math.floor(arr1.length / 2)];
var middle2 = arr2[Math.floor(arr2.length / 2)];

var arr3 = [];
arr3.push(middle1);
arr3.push(middle2);

console.log(arr3);
