// Write a JavaScript program to find the number of inversions of a given array of integers.

// Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.

const prompt = require("prompt-sync")();

console.log("Enter the size of Array : ");
var size = parseInt(prompt());

var arr = [];

console.log("Enter Array Elements : ");
for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr.push(elem);
}

var counter = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      counter++;
    }
  }
}

console.log(counter);
