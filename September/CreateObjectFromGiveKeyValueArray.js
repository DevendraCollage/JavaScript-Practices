// Write a JavaScript program to create an object from the given key-value pairs.

const objectFromArray = (arr) => {
  return arr.reduce((a, v) => ((a[v[0]] = v[1]), a), {});
};

console.log(
  objectFromArray([
    [1, 10],
    [2, 20],
    [3, 30],
  ])
);
