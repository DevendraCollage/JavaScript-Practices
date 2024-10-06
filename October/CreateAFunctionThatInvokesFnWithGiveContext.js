// Write a JavaScript program to create a function that invokes fn in a given context. Optionally add any additional variables to the arguments beginning.

const bind = (fn, context, ...args) => {
  return function () {
    return fn.apply(context, args.concat(...arguments));
  };
};

function greet(greeting, punctuation) {
  return greeting + " " + this.user + punctuation;
}

const freddy = { user: "Morning" };

const freddyBound = bind(greet, freddy);

console.log(freddyBound("Good", "!"));
