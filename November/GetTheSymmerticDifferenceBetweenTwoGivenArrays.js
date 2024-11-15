// Write a JavaScript program to get the symmetric difference between two given arrays, using a provided function as a comparator.

const arrDiff = (arr1, val, comp) => [
  ...arr1.filter((a) => val.findIndex((b) => comp(a, b)) === -1),
  ...val.filter((a) => arr1.findIndex((b) => comp(a, b)) === -1),
];

console.log(
  arrDiff(
    [1, 2.5, 3, 4, 5],
    [5, 4, 3, 2, 1],
    (a, b) => Math.round(a) === Math.round(b)
  )
);
console.log(
  arrDiff(
    [1, 1.2, 1.5, 3, 0],
    [1.9, 3, 0, 3.9],
    (a, b) => Math.round(a) === Math.round(b)
  )
);
