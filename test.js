var log = console.log.bind(console)
var judgeNumOrStr = function (singleStr) {
    if (singleStr >= 0) {
        // log("是数字")
        return true
    } else {
        // log("是字符,或者符号")
        return false
    }
}
var repeatStr = function (str, num) {
    var result = ""
    for (var i = 0; i < num; i++) {
        result += str
    }
    return result
}
var judgeNesting = function (leftArr, rightArr, s) {
    // 默认无嵌套
    var leftBracketsPosition = leftArr

    var rightBracketsPosition = rightArr

    var bracketsLength = leftBracketsPosition.length

    // 判断,如果是有嵌套的情况
    var nestingArr = ""
    var notNestingArr = ""
    var amazingArr = []
    for (var i = 0; i < bracketsLength - 1; i++) {
        if (leftBracketsPosition[i + 1] < rightBracketsPosition[i]) {
        } else {
            amazingArr.push(rightBracketsPosition[i])
        }
    }
    amazingArr.push(rightBracketsPosition[rightBracketsPosition.length - 1])
    var segmentNum = segmentArrNum(amazingArr)
    var segmentStr = segmentArrStr(segmentNum, s)
    return segmentStr
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

var resolveStr = function (str) {
    var arr = str.split("[").join("").split("]")

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
    log(arr.join(""))
    return (arr.join(""))
}


var resolveArr = function (arr) {
    // [ '5[b]', '5[b]', '3[a2[c]]', '3[a2[c]]' ]
    // 此时一定是一个无嵌套的形式, 所以一定可以解析一次
    for(var i = 0; i < arr.length; i++) {
        arr[i] = resolveStr(arr[i])
    }
    log("初次解析", arr)
    return arr
}

resolveArr([ '5[b]', '5[b]', '3[a2[c]]', '3[a2[c]]' ])


// resolveStr('5[b]')

var decodeString = function (s) {
    var leftBracketsPosition = getLeftBracketsPosition(s)
    var rightBracketsPosition = getRightBracketsPosition(s)

    // [ '5[b]', '5[b]', '3[a2[c]]', '3[a2[c]]' ]
    var arr = judgeNesting(leftBracketsPosition, rightBracketsPosition, s)
    log(arr)
}

var segmentArrNum = function (arr) {
    // [ 3, 7, 15, 23 ]
    // [ 0, 4,  8, 16 ]
    // 输出 [0,3],[4,7],[8,15],[16,23]
    var resultArr = [0]
    var result = []
    for (var i = 0; i < arr.length - 1; i++) {
        resultArr.push(arr[i] + 1)
    }
    for (var i = 0; i < arr.length; i++) {
        result.push([resultArr[i], arr[i]])
    }
    return result
    // log(result)
}

var segmentArrStr = function (arr, str) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = str.slice(arr[i][0], arr[i][1] + 1)
    }
    return arr
}

// segmentArrStr()

// segmentArr([3, 7, 15, 23])

// decodeString("5[b]5[b]3[a2[c]]3[a2[c]4[a3[b]]]5[a]")
// 5[b]5[b]3[a2[c]]3[a2[c]]
