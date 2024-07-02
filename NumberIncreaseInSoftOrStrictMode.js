// Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode. Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

const prompt = require("prompt-sync")();

console.log("Enter the number 1 here : ");
var n1 = Number.parseInt(prompt());
console.log("Enter the number 2 here : ");
var n2 = Number.parseInt(prompt());
console.log("Enter the number 3 here : ");
var n3 = Number.parseInt(prompt());

if (n2 > n1 && n3 > n2) {
  console.log("Strictly increasing");
} else if (n3 > n2) {
  console.log("Softly increasing");
}
