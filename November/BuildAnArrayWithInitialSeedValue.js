// Write a JavaScript program to build  an array, using an iterator function and an initial seed value.

const unFold = (fn, seed) => {
  let result = [];
  let val = [null, seed];
  while ((val = fn(val[1]))) {
    result.push(val[0]);
  }
  return result;
};

const f = (n) => (n > 50 ? false : [-n, n + 10]);

console.log(unFold(f, 10));
