// Write a JavaScript program to sort the strings of a given array of strings in order of increasing length.

// Note: Do not change the order if the lengths of two string are same.

const prompt = require("prompt-sync")();

console.log("Enter Array Size : ");
var size = parseInt(prompt());

var arr = [];

console.log("Enter the Strings in the Array : ");
for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  var elem = prompt();
  arr.push(elem);
}

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i].length > arr[j].length) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log(arr);
