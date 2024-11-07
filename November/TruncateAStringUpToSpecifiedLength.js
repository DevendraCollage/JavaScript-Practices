// Write a JavaScript program to truncate a string up to a specified length.

// Note: Determine if the string's length is greater than num. Return the string truncated to the desired length, with '...' appended to the end or the original string.

const truncateString = (str, num) =>
  str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + "..." : str;

console.log(truncateString("Darshan University", 10));
