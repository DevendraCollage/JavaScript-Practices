// Write a JavaScript function to compute the factors of a positive integer.

const computerFactors = (n) => {
  var arr = [];

  // Base Case
  if (n < 0) {
    return "Given number is negative, please enter positive number!";
  }

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }

  return arr;
};

const prompt = require("prompt-sync")();

var n = parseInt(prompt("Enter The Number Here : "));

console.log(computerFactors(n));
