// Write a JavaScript program to split the values of two given arrays into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.

const prompt = require("prompt-sync")();

const bifurcate = (arr, filter) =>
  arr.reduce(
    (acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc),
    [[], []]
  );

var size = parseInt(prompt("Enter the Array Size : "));

var arr1 = [];
var arr2 = [];

console.log("Enter the Array-1 Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr1.push(elem);
}

console.log("Enter the Array-2 Elements : ");
for (let i = 0; i < size; i++) {
  var elem = prompt(`[${i}] : `).toLowerCase();
  var boolValue = elem === "true";
  arr2.push(boolValue);
}

var twoArr = bifurcate(arr1, arr2);

console.log(twoArr);
