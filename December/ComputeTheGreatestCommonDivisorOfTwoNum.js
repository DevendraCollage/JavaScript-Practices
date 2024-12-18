// Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

const GCD = (n1, n2) => {
  var result = Math.min(n1, n2);
  while (result > 0) {
    if (n1 % result == 0 && n2 % result == 0) {
      break;
    }
    result--;
  }
  return result;
};

const prompt = require("prompt-sync")();

var n1 = parseInt(prompt("Enter The Number-1 : "));
var n2 = parseInt(prompt("Enter The Number-2 : "));

console.log(GCD(n1, n2));
