// Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.

const isArrayEmpty = (arr) => {
  try {
    if (arr.length === 0) {
      return new Error("Error : Array is Empty!");
    } else {
      return "Array have an Elements.";
    }
  } catch (error) {
    return error;
  }
};

const prompt = require("prompt-sync")();

var size = parseInt(prompt("Enter The Array Size : "));

var arr = [];

console.log("Enter The Array Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr.push(elem);
}

console.log("\n");
console.log(isArrayEmpty(arr));
