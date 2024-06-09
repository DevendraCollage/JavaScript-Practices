//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

//! Function to check year is leap or not
function isLeapYear(year) {
  if (year % 400 == 0) {
    console.log(year + " Is leap year!");
  } else {
    console.log(year + " Is not leap year!");
  }
}

//* Read the year from the user
console.log("Enter the year here : ");
var year = prompt();

//* Convert the year into number
year = parseInt(year);

//* Check the year is leap or not
isLeapYear(year);
