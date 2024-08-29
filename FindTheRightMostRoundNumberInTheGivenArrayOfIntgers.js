// Write a JavaScript program to find the position of the rightmost round number in an array of integers. If there are no round numbers, the function returns 0.

// Note: A round number is informally considered to be an integer that ends with one or more zeros.

const prompt = require("prompt-sync")();

function findPosition(arr) {
  var pos = -1;

  for (let i = 0; i < arr.length; i++) {
    if (Math.round(arr[i]) === arr[i]) {
      pos = i;
    }
  }

  return pos;
}

console.log("Enter Array Size : ");
var size = parseInt(prompt());

var arr = [];

console.log("Enter Array Elements : ");
for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr.push(elem);
}

var pos = findPosition(arr);

console.log(pos);
