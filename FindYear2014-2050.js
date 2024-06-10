//!  Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
console.log("find out if 1st January will be a Sunday between 2014 and 2050.");

//? Distinguish the output
console.log("------------------------------------");

//? Start the loop to find the year will between 2014 to 2050
for (let i = 2014; i <= 2050; i++) {
  //* Declare the Date object to access the date
  var d = new Date(i, 0, 1); // For i is year index, 0 is month index, 1 is date index

  if (d.getDay() === 0) {
    console.log("The 1st January is being a Sunday : ", i);
  }
}

//? Distinguish the output
console.log("------------------------------------");
