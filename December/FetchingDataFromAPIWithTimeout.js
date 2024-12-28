// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.

function fetchData(url, timeout) {
  const controller = new AbortController();
  const { signal } = controller;

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  return fetch(url, { signal })
    .then((response) => {
      clearTimeout(timeoutId);
      if (!response.ok) {
        throw new Error("HTTP error! Status : ", response.status);
      }
      return response.json();
    })
    .catch((error) => {
      if (error.name === "AbortError") {
        throw new Error("Request Times Out!");
      } else {
        throw error;
      }
    });
}

const URL = "https://jsonplaceholder.typicode.com/posts/1";
const timeoutTime = 5000; // 5 second
console.log("Timeout Timelines Milliseconds : ", timeoutTime);

fetchData(URL, timeoutTime)
  .then((data) => {
    console.log("Data : ", data);
  })
  .catch((error) => {
    console.log("Error : ", error.message);
  });
