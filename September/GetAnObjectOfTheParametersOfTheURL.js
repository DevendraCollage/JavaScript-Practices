// Write a JavaScript program to get an object containing the current URL parameters.

const getURLParameters = (url) => {
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
    ),
    {}
  );
};

console.log(
  getURLParameters("https://url.com/page?name=Dev&username=Devendra")
);
console.log(getURLParameters("https://github.com"));
