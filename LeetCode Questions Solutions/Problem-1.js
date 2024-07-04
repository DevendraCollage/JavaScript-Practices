/*
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Example 1:
  Input: nums = [2,7,11,15], target = 9
*/

var twoSum = function (arr, target) {
  var n1;
  var n2;
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        n1 = i;
        n2 = j;
      }
    }
  }
  return [n1, n2];
};

console.log(twoSum([3, 2, 3], 6));
