const log = console.log.bind(console)

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function (A, B) {
    var count = Math.ceil(B.length / A.length)
    var str = A.repeat(count)
    if (str.includes(B)) {
        return count
    } else {
        if ((str + A).includes(B)) {
            return count + 1
        } else {
            return -1
        }
    }
}
log(repeatedStringMatch("abcd", "cdabcdab"))