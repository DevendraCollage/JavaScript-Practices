// Write a JavaScript program to group array elements based on the given function. It return the count of elements in each group.

const countBy = (arr, fn) => {
  return arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
};

console.log(countBy([50, 100, 25, 10], Math.sqrt));
