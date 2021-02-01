/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let cur1 = 0,
    cur2 = 1;
  let newLength = 1;
  if (nums.length == 0) return 0;

  while (cur2 < nums.length) {
    //console.log(".." + cur1 + " - " + cur2);
    if (nums[cur2] != nums[cur1]) {
      cur1++;
      nums[cur1] = nums[cur2];
      newLength++;
    }
    cur2++;
  }
  console.log(nums);
  return newLength;
};

console.log(removeDuplicates([]));
