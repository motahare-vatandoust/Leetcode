// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]; // Return indices if found
      }
    }
  }
  return []; // Return empty array if not found
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
