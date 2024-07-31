// Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.

const prompt = require("prompt-sync")();

console.log("Enter the size of the Array : ");
var size = parseInt(prompt());

var arr = [];

for (let i = 0; i < size; i++) {
  console.log(`[${i}] : `);
  arr[i] = parseInt(prompt());
}

var firstArr = [];
var secondArr = [];
var sum = [];
var arr1Sum = 0;
var arr2Sum = 0;

for (let i = 0; i < size; i++) {
  if (i % 2 == 0) {
    secondArr.push(arr[i]);
  } else {
    firstArr.push(arr[i]);
  }
}

for (let i = 0; i < firstArr.length; i++) {
  arr1Sum = arr1Sum + firstArr[i];
}

for (let i = 0; i < secondArr.length; i++) {
  arr2Sum = arr2Sum + secondArr[i];
}

sum.push(arr1Sum);
sum.push(arr2Sum);

console.log(sum);
