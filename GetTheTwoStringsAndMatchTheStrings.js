// Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.

const prompt = require("prompt-sync")();

console.log("Enter The String-1 Here : ");
var str1 = prompt();
console.log("Enter The String-2 Here : ");
var str2 = prompt();

var len1 = str1.length;
var len2 = str2.length;

if (len1 !== len2) {
  const min = Math.min(len1, len2);

  var anotherStr = str1.substring(len1 - min) + str2.substring(len2 - min);

  console.log(anotherStr);
} else {
  console.log(str1.concat(" ", str2));
}
