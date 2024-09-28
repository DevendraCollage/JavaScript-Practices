// Write a JavaScript program to remove false values from a given array.

const removeFalsy = (arr) => {
  return arr.filter(Boolean);
};

console.log(removeFalsy([0, 1, false, 2, "", 3]));
