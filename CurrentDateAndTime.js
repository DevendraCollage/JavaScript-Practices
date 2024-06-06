//*  Write a JavaScript program to display the current day and time in the following format.
//* Sample Output : Today is : Tuesday.
//* Current time is : 10 PM : 30 : 38

//? Date class instance to get and access to current date and day
var d = new Date();

//? Week days array
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
//? these will get the current day of the week
var todayDay = daysOfWeek[d.getDay()];
console.log("Today is : " + todayDay);

//? Get the current time
var currTime = d.toLocaleTimeString();
console.log("Current Time Is : " + currTime);
