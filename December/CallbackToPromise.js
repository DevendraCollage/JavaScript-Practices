// Write a JavaScript program that converts a callback-based function to a Promise-based function.

/*
The Promise object represents the eventual completion (of failure) of an asynchronous operation and its resulting value.

A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately retuning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

➡️ pending: initial state, neither fulfilled nor rejected.
➡️ fulfilled: meaning that the operation was completed successfully.
➡️ rejected: meaning that the operation failed.
*/

function callBackBased(arg1, arg2, callback) {
  setTimeout(() => {
    const result = arg1 + arg2;
    if (result % 2 !== 0) {
      callback(null, result);
    } else {
      callback(new Error("Result is not odd!"), null);
    }
  }, 1000);
}

function promiseBased(arg1, arg2) {
  return new Promise((resolve, reject) => {
    callBackBased(arg1, arg2, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

promiseBased(2, 3)
  .then((result) => {
    console.log("Result : ", result);
  })
  .catch((error) => {
    console.log("Error : ", error.message);
  });

promiseBased(2, 1)
  .then((result) => {
    console.log("Result : ", result);
  })
  .catch((error) => {
    console.log("Error : ", error.message);
  });

promiseBased(2, 2)
  .then((result) => {
    console.log("Result : ", result);
  })
  .catch((error) => {
    console.log("Error : ", error.message);
  });
