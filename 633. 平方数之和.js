const log = console.log.bind(console)

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    if (Math.sqrt(c) % 1 === 0) {
        log(true)
        return true
    }

    var startNum = Math.floor(Math.sqrt(c))

    for (var i = startNum; i >= 0; i--) {
        for (var j = startNum; j >= 0; j--) {
            if (i * i + j * j === c) {
                log(true)
                return true
            }
            if (i * i + j * j < c) {
                break
            }
        }
    }
    log(false)
    return false
}

judgeSquareSum(2147483646)