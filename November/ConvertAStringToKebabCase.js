// Write a JavaScript program to convert a string to kebab case.

// Note: Break the string into words and combine them adding - as a separator, using a regexp.

const toKebabCase = (str) => {
  return (
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join("-")
  );
};

console.log(toKebabCase("Devendra Parmar"));
console.log(toKebabCase("darshanUniversty"));
