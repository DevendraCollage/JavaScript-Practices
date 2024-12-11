// Write a merge sort program in JavaScript.

// Sample array : [34,7,23,32,5,62]
// Sample output : [5, 7, 23, 32, 34, 62]

const mergeSort = (arr) => {
  // Base Case
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2); // Calculate mid value
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  // Recursive Case
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
};

const prompt = require("prompt-sync")();

var size = parseInt(prompt("Enter The Array Size : "));

var myArray = [];

console.log("Enter Array Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`${i} : `));
  myArray.push(elem);
}
console.log("\n");

console.log(mergeSort(myArray));
