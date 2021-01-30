/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var openPar = [];

  for (var i = 0; i < s.length; i++) {
    console.log(openPar);

    if (s[i] == "{" || s[i] == "[" || s[i] == "(") {
      openPar.push(s[i]);
    } else {
      var top = openPar.pop();
      if (s[i] == "]" && top == "[") {
        //Keep going
      } else if (s[i] == "}" && top == "{") {
        // Keep going
      } else if (s[i] == ")" && top == "(") {
        // Keep going
      } else {
        return false;
      }
    }
  }
  if (openPar.length == 0) return true;
  else return false;
};

console.log(isValid("[][][][][](({()}))"));
