// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

// Sample arguments: 'w3resource.com', 'o'
// Expected output: 2

const countLetter = (str, ch) => {
  var strArr = str.split("");
  var n = strArr.length;
  var count = 0;
  for (let i = 0; i < n; i++) {
    if (strArr[i] === ch) {
      count++;
    }
  }
  return count;
};

const prompt = require("prompt-sync")();

var str = prompt("Enter The String Here : ");

console.log("\n");

var letter = prompt("Enter The Character You Want to Count : ");

console.log("\n");

console.log(countLetter(str, letter));
