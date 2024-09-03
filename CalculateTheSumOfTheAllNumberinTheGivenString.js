// Write a JavaScript program to compute the sum of all the digits that occur in a given string.

const prompt = require("prompt-sync")();

console.log("Enter the string here : ");
var str = prompt();

var arr = str.split("");

var numArr = Array.from(String(arr), Number);

var sum = 0;

for (let i = 0; i < numArr.length; i++) {
  if (!isNaN(numArr[i])) {
    sum = sum + numArr[i];
  }
}

console.log(sum);
