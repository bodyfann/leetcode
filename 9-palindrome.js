/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    var len = x.toString().length;

    for (var i=0;i<Math.floor(len/2);i++) {
        console.log(x.toString()[i] + " = " + x.toString()[len-1-i] );
        if (x.toString()[i] == x.toString()[len-1-i]) {
            // Keep going
        } else {
            return false
        }       
    }
    return true;
}

console.log(isPalindrome(-11));