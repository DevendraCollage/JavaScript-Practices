// Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.

// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

const fiveLargest = (n1, n2, n3, n4, n5) => {
  if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
    return n1;
  } else if (n2 > n3 && n2 > n4 && n2 > n5) {
    return n2;
  } else if (n3 > n4 && n3 > n5) {
    return n3;
  } else if (n4 > n5) {
    return n4;
  } else {
    return n5;
  }
};

const prompt = require("prompt-sync")();

var n1 = parseInt(prompt("Number-1 : "));
var n2 = parseInt(prompt("Number-2 : "));
var n3 = parseInt(prompt("Number-3 : "));
var n4 = parseInt(prompt("Number-4 : "));
var n5 = parseInt(prompt("Number-5 : "));

console.log("\n");
console.log(fiveLargest(n1, n2, n3, n4, n5));
