// Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.

// Note: Use String.split('\n') to create a string for each row, then String.split(delimiter) to separate the values in each row. Omit the second argument, delimiter, to use a default delimiter of ,. Omit the third argument, omitFirstRow, to include the first row (title row) of the CSV string.

const prompt = require("prompt-sync")();

const csvToArray = (data, delimiter = ",", omitFirstRow = false) => {
  return data
    .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((v) => v.split(delimiter));
};

console.log("Enter the String CSV Values Here : ");
var str = prompt();

var slicedData = csvToArray(str);

console.log(slicedData);
