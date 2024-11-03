// Write a JavaScript program to unescape escaped HTML characters.

const unescapeHTML = (str) => {
  return str.replace(
    /&|<|>|'|"/g,
    (tag) =>
      ({
        "&": "&",
        "<": "<",
        ">": ">",
        "'": "'",
        '"': '"',
      }[tag] || tag)
  );
};

console.log(unescapeHTML('<a href="#">Me & You</a>'));
