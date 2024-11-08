// Write a JavaScript program to apply a function against an accumulator and each key in the object (from left to right).

const transform = (obj, fn, acc) => {
  return Object.keys(obj).reduce((a, k) => fn(a, obj[k], k, obj), acc);
};

console.log(
  transform(
    { a: 1, b: 2, c: 1 },
    (r, v, k) => {
      (r[v] || (r[v] = [])).push(k);
      return r;
    },
    {}
  )
);
