// Write a JavaScript program to search for a given integer in an array of sorted integers using the Binary Search Algorithm and recursion.

// Test Data:
// ([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 6) -> 4
// ([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 16) -> -1

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
};

const prompt = require("prompt-sync")();

var size = parseInt(prompt("Enter The Array Size : "));

var arr = [];

console.log("Enter Array Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`${i} : `));
  arr.push(elem);
}

var elem = parseInt(prompt("Enter The Element You Want To Find : "));
console.log("\n");

console.log(binSearch(arr, elem, 0, arr.length - 1));
