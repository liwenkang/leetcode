const log = console.log.bind(console)

// 判断整数的奇偶
const judgeOddEven = function (num) {
    if (num & 1 === 1) {
        log("基数")
        return "基数"
    } else {
        log("偶数")
        return "偶数"
    }
}

const exchangeNum = function (a, b) {
    log("交换前: a=" + a + " b=" + b)
    b = a - b
    a = b - a
    b = b - a
    log("交换后: a=" + a + " b=" + b)
}


// 不利用第三个变量,进行两个数字交换
const exchangeNum = function (a, b) {
    log("交换前: a=" + a + " b=" + b)
    a ^= b
    b ^= a
    a ^= b
    log("交换后: a=" + a + " b=" + b)
}

const powerMultiplyNum = function (x, y) {
    // 计算 2 的 n 次方
    // x * Math.power(2, y)
    // x << y
    return x << y

    // a < 1 比 a * 2 快
}


const powerDivisionNum = function (x, y) {
    // 比如二分查找、堆的插入操作等等
    // x / Math.power(2, y)
    // x >> y
    log(x >> y)
    return x >> y

    // a >> 1 比 a / 2 快
}

powerDivisionNum(8, 3)

