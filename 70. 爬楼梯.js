var log = console.log.bind(console)

/**
 * @param {number} n
 * @return {number}
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 */

var resolutionNum = function (num) {
    // 已知数字 num 将它分解为 x 个 1 个 和 y 个 2 相加的形式
    // [[x1, y1], [x2, y2], [x3, y3]......]
    var result = []
    var maxEven = Math.floor(num / 2)
    for (var i = 0; i <= maxEven; i++) {
        result.push([num - i * 2, i])
    }
    // log(result)
    return result
}

// resolutionNum(25)

var factorial = function (num) {
    // 阶乘
    // 输入 3 的时候, 输出 3 + 2 + 1
    var product = 1
    for (var i = num; i >= 1; i--) {
        product = product * i
    }
    return product
}

var arrangementNum = function (arr) {
    // 传入 一个数组 [2,2]
    // 表示将 2个1 和 2个0 放到四个固定的位置上
    // 共有 result 种放法
    var result = factorial(arr[0] + arr[1]) / (factorial(arr[0]) * factorial(arr[1]))
    // log(result)
    return result
}

var climbStairs = function (n) {
    // n = 3
    // 1,1,1
    // 2,1
    // 1,2
    // n = 4
    // 1,1,1,1
    // 1,1,2
    // 1,2,1
    // 2,1,1
    // 2,2
    // n = 5
    // 1,1,1,1,1
    // 1,1,1,2
    // 1,1,2,1
    // 1,2,1,1
    // 1,2,2
    // 2,1,1,1
    // 2,1,2
    // 2,2,1
    var arr = resolutionNum(n)
    // log(arr)
    var sum = 0
    for(var i = 0; i < arr.length; i++) {
        // log("第",i,"个数组有", arrangementNum(arr[i]), "种")
        sum = sum + arrangementNum(arr[i])
    }
    // log(sum)
    return sum
};