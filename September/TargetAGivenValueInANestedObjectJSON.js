// Write a JavaScript program to target a given value in a nested JSON object based on the given key.

const prompt = require("prompt-sync")();

const dig = (obj, target) => {
  return target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) {
          return acc;
        }
        if (typeof val === "object") {
          return dig(val, target);
        }
      }, undefined);
};

// Test Data
const testData = {
  l1: {
    l2: {
      l3: {
        l4: {
          l5: "Devendra Parmar",
        },
      },
    },
  },
};

const animalData = {
  breed: "German Shepherded",
  sound: "Bark",
};

console.log(dig(testData, "l5"));
