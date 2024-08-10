// Write a JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number.

const prompt = require("prompt-sync")();

function digitDelete(num) {
  var result = 0;
  arr = [];

  while (num) {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }

  for (var index = 0; index < arr.length; index++) {
    var n = 0;
    for (var i = arr.length - 1; i >= 0; i--) {
      if (i !== index) {
        n = n * 10 + arr[i];
      }
    }
    result = Math.max(n, result);
  }

  return result;
}

console.log("Enter the number here : ");
var n = parseInt(prompt());

var digit = digitDelete(n);

console.log(digit);
