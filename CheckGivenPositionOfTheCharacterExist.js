// Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.

const prompt = require("prompt-sync")();

console.log("Enter the string here : ");
var str = prompt();
console.log("Enter the specified character positions to find : ");
var characterPos = prompt();

var count = 0;

for (let i = 0; i < str.length; i++) {
  if (str.charAt(i) == characterPos && i >= 1 && i <= 3) {
    count = 1;
  }
}

if (count == 1) {
  console.log(true);
} else {
  console.log(false);
}
