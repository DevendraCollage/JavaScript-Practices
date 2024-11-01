// Write a JavaScript program to get all distinct values (from the right side of the array) of an array, based on a provided comparator function.

const uniqueElementsByRight = (arr, fn) => {
  return arr.reduceRight((acc, v) => {
    if (!acc.some((x) => fn(v, x))) acc.push(v);
    // Return the accumulator.
    return acc;
  }, []);
};

console.log(
  uniqueElementsByRight(
    [
      { id: 0, value: "a" },
      { id: 1, value: "b" },
      { id: 1, value: "c" },
      { id: 2, value: "d" },
      { id: 3, value: "e" },
    ],
    (a, b) => a.id == b.id
  )
);
