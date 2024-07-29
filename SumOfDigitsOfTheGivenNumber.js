// Write a JavaScript program to add two digits to a given positive integer of length two.

const prompt = require("prompt-sync")();

console.log("Enter the number here : ");
var num = parseInt(prompt());

var numStr = num.toString().split("");

var arrNum = numStr.map(Number);

var sum = 0;

for (let i = 0; i < arrNum.length; i++) {
  sum = sum + arrNum[i];
}

console.log(sum);
