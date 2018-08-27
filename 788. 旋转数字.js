const log = console.log.bind(console)

/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
    var invalidNum = ["3", "4", "7"]
    var notSameNum = ["2", "5", "6", "9"]
    var count = 0
    for (var i = 1; i <= N; i++) {
        var str = i.toString(10)
        var flag = true
        for (var j = 0; j < str.length; j++) {
            if (invalidNum.includes(str[j])) {
                flag = false
                break
            }
        }
        if (flag) {
            for (var j = 0; j < str.length; j++) {
                if (notSameNum.includes(str[j])) {
                    log("str", str)
                    // 有不同的数字
                    count++
                    break
                }
            }
        }
    }
    return count
}

rotatedDigits(23)