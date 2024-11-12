// Write a JavaScript program to create a specified currency format from a given number.

const toCurrency = (n, curr, languageFormat = undefined) => {
  return Intl.NumberFormat(languageFormat, {
    style: "currency",
    currency: curr,
  }).format(n);
};

console.log(toCurrency(12345.789, "INR"));
console.log(toCurrency(12345.789, "USD"));
console.log(toCurrency(12345.789, "EUR"));
