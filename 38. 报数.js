var log = console.log.bind(console)

/**
 * @param {number} n
 * @return {string}
 */
var judgeRepeat = function (num) {
    // 判断是否有连续重复的数字
    var str = num.toString()
    for (var i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) {
            // log("存在连续重复的数字")
            return false
        }
    }
    // log("不存在连续重复的数字")
    return true
}


var getNextNum = function (n) {
    // 起始值为 1
    if (judgeRepeat(n)) {
        var str = n.toString().split("")
        // 数字前面加 1
        // 不存在连续重复的数字
        for (var i = 0; i < str.length; i++) {
            str[i] = "1" + str[i]
        }
        var result = str.join("")
    } else {
        // 存在连续重复的数字
        var str = n.toString()
        var repeatNumArr = []
        var resultArr = []
        for (var i = 0; i < str.length; i++) {
            var repeatNum = 1
            for (var j = i + 1; j < str.length; j++) {
                if (str[i] === str[j]) {
                    repeatNum += 1
                } else {
                    break
                }
            }
            if (repeatNum > 1) {
                // 说明要进行 切割了
                str = str.slice(0, i + 1) + str.slice(i + repeatNum)
            }
            repeatNumArr.push(repeatNum)
            // str 变化之后, i 值不用变
        }
        // log('repeatNumArr', repeatNumArr)
        // log('str', str)
        for (var k = 0; k < repeatNumArr.length; k++) {
            resultArr[k] = "" + repeatNumArr[k] + str[k]
        }
        var result = resultArr.join("")
    }
    // log(result)
    return result
}

var countAndSay = function (n) {
    var result = getNextNum(1)
    // 这已经是第二次了
    if (n === 1) {
        result = "1"
    }
    // 假设 n = 2
    // 那么不需要重复了

    // 假设 n > 2 那么需要重复 n - 2 次
    // n = 3 时, 再执行一次就行
    while (n > 2) {
        result = getNextNum(result)
        n--
    }
    // log(result)
    return result
}

countAndSay(10)