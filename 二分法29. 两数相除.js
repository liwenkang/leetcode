const log = console.log.bind(console)
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (dividend === 0) {
        return 0
    }
    if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
        var x = Math.abs(dividend)
        var y = Math.abs(divisor)
        var count = 0
        var num = 0
        while (num <= x) {
            num += y
            count++
        }
        if (1 - count < -Math.pow(2, 31)) {
            return -Math.pow(2, 31)
        } else {
            return 1 - count
        }
    } else {
        var x = Math.abs(dividend)
        var y = Math.abs(divisor)
        var count = 0
        var num = 0
        while (num <= x) {
            num += y
            count++
        }
        if (count - 1 > Math.pow(2, 31) - 1) {
            return Math.pow(2, 31) - 1
        } else {
            return count - 1
        }
    }
}

log(divide(2147483647,2))