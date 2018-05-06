var log = console.log.bind(console)

/**
 * @param {string} s
 * @return {string}
 */

var judgeNumOrStr = function (singleStr) {
    if (singleStr >= 0) {
        // log("是数字")
        return true
    } else {
        // log("是字符,或者符号")
        return false
    }
}

var getLeftBracketsPosition = function (s) {
    // 用来保存所有 "[" 的位置
    var result = []

    for (var i = 0; i < s.length; i++) {
        if (s[i] === "[") {
            result.push(i)
        }
    }
    return result
}

var getRightBracketsPosition = function (s) {
    // 用来保存所有 "]" 的位置
    var result = []

    for (var i = 0; i < s.length; i++) {
        if (s[i] === "]") {
            result.push(i)
        }
    }
    return result
}

var getNumArr = function (s) {
    var leftBracketsPosition = getLeftBracketsPosition(s)
    var result = []
    for (var i = 0; i < leftBracketsPosition.length; i++) {
        // 截取出现括号前所有字符串,然后倒序向前查找,找到数字就拼接,直到找不到开始下个循环
        var str = s.slice(0, leftBracketsPosition[i])
        var arr = []
        for (var j = str.length - 1; j >= 0; j--) {
            if (judgeNumOrStr(s[j])) {
                arr.push(s[j])
            } else {
                break
            }
        }
        var num = parseInt(arr.reverse().join(""))
        result.push(num)
    }
    return result
}

var judgeNesting = function (leftArr, rightArr) {
    // 默认无嵌套
    var leftBracketsPosition = leftArr

    var rightBracketsPosition = rightArr

    var bracketsLength = leftBracketsPosition.length

    // 判断,如果是完全无嵌套的情况
    for (var i = 0; i < bracketsLength - 1; i++) {
        if (leftBracketsPosition[i + 1] < rightBracketsPosition[i]) {
            log("有嵌套")
            return false
        }
    }
    log("无嵌套")
    return true
    // 根据括号位置,把所有的数字找出来
    // var numArr = getNumArr(s)
}

var repeatStr = function (str, num) {
    var result = ""
    for (var i = 0; i < num; i++) {
        result += str
    }
    return result
}

var decodeString = function (s) {
    // 从简单的开始考虑
    // 1. 只有单个数字和重复字母,无嵌套
    // zz 12[ab] zz 10[cd]
    var leftBracketsPosition = getLeftBracketsPosition(s)
    var rightBracketsPosition = getRightBracketsPosition(s)

    if (judgeNesting(leftBracketsPosition, rightBracketsPosition)) {
        // 无嵌套
        // 取出重复次数组成的数组
        // var arr = "3[a]2[bc]".split("[").join("").split("]")
        var arr = s.split("[").join("").split("]")

        if (arr[arr.length - 1] === "") {
            arr = arr.slice(0, arr.length - 1)
        }

        var numArr = []
        for (var i = 0; i < arr.length; i++) {
            var resultNum = []
            var str = arr[i]
            for (var j = 0; j < str.length; j++) {
                if (str.length > 0 && judgeNumOrStr(str[j])) {
                    // 查到是数字就存储
                    resultNum.push(str[j])
                }
            }
            if (resultNum.length > 0) {
                numArr.push(parseInt(resultNum.join("")))
            }
        }

        // 将 arr 中字符重复
        // 首先从后往前找,把数字位找到
        for (var i = 0; i < arr.length; i++) {
            for (var j = arr[i].length - 1; j >= 0; j--) {
                if (judgeNumOrStr(arr[i][j])) {
                    arr[i] = arr[i].slice(0, j) + repeatStr(arr[i].slice(j + 1), numArr[i])
                }
            }
        }
        return (arr.join(""))
    } else {
        // 嵌套的情况
        // 判断是 嵌套 + 不嵌套 还是 纯嵌套

    }
    // log('result', result)
};

var test = function (x, y) {
    if (decodeString(x) === y) {
        log('-------------------------------------')
        log('pass')
        log('-------------------------------------')
    } else {
        log('-------------------------------------')
        log("error")
        log('your answer:', decodeString(x))
        log('right answer:', y)
        log('-------------------------------------')
    }
}

test("3[a]2[bc]", "aaabcbc")
// test("3[a2[c]]", "accaccacc")
test("2[abc]3[cd]ef", "abcabccdcdcdef")