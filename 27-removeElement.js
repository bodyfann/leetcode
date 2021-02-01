/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let cur1 = 0,
    cur2 = nums.length - 1;
  let newLength = nums.length;
  while (cur1 < cur2) {
    if (nums[cur1] == val) {
      while (cur2 > cur1 && nums[cur2] == val) {
        cur2--;
        newLength--;
      }
      nums[cur1] = nums[cur2];
      console.log("Replacing " + cur1 + " with " + cur2);
      newLength--;
      cur2--;
    }
    console.log(".." + cur1 + ", " + cur2);
    cur1++;
  }
  console.log(nums);
  if (cur1 == cur2 && nums[cur2] == val) {
    newLength--;
  }
  return newLength;
};

// Better solution
var removeElement2 = function (nums, val) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    let el = nums[i];
    nums[index] = el;
    if (el !== val) {
      index += 1;
    }
  }
  return index;
};

console.log(removeElement2([1, 2, 3, 3, 4, 5, 3, 3], 3));
