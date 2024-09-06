// Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array of objects. The first row of the string is used as the title row.

const prompt = require("prompt-sync")();

const csvToObject = (data, delimiter = ",") => {
  const titles = data.slice(0, data.indexOf("\n")).split(delimiter);

  return data
    .slice(data.indexOf("\n") + 1)
    .split("\n")
    .map((v) => {
      const values = v.split(delimiter);

      return titles.reduce(
        (obj, title, index) => ((obj[title] = values[index]), obj),
        {}
      );
    });
};

console.log("Enter the CSV String Here : ");
var str = prompt();

var convertedCSV = csvToObject(str);

console.log(convertedCSV);
