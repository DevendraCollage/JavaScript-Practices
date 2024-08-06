// Write a JavaScript program to find the shortest possible string. This can be converted into a string and converted into a palindrome by adding characters to the end of it.

function buildPalindrome(newStr) {
  var flag;
  for (let i = newStr.length; ; i++) {
    flag = true;
    for (let j = 0; j < i - j - 1; j++) {
      if (i - j - 1 < newStr.length && newStr[i] != newStr[i - j - 1]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      for (let j = newStr.length; j < i; j++) {
        newStr += newStr[i - j - 1];
      }
      return newStr;
    }
  }
}

const prompt = require("prompt-sync")();

console.log("Enter the string here : ");
var str = prompt();

var palindrome = buildPalindrome(str);

console.log(palindrome);
