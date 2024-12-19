// Write a JavaScript program to sum 3 and 5 multiples under 1000.

const sumOfMultiple = (start, end) => {
  var sum = 0;
  for (let i = start; i < end; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

const prompt = require("prompt-sync")();

var start = parseInt(prompt("Enter Start : "));
var end = parseInt(prompt("Enter End : "));

console.log(sumOfMultiple(start, end));
