// Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.

// Sample array : [1, 2, 3] and subset length is 2

// Expected output : [[1,2],[1,3],[2,3]]

const subsetArray = (arr, n) => {
  const result = [];

  function generateSubsets(currSubSet, start) {
    if (currSubSet.length === n) {
      result.push([...currSubSet]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      currSubSet.push(arr[i]);
      generateSubsets(currSubSet, i + 1);
      currSubSet.pop();
    }
  }

  generateSubsets([], 0);
  return result;
};

const prompt = require("prompt-sync")();

var size = parseInt(prompt("Enter Array Size : "));

var arr = [];

console.log("Enter Array Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`${i} : `));
  arr.push(elem);
}
console.log("\n");

var n = parseInt(prompt(`Enter The Subset Length : `));

console.log(subsetArray(arr, n));
