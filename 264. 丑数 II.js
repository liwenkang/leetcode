const log = console.log.bind(console)

/**
 * @param {number} n
 * @return {number}
 */

var isUgly = function (num) {
    /* 如果一个数字除以 2, 3, 5 之后为 1 就行 */
    if (num >= 1) {
        while (num !== 1) {
            if ((num % 2 !== 0) && (num % 3 !== 0) && (num % 5 !== 0)) {
                return false
            }
            if (num % 2 === 0) {
                num = num / 2
            }
            if (num % 3 === 0) {
                num = num / 3
            }
            if (num % 5 === 0) {
                num = num / 5
            }
        }
        return true
    }
    return false
}

var nthUglyNumber = function(n) {
    var count = 0
    for(var i = 1;;i++) {
        if(isUgly(i)) {
            count++
        }
        if(count === n) {
            return i
        }
    }
};