// Write a JavaScript application that transforms a numerical value into hours and minutes.

const prompt = require("prompt-sync")();

console.log("Enter the time in numbers here : ");
var timeNum = Number.parseInt(prompt());

var hours = Math.floor(timeNum / 60);
var minutes = timeNum % 60;

console.log(`${hours} Hours : ${minutes} Minutes`);
