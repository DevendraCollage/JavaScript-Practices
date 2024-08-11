// Write a JavaScript program to find the number of times to replace a given number with the sum of its digits. This is until it converts to a single-digit number.

const prompt = require("prompt-sync")();

console.log("Enter the number here : ");
var num = parseInt(prompt());

var count = 1;
var sum = 0;

var arr = num.toString().split("").map(Number);

for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}

if (sum >= 10) {
  count += 1;
}

console.log(count);
