// Write a JavaScript program to find the number appearing most frequently in a given array of integers.

const prompt = require("prompt-sync")();

console.log("Enter the size of the Array : ");
var size = parseInt(prompt());

var arr = [];

console.log("Enter the Array Elements : ");
for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr.push(elem);
}

let frequency = {};
let maxCount = 0;
let mostRepeated = null;

for (let i = 0; i < arr.length; i++) {
  let elem = arr[i];
  if (frequency[elem] == null) {
    frequency[elem] = 1;
  } else {
    frequency[elem]++;
  }

  if (frequency[elem] > maxCount) {
    maxCount = frequency[elem];
    mostRepeated = elem;
  }
}

console.log(arr);
console.log(mostRepeated);
