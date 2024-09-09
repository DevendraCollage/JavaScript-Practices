// Write a JavaScript program to extract values at specified indexes from a specified array.

const prompt = require("prompt-sync")();

var str = parseInt(prompt("Enter the String here : "));
console.log("\n");

var strArr = Array.from(String(str), Number);

var getArr = [];

var ind = parseInt(prompt("Enter the index you want to access : "));
console.log("\n");

for (let i = 0; i < strArr.length; i++) {
  if (ind == i) {
    getArr.push(strArr[i]);
    break;
  }
}

console.log(getArr);
