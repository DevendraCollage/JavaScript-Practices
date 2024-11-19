// Write a JavaScript function that takes a string as a parameter and throws a custom 'Error' if the string is empty.

const isStringEmpty = (st) => {
  try {
    if (st == null || (typeof st === "string" && st.trim().length === 0)) {
      return new Error("Sorry, the given string is Empty!");
    } else {
      return st;
    }
  } catch (error) {
    return error;
  }
};

const prompt = require("prompt-sync")();

var str = prompt("Enter The String Here : ");

console.log(isStringEmpty(str));
