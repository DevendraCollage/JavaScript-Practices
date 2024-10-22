// Write a JavaScript program to get the median of an array of numbers.

// Note: Find the middle of the array, use Array.sort() to sort the values. Return the number at the midpoint if length is odd, otherwise the average of the two middle numbers.

const midElem = (arr) => {
  const mid = Math.floor(arr.length / 2),
    num = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? num[mid] : (num[mid - 1] + num[mid]) / 2;
};

const prompt = require("prompt-sync")();

var size = parseInt(prompt("Enter Array Size : "));

var arr = [];

console.log("Enter Array Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr.push(elem);
}

var mid = midElem(arr);

console.log(mid);
