// Write a JavaScript program to get the first n Fibonacci numbers.

// Note: The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

const fibo = (n) => {
  if (n <= 1) {
    return [0, 1];
  } else {
    var s = fibo(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s.slice(0, n);
  }
};

const prompt = require("prompt-sync")();

var num = parseInt(prompt("Enter the number you want Fibonacci numbers : "));

console.log(fibo(num));
