const log = console.log.bind(console)

var generateOne = function (digit) {
    // digit = 0 => 1
    // digit = 1 => 10
    var num = "1"
    for (var i = 0; i < digit; i++) {
        num += "0"
    }
    return parseInt(num)
}

var generateNine = function (digit) {
    var num = "9"
    for (var i = 0; i < digit; i++) {
        num += "0"
    }
    return parseInt(num)
}

var findNthDigit = function (n) {
    if (n < 10) {
        return n
    }
    // 输入的是位数,那么通过位数,首先定位到是哪一个列中的
    var arr = []
    var sum = 0
    var index = 0
    for (var i = 1; ; i++) {
        sum += i * generateNine(i - 1)
        arr.push(sum)
        index++
        if (arr[i - 1] >= n) {
            break
        }
    }

    var str = []
    var i = generateOne(index - 1)


    var deleteNum = Math.floor((n - arr[arr.length - 2]) / index)
    var nowNum = n - arr[arr.length - 2] - deleteNum * index
    var s = deleteNum + i + ""

    if (nowNum === 0) {
        var string = parseInt(s) - 1 + ""
        return parseInt(string[string.length - 1])
    } else {
        return parseInt(s[nowNum - 1])
    }
};