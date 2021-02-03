/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits[digits.length - 1] + 1 == 10) {
    let subArray = plusOne(digits.slice(0, digits.length - 1));
    if (digits.length - 1 == 0) {
      let firstElement = [1];
      subArray = firstElement.concat(subArray);
    }
    return subArray.concat([0]);
  } else {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
    return digits;
  }
};

console.log(plusOne([1, 9, 9, 9]));
