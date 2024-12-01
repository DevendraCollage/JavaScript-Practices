// Write a function for searching JavaScript arrays with binary searches.

// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

const iterativeFunc = (arr, n) => {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == n) {
      return mid;
    } else if (arr[mid] < n) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
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

var n = parseInt(prompt(`Enter The Element You Want to Find : `));

console.log(iterativeFunc(arr, n));
