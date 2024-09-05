// Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

// Use Object.keys() to get all the keys of the second object.

// Use Array.prototype.every(), Object.prototype.hasOwnProperty() and strict comparison to determine if all keys exist in the first object and have the same values.

const prompt = require("prompt-sync")();

const match = (obj, source) =>
  Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );

var obj1 = {};
var obj2 = {};

while (true) {
  var key = prompt("Enter key : ");
  var value = prompt("Enter Value : ");

  obj1[key] = value;

  continueAdd = prompt("Do you want to add another : ");

  if (continueAdd === "y") {
    continue;
  } else {
    break;
  }
}
console.log("\n");

while (true) {
  var key = prompt("Enter key : ");
  var value = prompt("Enter Value : ");

  obj2[key] = value;

  continueAdd = prompt("Do you want to add another : ");

  if (continueAdd === "y") {
    continue;
  } else {
    break;
  }
}
console.log("\n");

console.log(match(obj1, obj2));
