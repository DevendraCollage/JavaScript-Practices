// Write a JavaScript program to reverse the order of bits in a integer.

// Examples:
// 14 -> 00001110 -> 01110000 -> 112
// 56 -> 00111000 -> 00011100 -> 28
// 234 -> 11101010 -> 01010111 -> 87

const prompt = require("prompt-sync")();

function mirrorBits(n) {
  let t = n.toString(2).split("");
  let len = t.length;
  for (let i = 0; i < 8 - len; i++) {
    t.unshift("0");
  }

  return parseInt(t.reverse().join(""), 2);
}

console.log("Enter the number Here : ");
var num = parseInt(prompt());

var convertedNumber = mirrorBits(num);

console.log(convertedNumber);
