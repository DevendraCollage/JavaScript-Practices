// Write a JavaScript program to compute the exponent of a number.

// Note: The exponent of a number says how many times the base number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

const expPower = (num, exp) => {
  // Base case
  if (exp === 1 || exp === 0) {
    return num;
  }
  // Recursive Case
  return num * expPower(num, exp - 1);
};

const prompt = require("prompt-sync")();

var num = parseInt(prompt("Enter The Number : "));

var exp = parseInt(prompt("Enter The Exponent of the given number : "));

console.log(expPower(num, exp));
