// Write a JavaScript program to find all distinct prime factors of a given integer.

const prompt = require("prompt-sync")();

function primeFactors(num) {
  function is_prime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  var result = [];
  for (var i = 2; i <= num; i++) {
    while (is_prime(i) && num % i === 0) {
      if (result.indexOf(i) == -1) result.push(i);
      num /= i;
    }
  }
  return result;
}

console.log("Enter Number : ");
var n = parseInt(prompt());

console.log(primeFactors(n));
