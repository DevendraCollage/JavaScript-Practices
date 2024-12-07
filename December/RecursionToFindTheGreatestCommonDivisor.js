// Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion.

const gcd = (n1, n2) => {
  if (!n2) {
    return n1;
  }

  return gcd(n2, n1 % n2);
};

const prompt = require("prompt-sync")();

var n1 = parseInt(prompt("Enter The Number-1 : "));

var n2 = parseInt(prompt("Enter The Number-2 : "));

console.log(gcd(n1, n2));
