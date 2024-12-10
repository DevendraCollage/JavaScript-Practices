// Write a JavaScript program to check whether a number is even or not.

const isEvenOrOdd = (num) => {
  if (num === 0) {
    return true;
  } else if (num === 1 || num < 0) {
    return false;
  } else {
    return isEvenOrOdd(num - 2);
  }
};

const prompt = require("prompt-sync")();

var num = parseInt(prompt("Enter The Number Here : "));

console.log(isEvenOrOdd(num));
