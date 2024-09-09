// Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.

const prompt = require("prompt-sync")();

const powerset = (arr) =>
  arr.reduce((a, v) => a.concat(a.map((r) => [v].concat(r))), [[]]);

console.log("Enter the number here : ");
var n = parseInt(prompt());

var arr = Array.from(String(n), Number);

var combinations = powerset(arr);

console.log(combinations);
