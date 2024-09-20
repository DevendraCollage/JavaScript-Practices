// Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function. (Version-2)

const sumBy = (arr, fn) =>
  arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc, val) => acc + val, 0);

console.log(sumBy([{ n: 1 }, { n: 2 }, { n: 3 }], (o) => o.n));
