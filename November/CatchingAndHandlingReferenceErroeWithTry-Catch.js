// Write a JavaScript program that uses a try-catch block to catch and handle a 'ReferenceError' when accessing an undefined variable.

const isReference = () => {
  try {
    console.log(a);
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log(`Reference Error : ${error.message}`);
    } else {
      console.log(`Error : ${error.message}`);
    }
  }
};

isReference();
