// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

const prompt = require("prompt-sync")();

console.log("Enter the size of the Array : ");
var size = Number.parseInt(prompt());

var myArray = [];

for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  myArray.push(parseInt(prompt()));
}

console.log("\nThis is array entered by you : ");
console.log(myArray);

var sum = 0;

for (let i = 0; i < myArray.length; i++) {
  sum = sum + myArray[i];
}

console.log(`\nThe Sum of the Array Elements is : ${sum}`);
