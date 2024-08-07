// Write a JavaScript program to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string.

const prompt = require("prompt-sync")();

function rearrangementChar(str1, str2) {
  var first = str1.split("");
  var second = str2.split("");
  var result = true;
  first.sort();
  second.sort();

  for (let i = 0; i < Math.max(first.length, second.length); i++) {
    if (first[i] !== second[i]) {
      result = false;
    }
  }

  return result;
}

console.log("Enter the String-1 here : ");
var str1 = prompt();
console.log("Enter the String-2 here : ");
var str2 = prompt();

var res = rearrangementChar(str1, str2);

console.log(res);
