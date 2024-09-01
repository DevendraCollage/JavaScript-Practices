// Write a JavaScript program to compute the sum of cubes of all integers from 1 to a given integer.

const prompt = require("prompt-sync")();

console.log("Enter the number you want sum : ");
var n = parseInt(prompt());

var sum = 0;

for (let i = 1; i <= n; i++) {
  var cube = i * i * i;
  sum = sum + cube;
}

console.log(sum);
