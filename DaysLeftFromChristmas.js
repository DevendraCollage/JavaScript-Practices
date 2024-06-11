//! Write a JavaScript Program to calculate an how many days left from an christmas from the today

//? Date class object to access the current date and time
var d = new Date();

//* Get the current date and christmas date
var currDay = d.getDate();
var xmasDay = d.getFullYear();

//* This condition will check the today is month 11 or todays date is 25 or not
if (d.getMonth() == 11 && d.getDate() >= 25) {
  xmasDay = xmasDay + 1;
}

//* Create nw xmas date instance
var xmasDate = new Date(xmasDay, 11, 25);

//* Calculate different between today and xmas day
var diff = xmasDate.getTime() - d.getTime();
var days = Math.floor(diff / (1000 * 60 * 60 * 24));

//! Print the difference
console.log(
  "There are " + days + " days left from christmas of " + d.getFullYear()
);
