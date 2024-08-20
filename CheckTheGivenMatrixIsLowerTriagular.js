//  Write a JavaScript program to check whether a given matrix is lower triangular or not.

// Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero.

const prompt = require("prompt-sync")();

function checkTheLowerMatrix(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (j > i && arr[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}

console.log("Enter the Array Size : ");
var size = parseInt(prompt());

var arr = [];

for (let i = 0; i < size; i++) {
  arr[i] = [];
  for (let j = 0; j < size; j++) {
    console.log(`[${i}][${j}] : `);
    var elem = parseInt(prompt());
    arr[i][j] = elem;
  }
}

var check = checkTheLowerMatrix(arr);

console.log(check);
