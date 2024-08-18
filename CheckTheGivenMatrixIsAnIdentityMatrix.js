// Write a JavaScript program to check whether a given matrix is an identity matrix.

// Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n × n square matrix with ones on the main diagonal and zeros elsewhere.
// [[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
// [[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false

const prompt = require("prompt-sync")();

function isIdentity(arr) {
  for (let i = 0; i < arr.length; i++) {
    rows = arr.length;
    cols = arr[i].length;
    if (rows != cols) {
      console.log("Matrix Should be Square Matrix!");
      return false;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ((arr[i][j] !== 1 && i === j) || (arr[i][j] && i !== j)) {
        return false;
      }
    }
  }
  return true;
}

console.log("Enter the size of the Matrix : ");
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

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    console.table(`[${i}][${j}] : ${arr[i][j]}\t`);
  }
}

var isTrue = isIdentity(arr);
console.log(isTrue);
