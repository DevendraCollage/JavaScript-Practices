// Write a JavaScript function that returns array elements larger than a number.

const findBiggerElem = (arr, n) => {
  var ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= n) {
      ans.push(arr[i]);
    }
  }
  return ans;
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

var n = parseInt(prompt("Enter The Element You Want TO Find : "));

console.log(findBiggerElem(arr, n));
