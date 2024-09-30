// Write a JavaScript program to retrieve a set of properties indicated by the given selectors from an object.

const get = (from, ...selectors) => {
  return [...selectors].map((s) => {
    return s
      .replace(/\[([^\[\]]*)\]/g, ".$1.")
      .split(".")
      .filter((t) => t !== "")
      .reduce((prev, cur) => prev && prev[cur], from);
  });
};

const obj = {
  selectors: {
    to: {
      val: "val to select",
    },
    target: [1, 2, { a: "test" }],
  },
};

console.log(
  get(obj, "selectors.to.val", "selectors.target[0]", "selectors.target[2].a")
);
