/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var nums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  var output = 0;
  var digit = "";
  var nextDigit = "";

  while (s != "") {
    digit = s.substr(0, 1);
    if (s.length > 1) {
      nextDigit = s.substr(1, 1);
    } else {
      nextDigit = "";
    }

    if (nums[digit] < nums[nextDigit]) {
      output += nums[nextDigit] - nums[digit];
      s = s.substr(2);
    } else {
      output += nums[digit];
      s = s.substr(1);
    }
  }

  return output;
};

console.log(romanToInt(""));
