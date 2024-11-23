// Write a JavaScript function that reverses a number.
// Sample Data and output:
// Example x = 32243;
// Expected Output: 34223

const reverseNumber = (n) => {
  return n.toString().split("").reverse().join("");
};

const prompt = require("prompt-sync")();

var n = parseInt(prompt("Enter The Number Here : "));

console.log(reverseNumber(n));
