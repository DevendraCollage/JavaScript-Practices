// Write a JavaScript program to create an array of elements, unground the elements in an array produced by zip and applying the provided function.

const unzipWith = (arr1, arr2) => {
  var ans = [];
  for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    ans.push(arr1[i] + arr2[i]);
  }

  return ans;
};

console.log(unzipWith([1, 2, 3], [10, 20, 30]));
