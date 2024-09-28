// Write a JavaScript program to split values into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.

const bifurcate = (arr, filter) => {
  return arr.reduce(
    (acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc),
    [[], []]
  );
};

console.log(
  bifurcate(["hello", "world", "rajkot", "india"], [true, true, false, true])
);
