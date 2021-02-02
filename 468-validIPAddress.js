/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
  let IPv4 = /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/;
  let IPv6 = /^[a-f0-9]{1,4}:[a-f0-9]{1,4}:[a-f0-9]{1,4}:[a-f0-9]{1,4}:[a-f0-9]{1,4}:[a-f0-9]{1,4}:[a-f0-9]{1,4}:[a-f0-9]{1,4}$/i;

  //   let test = /^[a-f0-9]{1,4}:[a-f0-9]{1,4}$/i;
  //   console.log(test.test("2001:0db8"));
  //   return;

  let output = "Neither";
  if (IPv4.test(IP)) {
    // IPv4
    let testString = "";
    let block = 1;
    for (let i = 0; i <= IP.length; i++) {
      console.log("testString: " + testString);
      if (IP[i] == "." || i == IP.length) {
        console.log("Check: " + testString);
        if (
          (testString[0] == "0" && testString.length > 1) ||
          (testString[0] == "0" && block == 1) ||
          (testString[0] == "0" && block == 4)
        ) {
          return "Neither";
        } else {
          if (parseInt(testString) >= 0 && parseInt(testString) <= 255) {
            console.log("???");
            output = "IPv4";
          } else {
            return "Neither";
          }
        }
        testString = "";
        block++;
      } else {
        testString = testString + IP[i];
      }
    }
    return output;
  } else if (IPv6.test(IP)) {
    // IPv6
    return "IPv6";
  } else {
    return output;
  }
};

console.log(validIPAddress("172.256.254.1"));
