const log = console.log.bind(console)

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    x = "00000000000000000000000000000000" + x.toString(2)
    y = "00000000000000000000000000000000" + y.toString(2)
    x = x.split("").slice(-32).join("")
    y = y.split("").slice(-32).join("")
    var count = 0
    for (var i = 0; i < 32; i++) {
        if (x[i] !== y[i]) {
            count++
        }
    }
    return count
}

hammingDistance(1, 4)