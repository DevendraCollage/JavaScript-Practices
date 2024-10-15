// Write a JavaScript program to execute a provided function once for each array element, starting with the array's last element.

const forEachRight = (arr, callback) => {
  arr.slice(0).reverse().forEach(callback);
};

const prompt = require("prompt-sync")();

var size = parseInt(prompt("Enter Array Size : "));

var arr = [];

console.log("Enter Array Elements: ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr.push(elem);
}

console.log(forEachRight(arr, (val) => console.log(val)));
