// Write a JavaScript program to get the symmetric difference between two given arrays, after applying the provided function to each array element of both.

const arrDiff = (a, b, fn) => {
  const sa = new Set(a.map((v) => fn(v))),
    sb = new Set(b.map((v) => fn(v)));

  return [
    ...a.filter((x) => !sb.has(fn(x))),
    ...b.filter((x) => !sa.has(fn(x))),
  ];
};

console.log(arrDiff([2.1, 1.2], [2.3, 3.4], Math.floor));
