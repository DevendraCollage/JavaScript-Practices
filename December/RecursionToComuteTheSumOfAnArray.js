// Write a JavaScript program to compute the sum of an array of integers.

// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21

const getSum = (arr) => {
  // Base case
  if (arr.length === 1) {
    return arr[0];
  } else {
    // Recursive Case
    return arr.pop() + getSum(arr);
  }
};

const prompt = require("prompt-sync")();

var size = parseInt(prompt("Enter The Array Size : "));

var arr = [];

console.log("Enter The Array Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`${i} : `));
  arr.push(elem);
}
console.log("\n");

console.log(getSum(arr));
