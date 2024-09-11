// Write a JavaScript program to convert a given string's length to bytes.

const prompt = require("prompt-sync")();

var str = prompt("Enter the String Here : ");

var arr = str.split("");

var count = 0;

for (let i = 0; i < arr.length; i++) {
  count = count + 1;
}

console.log(count);
