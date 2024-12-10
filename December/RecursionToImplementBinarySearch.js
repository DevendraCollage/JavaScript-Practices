// Write a JavaScript program for binary search.

// Sample array : [0,1,2,3,4,5,6]
// console.log(l.br_search(5)) will return '5'

const binSearch = (arr, target, left, right) => {
  if (left > right) {
    return -1;
  }

  var mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binSearch(arr, target, left, mid - 1);
  } else {
    return binSearch(arr, target, mid + 1, right);
  }

  return -1;
};

const prompt = require("prompt-sync")();

var n = parseInt(prompt("Enter The Array Size : "));

var arr = [];

console.log("Enter The Array Elements : ");
for (let i = 0; i < n; i++) {
  var elem = parseInt(prompt(`${i} : `));
  arr.push(elem);
}
console.log("\n");

var elem = parseInt(prompt("Enter The Element You Want To Find : "));
console.log("\n");

console.log(binSearch(arr, elem, 0, arr.length - 1));
