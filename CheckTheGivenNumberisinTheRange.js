// Write a JavaScript program to check whether a given number is in a given range.

const prompt = require("prompt-sync")();

console.log("Enter the number here : ");
var n = parseInt(prompt());

var numArr = Array.from(String(n), Number);

var first = numArr[0];
var second = numArr[1];
var third = numArr[2];

if (second >= first && second <= third) {
  console.log(true);
} else {
  console.log(false);
}
