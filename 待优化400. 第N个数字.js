var log = console.log.bind(console)

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    var str = ""
    var i = 1
    while (str.length <= n-1) {
        str += (i++)
    }
    log(str[n - 1])
    return str[n - 1]
};

findNthDigit(2147483648)