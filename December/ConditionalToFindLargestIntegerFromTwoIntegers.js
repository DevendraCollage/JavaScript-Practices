// Write a JavaScript program that displays the largest integer among two integers.

const findLargest = (n1, n2) => {
  if (n1 > n2) {
    return n1;
  } else if (n2 > n1) {
    return n2;
  } else {
    return "Both Equal!";
  }
};

const prompt = require("prompt-sync")();

var n1 = parseInt(prompt("Enter The Number-1 : "));

var n2 = parseInt(prompt("Enter The Number-2 : "));
console.log("\n");

console.log(findLargest(n1, n2));
