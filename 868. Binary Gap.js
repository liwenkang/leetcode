var binaryGap = function (N) {
    var binaryNum = N.toString(2)
    var result = []
    for (var i = 0; i < binaryNum.length; i++) {
        var arr = []
        while (binaryNum[i] === "1") {
            arr.push(i)
            i++
        }
        if (arr.length > 0) {
            result.push(arr)
        }
    }
    if (result.length === 1) {
        if (result[0].length === 1) {
            return 0
        } else {
            return 1
        }
    }

    var max = 0
    for (var i = 1; i < result.length; i++) {
        // 1. 两者之间的差值
        var num1 = result[i][0] - result[i - 1][result[i - 1].length - 1]
        max = Math.max(num1, max)
    }
    return max
};