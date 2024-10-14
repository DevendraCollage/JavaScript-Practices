// Write a JavaScript program to return the difference between two arrays, after applying the provided function to each array element of both.

const differenceBy = (a, b, fn) => {
  const s = new Set(b.map((v) => fn(v)));

  return a.filter((x) => !s.has(fn(x)));
};

console.log(differenceBy([10, 25], [10, 20], Math.sqrt));
