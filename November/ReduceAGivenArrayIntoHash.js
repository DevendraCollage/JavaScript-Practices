// Write a JavaScript program to reduce a given Array-like into a value hash (keyed data store).

// Note: Given an Iterable or Array-like structure, call Array.prototype.reduce.call() on the provided object to step over it and return an Object, keyed by the reference value.

const toHash = (object, key) =>
  Array.prototype.reduce.call(
    object,
    (acc, data, index) => ((acc[!key ? index : data[key]] = data), acc),
    {}
  );

toHash([4, 3, 2, 1]);
toHash([{ a: "Darshan" }], "a");

let users = [
  { id: 1, first: "Devendra" },
  { id: 2, first: "Paresh" },
  { id: 3, first: "Brijesh" },
];
let managers = [{ manager: 1, employees: [2, 3] }];
managers.forEach(
  (manager) =>
    (manager.employees = manager.employees.map(function (id) {
      return this[id];
    }, toHash(users, "id")))
);

console.log(managers);
