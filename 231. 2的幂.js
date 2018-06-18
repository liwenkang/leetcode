var log = console.log.bind(console)
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    /* 转换成二进制之后,第一位是1,其它全是0 */
    var str = n.toString(2)
    var arr = str.split("")

    if (arr[0] !== "1") {
        // log("false")
        return false
    }
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] === "1") {
            // log("false")
            return false
        }
    }
    // log("true")
    return true
}

isPowerOfTwo(218)
isPowerOfTwo(16)
isPowerOfTwo(1)