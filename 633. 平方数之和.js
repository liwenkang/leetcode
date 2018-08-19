const log = console.log.bind(console)

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    if(c === 0) {
        return true
    }
    for (var i = 0; i < Math.sqrt(c); i++) {
        var num = i
        var rest = c - num * num
        if (rest === 0 || Math.sqrt(rest) % 1 === 0) {
            return true
        }
    }
    return false
};

// judgeSquareSum(5)
// judgeSquareSum(3)
log(judgeSquareSum(0))
