// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.

const countVowel = (str) => {
  var strWord = str.toLowerCase().split("");
  var vCount = 0;
  for (let i = 0; i < strWord.length; i++) {
    if (
      strWord[i] === "a" ||
      strWord[i] === "e" ||
      strWord[i] === "i" ||
      strWord[i] === "o" ||
      strWord[i] === "u"
    ) {
      vCount++;
    }
  }

  return vCount;
};

const prompt = require("prompt-sync")();

var str = prompt("Enter the string here : ");
console.log("\n");

console.log(`The Vowel Count Within String is : ${countVowel(str)}`);
