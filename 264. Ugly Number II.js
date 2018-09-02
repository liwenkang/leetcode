const log = console.log.bind(console)

var nthUglyNumber = function (n) {
    // 构建一个数组,把所有的 ugly 数按照从小到大的顺序存进去
    var result = [0, 1]
    // n >= 1
    var i2 = 0
    var i3 = 0
    var i5 = 0

    var x = result[1]
    var y = result[1]
    var z = result[1]

    for (var i = 1; i <= n; i++) {
        result[i] = Math.min(x, y, z)
        if (result[i] === x) {
            x = result[++i2] * 2
        }
        if (result[i] === y) {
            y = result[++i3] * 3
        }
        if (result[i] === z) {
            z = result[++i5] * 5
        }
    }
    return result[n]
}

log(nthUglyNumber(10))