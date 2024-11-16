// Write a JavaScript program to generate all permutations of a string (contains duplicates).

const stringPermutations = (str) => {
  if (str.length <= 2) {
    return str.length === 2 ? [str, str[1] + str[0]] : str;
  }

  return str.split("").reduce((acc, letter, i) => {
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    const permutations = stringPermutations(remainingChars);
    return acc.concat(permutations.map((val) => letter + val));
  }, []);
};

console.log(stringPermutations("abc"));
