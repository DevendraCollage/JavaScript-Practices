// Write a JavaScript program to find every element in any of the two given arrays at once, using the provided comparator function.

const prompt = require("prompt-sync")();

var size1 = parseInt(prompt("Enter the Array-1 Size : "));

var arr1 = [];

console.log("Enter the Array Elements : ");
for (let i = 0; i < size1; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr1.push(elem);
}

var size2 = parseInt(prompt("Enter the Array-2 Size : "));

var arr2 = [];

console.log("Enter the Array Elements : ");
for (let i = 0; i < size2; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr2.push(elem);
}

var res = [];
var nonMatching = [];

for (let i = 0; i < arr1.length; i++) {
  let found = false;
  for (let j = 0; j < arr2.length; j++) {
    if (Math.round(arr1[i]) === Math.round(arr2[j])) {
      res.push(arr1[i]);
      found = true;
      break;
    }
  }
  if (!found) {
    nonMatching.push(arr1[i]);
  }
}

for (let i = 0; i < arr2.length; i++) {
  if (!res.includes(Math.round(arr2[i]))) {
    nonMatching.push(arr2[i]);
  }
}

console.log(res.concat(nonMatching));
