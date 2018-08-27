const log = console.log.bind(console)

/**
 * 效率不够
 * @param {number} m
 * @param {number} n
 * @return {number}
 */


var uniquePaths = function (m, n) {
    var count = 0
    var find = function (x, y, history) {
        if (x > m || y > n) {
            return
        }
        if (x === m && y === n) {
            log(history)
            count++
            return
        }
        find(x + 1, y, history + "=>")
        find(x, y + 1, history + "↓")
    }
    find(1, 1, "")
    log(count)
    return count
}

// uniquePaths(3, 3)