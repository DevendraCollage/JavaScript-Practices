// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using Promises and 'async/await'.

function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("asynchronous operation - 1");
      resolve();
    }, 1000);
  });
}

function asyncOperation2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("asynchronous operation - 2");
      resolve();
    }, 2000);
  });
}

function asyncOperation3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("asynchronous operation - 3");
      resolve();
    }, 3000);
  });
}

async function performOperations() {
  try {
    await asyncOperation1();
    await asyncOperation2();
    await asyncOperation3();
  } catch (error) {
    console.log("Error : " + error.message);
  }
}
performOperations();
