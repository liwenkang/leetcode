const log = console.log.bind(console)

// 骚操作

var rangeBitwiseAnd = function (m, n) {
    var ans = n
    while (ans > m) {
        ans = ans & (ans - 1)
    }
    return ans
}

log(rangeBitwiseAnd(20000, 2147483647))