// Write a JavaScript program to get a sorted array of objects ordered by properties and orders.

const orderBy = (arr, props, orders) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] =
          orders && orders[i] === "desc"
            ? [b[prop], a[prop]]
            : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );

const users = [
  { name: "jay", age: 20 },
  { name: "devendra", age: 22 },
  { name: "paresh", age: 21 },
];

console.log(orderBy(users, ["name", "age"], ["asc", "desc"]));
