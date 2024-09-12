// Write a JavaScript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

const prompt = require("prompt-sync")();

const all = (arr, fn = Boolean) => {
  return arr.every(fn);
};

var size = parseInt(prompt("Enter the Size of the Array : "));

var arr = [];

console.log("Enter the Array Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr.push(elem);
}

var newArr = all(arr, (a) => a > 1);

console.log(newArr);
