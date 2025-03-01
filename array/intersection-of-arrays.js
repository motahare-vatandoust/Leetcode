// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays and you may
// return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]


var intersect = function(nums1, nums2) {
    return nums1.filter(num => {
    const index = nums2.indexOf(num);
    if (index !== -1) {
        nums2.splice(index, 1);
      return true;
    }
    return false;
  });
};

// Time complexity: O(n)
console.log(intersect([1,2,2,1], [2,2])); // [2,2]