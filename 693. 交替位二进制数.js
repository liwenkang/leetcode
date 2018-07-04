const log = console.log.bind(console)

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    var str = n.toString(2)
    log(str)
    for (var i = 1; i < str.length; i++) {
        if (str[i - 1] === str[i]) {
            // log(false)
            return false
        }
    }
    // log(true)
    return true
}

hasAlternatingBits(5)
hasAlternatingBits(7)
hasAlternatingBits(11)
hasAlternatingBits(10)