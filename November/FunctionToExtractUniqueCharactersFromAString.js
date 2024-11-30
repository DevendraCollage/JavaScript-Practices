// Write a JavaScript function to extract unique characters from a string.

// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

const extractUnique = (str) => {
  var ans = "";

  for (const ch of str) {
    if (!ans.includes(ch)) {
      ans += ch;
    }
  }

  return ans;
};

const prompt = require("prompt-sync")();

var str = prompt("Enter The String Here : ");

console.log(extractUnique(str));
