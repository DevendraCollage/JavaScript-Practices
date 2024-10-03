// Write a JavaScript program to join all given URL segments together, then normalize the resulting URL.

const joinURL = (...args) => {
  return args
    .join("/")
    .replace(/[\/]+/g, "/")
    .replace(/^(.+):\//, "$1://")
    .replace(/^file:/, "file:/")
    .replace(/\/(\?|&|#[^!])/g, "$1")
    .replace(/\?/g, "&")
    .replace("&", "?");
};

console.log(
  joinURL("http://www.google.com", "a", "/b/cd", "?foo=123", "?bar=foo")
);
