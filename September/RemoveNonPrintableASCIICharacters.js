// Write a JavaScript program to remove non-printable ASCII characters from a given string.

const prompt = require("prompt-sync")();

var str = prompt("Enter the String Here : ");

const removeNonASCII = (st) => {
  return st.replace(/[^\x20-\x7E]/g, "");
};

console.log(removeNonASCII(str));
