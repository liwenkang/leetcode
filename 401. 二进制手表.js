const log = console.log.bind(console)
/**
 * @param {number} num
 * @return {string[]}
 * 输入: n = 1
 * 返回: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
 * 上 0 ~ 3
 * 下 0 ~ 5
 * num 的取值范围 0 ~ 8
 */

var countNum = function (num) {
    // 比如 num = 2
    // 换算成二进制 就是 10
    // 需要 1
    var count = 0
    num = num.toString(2)
    for (var i = 0; i < num.length; i++) {
        if (num[i] === "1") {
            count++
        }
    }
    return count
}

var readBinaryWatch = function (num) {
    var result = []
    for (var h = 0; h < 12; h++) {
        for (var m = 0; m < 60; m++) {
            if(countNum(h) + countNum(m) === num) {
                result.push(h + ":" + (m < 10 ? "0" + m : m))
            }
        }
    }
    return result
}

// readBinaryWatch()