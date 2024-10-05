// Write a JavaScript program to split values into two groups according to a predicate function. This specifies which group an element in the input collection belongs to.

// If the predicate function returns a truthy value, the collection element belongs to the first group; otherwise, it belongs to the second group.

const bifurCate = (arr, fn) => {
  return arr.reduce(
    (acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc),
    [[], []]
  );
};

console.log(
  bifurCate(
    ["developer", "devendra", "darshan", "university"],
    (x) => x[0] === "d"
  )
);
