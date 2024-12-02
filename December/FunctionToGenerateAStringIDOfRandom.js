// Write a JavaScript function that generates a string ID (specified length) of random characters.

// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01

const randomString = (n) => {
  var text = "";
  var charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < n; i++) {
    text = text + charList.charAt(Math.floor(Math.random() * charList.length));
  }
  return text;
};

const prompt = require("prompt-sync")();

var n = parseInt(prompt("Enter The Size of String : "));

console.log(randomString(n));
