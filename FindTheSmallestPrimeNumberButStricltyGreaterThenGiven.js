// Write a JavaScript program to find the smallest prime number strictly greater than a given number.

const prompt = require("prompt-sync")();

console.log("Enter the number : ");
var n = parseInt(prompt());

for (let i = n + 1; ; i++) {
  var isPrime = true;
  for (let j = 2; j * j <= i; j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
    break;
  }
}
