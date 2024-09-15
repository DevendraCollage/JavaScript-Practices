// Write a JavaScript program to filter out non-unique values in an array.

const prompt = require("prompt-sync")();

var size = parseInt(prompt("Enter Array Size : "));

var arr = [];

console.log("Enter Array Elements : ");
for (let i = 0; i < size; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr.push(elem);
}

var answer = arr.filter((i) => {
  return arr.indexOf(i) === arr.lastIndexOf(i);
});

console.log(answer);
