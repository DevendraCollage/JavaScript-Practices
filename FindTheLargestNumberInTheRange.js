// Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.

const prompt = require("prompt-sync")();

// Read the two number from the user
console.log("Enter the number 1 : ");
var n1 = Number.parseInt(prompt());
console.log("Enter the number 2 : ");
var n2 = Number.parseInt(prompt());

if ((n1 >= 40 && n1 <= 60) || (n2 >= 40 && n2 <= 60)) {
  if (n1 > n2) {
    console.log(`The ${n1} is Greatest Number From Their!`);
  } else {
    console.log(`The ${n2} is Greatest Number From Their!`);
  }
} else {
  console.log("Enter the number in the range of between 40 to 60!");
}
