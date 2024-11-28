// Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.

const findSecondGreatest = (arr) => {
  var firstMax = -Infinity;
  var secondMax = -Infinity;
  for (let elem of arr) {
    if (elem > firstMax) {
      secondMax = firstMax;
      firstMax = elem;
    } else if (elem > secondMax && elem != firstMax) {
      secondMax = elem;
    }
  }
  if (secondMax === -Infinity) {
    return "No Such Second Greatest Elements";
  }

  return secondMax;
};

const findSecondLowest = (arr) => {
  arr.sort((a, b) => a - b);
  return arr[1];
};

const prompt = require("prompt-sync")();

var n = parseInt(prompt("Enter The Array Size : "));

var arr = [];

console.log("Enter The Array Elements : ");
for (let i = 0; i < n; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  arr.push(elem);
}

console.log(`Second Greatest Element : ${findSecondGreatest(arr)}`);
console.log(`Second Smallest Element : ${findSecondLowest(arr)}`);
