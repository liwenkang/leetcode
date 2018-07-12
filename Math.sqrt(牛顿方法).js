const log = console.log.bind(console)

const sqrtNum = function (num) {
    // 牛顿方法
    var result = num
    let count = 0

    while (Math.abs(result * result - num) > 0.000000000001) {
        count++
        result = (result + 2 / result) / 2
    }

    log("结果:", result)
    log("循环次数:", count)
}

sqrtNum(2)