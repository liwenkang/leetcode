const log = console.log.bind(console)

/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    for (var i = 1; i < bits.length; i++) {
        var str1 = "" + bits[i - 1] + bits[i]
        var flag = true
        if (str1 === "10" || str1 === "11" || (str1 === "00" && i < bits.length - 1)) {
            flag = false
            bits = bits.slice(i + 1)
            i--
        }
        if (flag) {
            var str2 = "" + bits[i - 1]
            if (str2 === "0") {
                bits = bits.slice(i)
                i--
            }
        }
    }
    if (bits.length === 1 && bits[0] === 0) {
        return true
    } else if (bits[bits.length - 2] === 0) {
        return true
    }
    return false
}
//
log(isOneBitCharacter([0, 0]) === true)
log(isOneBitCharacter([1, 0, 0]) === true)
log(isOneBitCharacter([1, 1, 1, 0]) === false)
log(isOneBitCharacter([1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0]) === true)