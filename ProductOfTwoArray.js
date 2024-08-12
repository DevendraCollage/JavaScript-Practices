// Write a JavaScript program to create the dot products of two given 3D vectors.

// Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.

const prompt = require("prompt-sync")();

console.log("Enter Size of Array-1 : ");
var size1 = parseInt(prompt());

var arr1 = [];

console.log("Enter the Elements of Array-1 : ");
for (let i = 0; i < size1; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr1.push(elem);
}
console.log("\n");

console.log("Enter Size of Array-2 : ");
var size2 = parseInt(prompt());

var arr2 = [];

console.log("Enter the Elements of Array-2 : ");
for (let i = 0; i < size2; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr2.push(elem);
}

var result = 0;

if (arr1.length === arr2.length) {
  for (let i = 0; i < size2; i++) {
    result += arr1[i] * arr2[i];
  }
} else {
  console.log("Please Renter the equal array!");
}

console.log(result);
