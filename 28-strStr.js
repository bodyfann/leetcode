/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let index = -1;
  if (needle == "") return 0;
  for (let i = 0; i < haystack.length; i++) {
    console.log(haystack[i]);
    if (haystack[i] == needle[0]) {
      index = i;
      for (let j = 1; j < needle.length; j++) {
        if (needle[j] != haystack[i + j]) {
          index = -1;
          break;
        }
      }
    }
    if (index >= 0) return index;
  }
  return index;
};

console.log(strStr("", ""));
