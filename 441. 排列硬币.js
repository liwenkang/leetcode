const log = console.log.bind(console)

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    var result = 0
    var count = -1
    for (var i = 1; ; i++) {
        result += i
        count++
        if (result > n) {

            break
        }
    }
    return count
}

arrangeCoins(5)