const log = console.log.bind(console)

/**
 * 开方之后取整
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    var low = 0
    var high = x
    if (low * low === x) {
        return low
    }

    if (high * high === x) {
        return high
    }
    var mid = Math.floor((low + high) / 2)

    while (mid > low && mid < high) {
        if (mid * mid < x) {
            // 在右边
            low = mid
            mid = Math.floor((low + high) / 2)
        } else if (mid * mid > x) {
            // 在左边
            high = mid
            mid = Math.floor((low + high) / 2)
        } else {
            return mid
        }
    }
    return mid
}

mySqrt(0)
mySqrt(1)
mySqrt(2)
mySqrt(3)
mySqrt(4)
mySqrt(5)