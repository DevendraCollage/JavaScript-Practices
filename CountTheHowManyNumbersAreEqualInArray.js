// Write a JavaScript program to check a number from three given numbers where two numbers are equal. Find the third one.

const prompt = require("prompt-sync")();

console.log("Enter Size of Array : ");
var size = parseInt(prompt());

var arr = [];

console.log("Enter the Array Elements : ");
for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr.push(elem);
}

var count = 0;

for (let i = 0; i < size; i++) {
  for (let j = i + 1; j < size; j++) {
    if (arr[i] == arr[j]) {
      count++;
    }
  }
}

console.log(count);
