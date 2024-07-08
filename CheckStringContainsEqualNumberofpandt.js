// Write a JavaScript program to check whether a given string contains an equal number of p's and t's.

const prompt = require("prompt-sync")();

console.log("Enter the string here : ");
var str = prompt();

var arrStr = str.split("");

var PCount = 0;
var TCount = 0;

for (let i = 0; i < arrStr.length; i++) {
  if (arrStr[i] == "p" || arrStr[i] == "P") {
    PCount++;
  } else if (arrStr[i] == "t" || arrStr[i] == "T") {
    TCount++;
  }
}

if (PCount > 1 == TCount > 1) {
  console.log(true);
} else {
  console.log(false);
}
