// Write a JavaScript program to check if the predicate (second argument) is truthy on all elements of a collection (first argument).

const truthCheckCollection = (collection, pre) =>
  collection.every((obj) => obj[pre]);

console.log(
  truthCheckCollection(
    [
      { user: "John Walker", gender: "maele" },
      { user: "Darshan", gender: "male" },
    ],
    "gender"
  )
);
