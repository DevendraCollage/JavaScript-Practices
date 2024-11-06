// Write a JavaScript program to uncurry a function up to depth n.

const uncurry =
  (fn, n = 1) =>
  (...args) => {
    if (args.length < n) {
      throw new RangeError("Too few arguments!");
    }

    let result = fn;

    for (let i = 0; i < n; i++) {
      result = result(args[i]);
    }

    return result;
  };

const add = (x) => (y) => (z) => (a) => (b) => x + y + z + a + b;

const uncurriedAdd = uncurry(add, 5);

console.log(uncurriedAdd(1, 2, 3, 4, 5));
