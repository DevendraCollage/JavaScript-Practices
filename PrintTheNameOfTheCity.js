// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

const prompt = require("prompt-sync")();

console.log("Enter the City Name : ");
var city = prompt();

if (city.startsWith("Los") || city.startsWith("New")) {
  console.log(city);
} else {
  console.log("");
}
