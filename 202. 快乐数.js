var log = console.log.bind(console)

/**
 * @param {number} n
 * @return {boolean}
 * 输入: 19
 * 输出: true
 * 解释:
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 */
var deleteZero = function (num) {
    // 删掉数字末尾的 0
    var str = num.toString()
    for (var i = 0; i < str.length; i++) {
        if (str[str.length - 1 - i] === "0") {
            str = str.slice(0, str.length - i - 1)
            i = -1
        } else {
            break
        }
    }
    var result = 0
    for (var j = 0; j < str.length; j++) {
        result += str[j]
    }
    return parseInt(result)
}

// deleteZero(20)

var isHappy = function (n) {
    // 输入正整数
    var arr = n.toString().split("")
    var nextN = 0
    for (var i = 0; i < arr.length; i++) {
        arr[i] = Math.pow(parseInt(arr[i]), 2)
        nextN += arr[i]
    }
    if (nextN === 1) {
        return true
    }
    while (nextN > 1) {
        var arr = nextN.toString().split("")
        var nextN = 0
        for (var i = 0; i < arr.length; i++) {
            arr[i] = Math.pow(parseInt(arr[i]), 2)
            nextN += arr[i]
        }
        nextN = deleteZero(nextN)
        if (nextN === 1) {
            return true
        }
        if (nextN === n || nextN === 2) {
            return false
        }
    }
}

isHappy(2)
isHappy(3)
// isHappy(19)