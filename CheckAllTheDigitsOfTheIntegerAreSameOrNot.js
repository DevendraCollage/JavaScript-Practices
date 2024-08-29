// Write a JavaScript program to check whether all the digits in a given number are the same or not.

const prompt = require("prompt-sync")();

function isSame(n) {
  var firstDigit = n % 10;

  while (n) {
    if (n % 10 !== firstDigit) {
      return false;
    }
    n = Math.floor(n / 10);
  }

  return true;
}

console.log("Enter the number here : ");
var n = parseInt(prompt());

var isDigitSame = isSame(n);

console.log(isDigitSame);
