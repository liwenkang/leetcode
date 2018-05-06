var log = console.log.bind(console)
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var arr = x.toString().split("")
    var y = parseInt(arr.reverse().join(""))
    if (x === y) {
        // log("true")
        return true
    }else {
        // log("false")
        return false
    }
};

isPalindrome( 121)
isPalindrome( -121)
isPalindrome( -1213)
isPalindrome( -12)