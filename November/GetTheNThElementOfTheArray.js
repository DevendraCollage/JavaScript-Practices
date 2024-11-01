// Write a JavaScript program to get the nth element of a given array.

const getNthElement = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (i === n) {
      return arr[i];
    }
  }
};

console.log(getNthElement([1, 2, 3, 4, 5], 3)); // Output: 4
console.log(getNthElement(["a", "b", "c", "d", "e"], 4)); // Output: e
