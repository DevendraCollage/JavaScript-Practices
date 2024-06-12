//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

//* Read the temperature from the user
console.log("Enter the temperature in celsius : ");
var celsius = prompt();

//? Convert the celsius into fahrenheit
var fahrenheit = celsius * (9 / 5) + 32;

//! Print the converted temperature
console.log("Celsius to Fahrenheit : ", fahrenheit);
console.log("\n");

//* Read the temperature from the user
console.log("Enter the temperature in fahrenheit : ");
var f = prompt();

//? Convert the fahrenheit to Celsius
var c = ((f - 32) * 5) / 9;

//! Print the converted temperature
console.log("Fahrenheit to Celsius : ", c);
