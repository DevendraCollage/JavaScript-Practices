// Write a JavaScript program to replace all but the last number of characters with the specified mask character.

const maxBy = (arr, fn) => {
  return Math.max(...arr.map(typeof fn === "function" ? fn : (val) => val[fn]));
};

console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 80 }, { n: 6 }], (o) => o.n));
console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 61 }], "n"));
