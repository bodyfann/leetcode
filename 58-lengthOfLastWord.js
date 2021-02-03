/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let arrayOfWords = s.trim().split(" ");
  let lastWord = arrayOfWords[arrayOfWords.length - 1];
  console.log(arrayOfWords);
  return lastWord.length;
};

console.log(lengthOfLastWord("H     lo"));
