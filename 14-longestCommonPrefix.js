/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var prefix,
    longestPrefix = "";
  if (strs.length == 0) return "";
  if (strs.length == 1) return strs[0];

  for (var i = 1; i <= strs[0].length; i++) {
    prefix = strs[0].slice(0, i);
    for (var j = 1; j < strs.length; j++) {
      console.log(strs[j].slice(0, i) + " = " + prefix);
      if (strs[j].slice(0, i) == prefix) {
        if (j == strs.length - 1) longestPrefix = prefix;
      } else {
        return longestPrefix;
      }
      console.log(longestPrefix);
    }
  }
  return longestPrefix;
};

console.log(longestCommonPrefix(["a", "ab", "ab"]));
