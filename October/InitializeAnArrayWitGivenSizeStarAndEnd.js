// Write a JavaScript program to initialize an array containing numbers in the specified range. Start and end are inclusive of their common point of difference.

const prompt = require("prompt-sync")();

var start = parseInt(prompt("Enter the Start Range of the Array : "));
var end = parseInt(prompt("Enter the End Range of the Array : "));
var step = parseInt(prompt("Enter the Step Parameter : "));

var arr = [];

if (step != 0) {
  for (let i = start; i <= end; i++) {
    if (i % step == 0) {
      arr.push(i);
    }
  }
} else {
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
}

console.log(arr);
