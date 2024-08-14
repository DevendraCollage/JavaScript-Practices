// Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.

const prompt = require("prompt-sync")();

console.log("Enter the number here : ");
var n = parseInt(prompt());

var prime1 = [];
var prime2 = [];

for (let i = 0; i <= n; i++) {
  prime2.push(true);
}

for (let i = 2; i <= n; i++) {
  if (prime2[i]) {
    prime1.push(i);
    for (let j = 1; j * i <= n; j++) {
      prime2[i * j] = false;
    }
  }
}

console.log(prime1);
