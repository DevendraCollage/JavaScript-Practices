// Write a JavaScript program to create an array out of the arrays by creating each possible pair from the arrays.

const prompt = require("prompt-sync")();

var size1 = parseInt(prompt("Enter Array-1 Size : "));

var arr1 = [];

console.log("Enter Array-1 Elements : ");
for (let i = 0; i < size1; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr1.push(elem);
}

var size2 = parseInt(prompt("Enter Array-2 Size : "));

var arr2 = [];

console.log("Enter Array-2 Elements : ");
for (let i = 0; i < size2; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr2.push(elem);
}

// This function will return the combination of the two array
const arrProd = (a, b) => {
  return a.reduce((acc, x) => acc.concat(b.map((y) => [x, y])), []);
};

console.log(arrProd(arr1, arr2));
