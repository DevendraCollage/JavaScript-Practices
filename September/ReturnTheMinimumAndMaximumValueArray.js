// Write a JavaScript program to return the minimum-maximum value of an array, after applying the provided function to set a comparing rule.

const prompt = require("prompt-sync")();

const reduceWhich = (arr, comparator) => {
  return arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
};

const size = parseInt(prompt("Enter the size of the Array : "));

var arr = [];

console.log("Enter the Array Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr.push(elem);
}

var min = reduceWhich(arr, (a, b) => a - b);
var max = reduceWhich(arr, (a, b) => b - a);

console.log(`Minimum value is : ${min}`);
console.log(`Maximum value is : ${max}`);
