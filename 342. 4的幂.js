var log = console.log.bind(console)

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
    if (num === 0) {
        log("false")
        return false
    }
    if(num === 1) {
        log("true")
        return true
    }
    if (num % 4 === 0) {
        while (num % 4 === 0) {
            num = num / 4
        }
        if (num === 1) {
            log("true")
            return true
        } else {
            log("false")
            return false
        }
    } else {
        log("false")
        return false
    }
}

isPowerOfFour(0)
isPowerOfFour(1)
isPowerOfFour(4)
isPowerOfFour(8)
isPowerOfFour(16)