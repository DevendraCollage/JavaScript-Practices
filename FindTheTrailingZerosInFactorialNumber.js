// Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number.

const prompt = require("prompt-sync")();

console.log("Enter the number here : ");
var n = parseInt(prompt());

var fact = 1;

for (let i = 1; i <= n; i++) {
  fact = fact * i;
}

var count = 0;

if (n < 0) {
  console.log(-1);
} else {
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
    count = count + Math.floor(n / i);
  }
}

console.log(`Factorial of ${n} = ${fact}`);
console.log(`Trailing Zeros in Factorial ${n} = ${count}`);
