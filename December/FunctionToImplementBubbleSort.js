// Write a JavaScript function to apply the Bubble Sort algorithm.

// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".

// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

const bubbleSort = (arr) => {
  var swap;
  var n = arr.length - 1;
  var t = arr;

  do {
    swap = false;
    for (let i = 0; i < n; i++) {
      if (t[i] < t[i + 1]) {
        var temp = t[i];
        t[i] = t[i + 1];
        t[i + 1] = temp;
        swap = true;
      }
    }
    n--;
  } while (swap);

  return t;
};

const prompt = require("prompt-sync")();

var size = parseInt(prompt("Enter The Array Size : "));

var arr = [];

console.log("Enter The Array Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr.push(elem);
}
console.log("\n");

console.log(bubbleSort(arr));
