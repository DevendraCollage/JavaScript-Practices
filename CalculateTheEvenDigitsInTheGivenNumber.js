// Write a JavaScript program to find the number of even digits in a given integer.

const prompt = require("prompt-sync")();

console.log("Enter number here : ");
var n = parseInt(prompt());

var arr = Array.from(String(n), Number);

var count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    count++;
  }
}

console.log(count);
