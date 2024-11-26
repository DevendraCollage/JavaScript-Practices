// Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion.

// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

const isPrime = (n, div = 2) => {
  // Base Case
  if (n <= div) {
    return false;
  }
  if (n % 2 === 0) {
    return false;
  }
  return true;

  // Recursive call
  return isPrime(n);
};

const prompt = require("prompt-sync")();

var num = parseInt(prompt("Enter The Number Here : "));

console.log(isPrime(num));
