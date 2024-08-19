//  Write a JavaScript program to check if a given integer has an increasing digit sequence.

const prompt = require("prompt-sync")();

function checkIncreasing(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (numArr[i] > numArr[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log("Enter the number here : ");
var n = parseInt(prompt());

var numArr = Array.from(String(n), Number);

var check = checkIncreasing(numArr);

console.log(check);
