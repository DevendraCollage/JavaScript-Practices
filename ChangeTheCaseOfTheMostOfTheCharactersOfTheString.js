// Write a JavaScript program to change the case of the minimum number of letters to make a given string written in upper case or lower case.

// Fox example "Write" will be WRITE and "PHp" will be "php"

function changeCase(newStr) {
  var x = 0;
  var y = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (/[A-Z]/.test(newStr[i])) {
      x++;
    } else {
      y++;
    }
  }

  if (y > x) {
    return newStr.toUpperCase();
  } else {
    return newStr.toLowerCase();
  }
}

const prompt = require("prompt-sync")();

console.log("Enter the string here : ");
var str = prompt();

var c = changeCase(str);
console.log(c);
