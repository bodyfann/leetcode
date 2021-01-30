/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var rest = 0;
    var reversed = 0;
    var isNegative = false;
    var maxPos = Math.pow(2,31)-1;
    var maxNeg = Math.pow(-2,31);

    if (x < 0) {
        x = -x;
        isNegative = true;
    }

    while (x > 0) {
        console.log("x: " + x);
        
        rest = x % 10;
        //console.log("rest: " + rest);
       
        x = Math.floor(x/10);
        //console.log("x(new): " + x);

        if (isNegative) {
            if (-(reversed * 10 + rest) < maxNeg) {
                reversed = 0;
                x = 0;
            } else {
                reversed = reversed * 10 + rest;
            }
        } else {
            if ((reversed * 10 + rest) > maxPos) {
                reversed = 0;
                x = 0;
            } else {
                reversed = reversed * 10 + rest;
            }
        }
        //console.log("output: " + reversed);
    }

    if (isNegative && reversed != 0) {
        reversed = -reversed
        //console.log(reversed + " - " + Math.pow(-2,31));
        //if (reversed < Math.pow(-2,31)) reversed = 0;
    } else {
        //console.log(reversed + " - " + (Math.pow(2,31)-1));
        //if (reversed > (Math.pow(2,31)-1)) reversed = 0;
    }

    return reversed;
};

console.log(reverse(7463847412));