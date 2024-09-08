// Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.

const prompt = require("prompt-sync")();

var size = parseInt(prompt("Enter the size of Array : "));

let arr = [];

console.log("Enter Array Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr.push(elem);
}

let elemFind = parseInt(prompt("Enter the elements you want to find : "));

arr = arr.filter((item) => {
  return item !== elemFind;
});

console.log(arr);
