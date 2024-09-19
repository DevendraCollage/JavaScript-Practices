// Write a JavaScript program to convert a value to a safe integer.

const prompt = require("prompt-sync")();

var val = prompt("Enter the number here : ");

var intNum = Math.round(
  Math.max(Math.min(val, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER)
);

console.log(intNum);
