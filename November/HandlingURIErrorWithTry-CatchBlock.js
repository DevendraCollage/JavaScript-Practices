// Write a JavaScript program that uses a try-catch block to catch and handle a `URIError` when decoding an invalid URI.

const decodeURI = (uriString) => {
  try {
    const decodedURI = decodeURI(uriString);
    return `Decoded URI : ${decodedURI}`;
  } catch (error) {
    if (error instanceof URIError) {
      return `URI Error : ${error.message}`;
    } else {
      return `Error : ${error.message}`;
    }
  }
};

console.log(decodeURI("https://example.com/"));
console.log(decodeURI("https://example.com/%%invalidURI"));
