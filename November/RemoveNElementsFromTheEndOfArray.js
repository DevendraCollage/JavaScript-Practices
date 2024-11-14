// Write a JavaScript program to remove n elements from the end of a given array.

const takeRight = (arr, n = 1) => {
  return arr.slice(arr.length - n, arr.length);
};

console.log(takeRight([1, 2, 3, 4, 5], 3));
console.log(takeRight([1, 2, 3, 4, 5]));
