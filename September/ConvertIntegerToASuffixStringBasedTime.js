// Write a JavaScript program to convert an integer to a suffixed string, adding am or pm based on its value.

const prompt = require("prompt-sync")();

time = parseInt(prompt("Enter the time here in numbers : "));

if (time === 0 || time === 24) {
  console.log(12 + "am");
} else {
  if (time === 12) {
    console.log(12 + "pm");
  } else {
    if (time < 12) {
      console.log((time % 12) + "am");
    } else {
      console.log((time % 12) + "pm");
    }
  }
}
