const log = console.log.bind(console)

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    if (ops.length === 0) {
        return m * n
    }
    // 直接从 ops 入手
    var minX = Infinity
    var minY = Infinity
    var count = 0
    for (var i = 0; i < ops.length; i++) {
        var x = ops[i][0]
        var y = ops[i][1]
        if (x > 0 && y > 0) {
            if (x < minX) {
                minX = x
            }
            if (y < minY) {
                minY = y
            }
        }
    }
    return minX * minY
}

maxCount(3, 3, [[2, 2], [3, 3]])