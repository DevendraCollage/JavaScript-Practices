// Write a JavaScript program to create a function that invokes the method at a given key of an object. Optionally, add any parameters that are supplied to the beginning of the arguments.

const bind = (context, fn, ...args) => {
  return function () {
    return context[fn].apply(context, args.concat(...arguments));
  };
};

const freddy = {
  user: "Devendra",
  greet: function (greeting, punctuation) {
    return greeting + " " + this.user + punctuation;
  },
};

const freddyBound = bind(freddy, "greet");

console.log(freddyBound("Hello,", "!"));
