// Write a JavaScript program to add two positive integers without carrying.

const prompt = require("prompt-sync")();

console.log("Enter the number-1 here : ");
var n1 = parseInt(prompt());

console.log("Enter the number-2 here : ");
var n2 = parseInt(prompt());

var n1Str = n1.toString().split("");
var n2Str = n2.toString().split("");

var n1Arr = n1Str.map(Number);
var n2Arr = n2Str.map(Number);

while (n1Str.length < n2Str.length) n1Str.unshift("0");
while (n2Str.length < n1Str.length) n2Str.unshift("0");

var sum = [];

for (let i = 0; i < n1Arr.length; i++) {
  sum.push((n1Arr[i] + n2Arr[i]) % 10);
}

var another = parseInt(sum.join(""), 10);
console.log(another);
