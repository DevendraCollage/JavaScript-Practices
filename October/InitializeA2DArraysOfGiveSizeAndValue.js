// Write a JavaScript program to initialize a two-dimensional array of given size and value.

const make2DArray = (w, h, value = null) => {
  return Array.from({ length: h }).map(() =>
    Array.from({ length: w }).fill(value)
  );
};

console.log(make2DArray(2, 2, 1));
console.log(make2DArray(3, 2, 0));
