// Write a JavaScript program to create an array of elements, grouped based on the position in the original arrays. Use function as the last value to specify how grouped values should be combined.

// Note: Check if the last argument provided is a function.

const zipWith = (...arrays) => {
  const fn =
    typeof arrays[arrays.length - 1] === "function" ? arrays.pop() : undefined;

  return Array.from(
    { length: Math.max(...arrays.map((a) => a.length)) },
    (_, i) => {
      if (fn) return fn(...arrays.map((a) => a[i]));

      return arrays.map((a = a[i]));
    }
  );
};

console.log(
  zipWith(
    [10, 2, 32],
    [10, 20],
    [100, 200],
    (a, b, c) =>
      (a != null ? a : "a") + (b != null ? b : "b") + (c != null ? c : "c")
  )
);
