//* Write a JavaScript program to get the current date.
//* mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

//? Date class object to access the date and time
var d = new Date();

//! 1. Get the current month
var mm = d.getMonth();

//! 2. Get the current date of today
var dd = d.getDay();

//! 3. Get the current month
var yyyy = d.getFullYear();

//? 1. First format to print the current date
//* mm-dd-yyyy
console.log(mm + "-" + dd + "-" + yyyy);
//? 2. Second format to print the current date
//* mm/dd/yyyy
console.log(mm + "/" + dd + "/" + yyyy);

//? 3. Third format to print the current date
//* dd-mm-yyyy
console.log(dd + "-" + mm + "-" + yyyy);
//? 4. Fourth format to print the current date
//* dd/mm/yyyy
console.log(dd + "/" + mm + "/" + yyyy);
