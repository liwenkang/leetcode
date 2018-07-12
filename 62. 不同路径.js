const log = console.log.bind(console)

/**
 * 效率不够
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    var count = 0
    var result = []
    var find = function (x, y, history) {
        if (x === m && y === n) {
            count++
            return
        }
        if (x > m || y > n) {
            return
        }
        find(x + 1, y)
        find(x, y + 1)
    }
    find(1, 1, "")
    log("count", count)
    return count
}

uniquePaths(23, 12)