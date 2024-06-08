//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

//! Read the area from the user
console.log("Enter the area of the angle-1 : ");
let a1 = prompt();
console.log("Enter the area of the angle-2 : ");
let a2 = prompt();
console.log("Enter the area of the angle-3 : ");
let a3 = prompt();

//? Calculate the area of the triangle
let sumArea = (a1 + a2 + a3) / 2;

//? Use the inbuilt meth method to calculate the area
let area = Math.sqrt(
  sumArea * ((sumArea - a1) * (sumArea - a2) * (sumArea - a3))
);

//* Print the area of the Triangle
console.log(area);
