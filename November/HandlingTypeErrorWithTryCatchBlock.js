// Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.

try {
  const undefinedObject = undefined;
  console.log(undefinedObject.property);
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Error : Property access to undefined object!");
  } else {
    throw new error();
  }
}
