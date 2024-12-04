// Write a JavaScript function to find the first not repeated character.

// Sample arguments : 'abacddbec'
// Expected output : 'e'

const firstCharacter = (str) => {
  let res = "";
  for (let ch of str) {
    if (str.indexOf(ch) === str.lastIndexOf(ch)) {
      res = ch;
      break;
    }
  }
  return res;
};

const prompt = require("prompt-sync")();

var str = prompt("Enter The String Here : ");

console.log(firstCharacter(str));
