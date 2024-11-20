// Write a JavaScript program that uses a try-catch block to catch and handle a 'RangeError' when accessing an array with an invalid index.

const isValidIndex = (arr, ind) => {
  try {
    for (let i = 0; i < arr.length; i++) {
      if (arr[ind] >= 0 && arr[ind] < arr.length) {
        return `Accessed Element : ${arr[ind]}`;
      } else {
        return new Error(
          "Invalid index. Please provide a valid index within the array bounds."
        );
      }
    }
  } catch (error) {
    return error;
  }
};

const prompt = require("prompt-sync")();

var size = parseInt(prompt("Enter The Size of Array : "));

var arr = [];

console.log("Enter The Array Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr.push(elem);
}
console.log("\n");

var index = parseInt(prompt("Enter The Index You Want To Access Element : "));

console.log(isValidIndex(arr, index));
