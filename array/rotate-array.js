// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

var rotate = function (nums, k) {
  k = k % nums.length; // Handle cases where k is larger than the array length
  nums.unshift(...nums.splice(nums.length - k, k));
  return nums;
};
