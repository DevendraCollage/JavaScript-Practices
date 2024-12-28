// Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.

function repeat(fn, interval) {
  fn(); // Calling the accepted function
  const intervalId = setInterval(fn, interval);
  // This is the that will remove the interval
  return function stopExecution() {
    clearInterval(intervalId);
    console.log("Execution stopped.");
  };
}

const intervalTime = 1000; // 1000 MS (Millie Second) = 1 second

function printMsg() {
  console.log("Executing the function...");
}

const stopExecution = repeat(printMsg, intervalTime);

setTimeout(() => {
  stopExecution();
}, 5000);
