// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

function makeGetRequest(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status : ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        return resolve(data);
      })
      .catch((error) => {
        return reject(error);
      });
  });
}
makeGetRequest(
  "https://github.com/Ovi/DummyJSON/blob/master/database/recipes.json"
)
  .then((data) => {
    console.log("Response Data : " + data);
  })
  .catch((error) => {
    console.log("Error : " + error.message);
  });
