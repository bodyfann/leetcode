/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let subValue = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (subValue + nums[i] > nums[i]) {
      subValue = subValue + nums[i];
    } else {
      subValue = nums[i];
    }
    if (subValue > max) {
      max = subValue;
    }
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
