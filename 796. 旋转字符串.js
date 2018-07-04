const log = console.log.bind(console)

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
    if (A === B) {
        return true
    }
    for (var i = 1; i < A.length; i++) {
        A = A.slice(1) + A.slice(0, 1)
        if (A === B) {
            return true
        }
    }
    return false
}

rotateString("abcde")