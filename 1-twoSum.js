/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var found = false;
  var i = 0;
  while (!found && i < nums.length - 1) {
    console.log(i + " --> " + nums[i]);
    var j = i + 1;
    while (!found && j < nums.length) {
      console.log(">> " + j + " --> " + nums[j]);
      if (nums[i] + nums[j] == target) {
        found = true;
        return [i, j];
      }
      j++;
    }
    i++;
  }
};

console.log(twoSum([2, 5, 5, 11], 10));
