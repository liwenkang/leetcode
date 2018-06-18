var log = console.log.bind(console)

/**
 * @param {number} num
 * @return {number}
 * 输入: 38
 * 输出: 2
 * 解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。
 */
var addDigits = function (num) {
    var arr = num.toString().split("")
    while (arr.length > 1) {
        var result = 0
        for (var i = 0; i < arr.length; i++) {
            result += parseInt(arr[i])
        }
        arr = result.toString().split("")
    }
    return parseInt(arr[0])
}

addDigits(38)