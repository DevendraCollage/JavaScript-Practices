// Write a JavaScript program to filter an array of objects based on a condition while also filtering out unspecified keys.

const reducedFilter = (data, keys, fn) => {
  return data.filter(fn).map((el) =>
    keys.reduce((acc, key) => {
      acc[key] = el[key];
      return acc;
    }, {})
  );
};

const data = [
  {
    id: 1,
    name: "Darshan",
    age: 22,
  },
  {
    id: 2,
    name: "Devendra",
    age: 23,
  },
];

console.log(reducedFilter(data, ["id", "name"], (item) => item.age > 22));
