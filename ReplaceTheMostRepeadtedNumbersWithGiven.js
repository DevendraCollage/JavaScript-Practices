// Write a JavaScript program to replace all numbers with a specified number in an array of integers.

function MostRepeat(arr, oldValue, newValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === oldValue) {
      arr[i] = newElem;
    }
  }

  return arr;
}

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
console.log(arr);
console.log("\n");

console.log("Enter the Most-Repeated Elements : ");
var mostRepeated = parseInt(prompt());

console.log("Enter the new Element : ");
var newElem = parseInt(prompt());

newArr = MostRepeat(arr, mostRepeated, newElem);
console.log(newArr);
