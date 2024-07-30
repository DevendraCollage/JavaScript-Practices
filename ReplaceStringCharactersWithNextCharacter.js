// Write a JavaScript program to replace each character in a given string with the next in the English alphabet.
// Note: ‘a’ will be replace by ‘b’ or ‘z’ would be replaced by ‘a’.

function shiftStr(str) {
  return str
    .split("")
    .map((char) => {
      // This is the regex syntax to match with given string
      if (char.match(/[a-zA-Z]/)) {
        const charCode = char.charCodeAt(0);
        const isUpper = charCode >= 65 && charCode <= 90;
        const baseCharCode = isUpper ? 65 : 97;
        const shiftedCharCode =
          ((charCode - baseCharCode + 1) % 26) + baseCharCode;
        return String.fromCharCode(shiftedCharCode);
      } else {
        return char;
      }
    })
    .join("");
}

const prompt = require("prompt-sync")();

console.log("Enter the string here : ");
var str = prompt();

console.log(shiftStr(str));
