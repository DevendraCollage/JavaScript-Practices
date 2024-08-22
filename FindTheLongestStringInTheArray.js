// Write a JavaScript program to find the longest string in a given array.

const prompt = require("prompt-sync")();

console.log("Enter Array Size : ");
var size = parseInt(prompt());

var arr = [];

console.log("Enter Elements : ");
for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  var elem = prompt();
  arr.push(elem);
}

var maxStr = arr[0].length;
var demo = arr[0];

for (let i = 0; i < size; i++) {
  var str = arr[i].length;

  if (str > maxStr) {
    demo = arr[i];
    maxStr = demo;
  }
}

console.log(demo);
