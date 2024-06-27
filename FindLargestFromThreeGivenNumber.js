// Write a JavaScript program to find the largest of three given integers.

const prompt = require("prompt-sync")();

// Read the three number
console.log("Enter the number 1 here : ");
var n1 = Number.parseInt(prompt());
console.log("Enter the number 2 here : ");
var n2 = Number.parseInt(prompt());
console.log("Enter the number 3 here : ");
var n3 = Number.parseInt(prompt());

if (n1 > n2 && n1 > n3) {
  console.log(`The ${n1} is Greatest Number from Given!`);
} else if (n2 > n3) {
  console.log(`The ${n2} is Greatest Number from Given!`);
} else {
  console.log(`The ${n3} is Greatest Number from Given!`);
}
