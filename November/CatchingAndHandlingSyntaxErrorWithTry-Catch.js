// Write a JavaScript program that uses a try-catch block to catch and handle a 'SyntaxError' when parsing an invalid JSON string.

const isSyntaxError = (ObjStr) => {
  try {
    const result = JSON.parse(ObjStr);
    console.log(`Parsed Data : ${result}`);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log(`Syntax Error : ${error.message}`);
    } else {
      console.log(`Error : ${error.message}`);
    }
  }
};

isSyntaxError('{"name" : "devendra", "age" : 23}');
isSyntaxError('{"name" : "devendra", "age" : 23,}');
