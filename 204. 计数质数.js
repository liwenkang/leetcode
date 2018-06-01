var log = console.log.bind(console)

/**
 * 判定素数的算法需要优化
 * @param {number} n
 * @return {number}
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 */
var countPrimes = function (num) {
    if (num === 0 || num === 1) {
        log(0)
        return 0
    }

    if (num === 2) {
        log(0)
        return 0
    }

    if (num === 3) {
        log(1)
        return 1
    }
    num = num - 1
    if (num >= 3) {
        var sum = 1
        var primeArr = [2]
        for (var i = 3; i <= num; i += 2) {
            // 被 1 或 自己 整除
            var flag = true
            var n = Math.sqrt(i) // 可以优化算法
            for (var j = 2; j <= n; j++) {
                if (i !== j && i % j === 0) {
                    flag = false
                }
            }
            if (flag) {
                sum++
            }
        }
        log(sum)
        return sum
    }
}

countPrimes(999983)