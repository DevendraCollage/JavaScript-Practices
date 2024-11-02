// Write a JavaScript program to get every element in any of the two arrays at once.

// Note: Create a Set with all values of a and b and convert to an array.

const uniqueElem = (arr1, arr2) => {
  return Array.from(new Set([...arr1, ...arr2]));
};

console.log(uniqueElem([1, 2, 3], [2, 3, 4]));
