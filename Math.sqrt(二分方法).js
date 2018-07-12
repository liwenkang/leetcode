const log = console.log.bind(console)

const sqrtNum = function (num) {
    // 二分方式
    let low = 0
    let high = num
    let mid = (low + high) / 2

    let count = 0
    while (Math.abs(mid * mid - num) > 0.000000000000001) {
        count++
        if (mid * mid < num) {
            // 向后
            low = mid
            mid = (low + high) / 2
        } else if (mid * mid > num) {
            // 向前
            high = mid
            mid = (low + high) / 2
        }
    }
    log("结果:",mid)
    log("循环次数:",count)
}

sqrtNum(2)