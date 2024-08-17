// Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3.

// For a string "2*0", the output should be : ["210", "240", "270"]

const prompt = require("prompt-sync")();

function isDivisibleBy3(str) {
  var digitSum = 0,
    left = "0".charCodeAt(),
    right = "9".charCodeAt(),
    result = [],
    data = str.split(""),
    pos = -1;

  for (let i = 0; i < str.length; i++) {
    if (left <= data[i].charCodeAt() && data[i].charCodeAt() <= right) {
      digitSum = digitSum + data[i].charCodeAt() - left;
    } else {
      pos = i;
    }
  }

  for (let i = 0; i < 10; i++) {
    if ((digitSum + i) % 3 === 0) {
      data[pos] = String.fromCharCode(left + i);
      result.push(data.join(""));
    }
  }

  return result;
}

console.log("Enter the String : ");
var str = prompt();

var checkString = isDivisibleBy3(str);

console.log(checkString);
