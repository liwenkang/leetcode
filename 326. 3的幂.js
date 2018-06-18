var log = console.log.bind(console)

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfThree = function (num) {
    if (num === 0) {
        return false
    }
    if (num === 1) {
        return true
    }
    if (num % 3 === 0) {
        while (num % 3 === 0) {
            num = num / 3
        }
        if (num === 1) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

isPowerOfThree(27)
isPowerOfThree(0)
isPowerOfThree(9)
isPowerOfThree(45)