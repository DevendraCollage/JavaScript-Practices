// Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.

const extendHex = (hex) => {
  return (
    "#" +
    hex
      .slice(hex.startsWith("#") ? 1 : 0)
      .split("")
      .map((x) => x + x)
      .join("")
  );
};

console.log(extendHex("#3f0"));
