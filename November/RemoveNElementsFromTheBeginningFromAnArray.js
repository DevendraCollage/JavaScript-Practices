// Write a JavaScript program to get an array with n elements removed from the beginning from a given array.

const takeLeft = (arr, n = 1) => {
  return arr.slice(0, n);
};

console.log(takeLeft([1, 2, 3, 4, 5]));
console.log(takeLeft([1, 2, 3, 4, 5], 3));
