// Write a JavaScript program to find the kth greatest element in a given array of integers.

function kthGreatestElement(arr, k) {
  for (let i = 0; i < k; i++) {
    var max_index = i,
      tmp = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[max_index]) {
        max_index = i;
      }
    }
    arr[i] = arr[max_index];
    arr[max_index] = tmp;
  }

  return arr[k - 1];
}

const prompt = require("prompt-sync")();

console.log("Enter the size of the Array : ");
var size = parseInt(prompt());

var arr = [];

console.log("Enter the Array Elements : ");
for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  var elem = parseInt(prompt());
  arr.push(elem);
}

console.log("Enter the the find the greatest elements : ");
var greatest = parseInt(prompt());

console.log(kthGreatestElement(arr, greatest));
