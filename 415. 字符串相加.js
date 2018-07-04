const log = console.log.bind(console)

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addZero = function (str, count) {
    for (var j = 0; j < count; j++) {
        str += "0"
    }
    return str
}

let addOne = function (str) {
    if (str === "") {
        // log("1")
        return "1"
    }
    var count = 0
    for (var i = 0; i < str.length; i++) {
        // 第一次循环
        // 默认不会继续进位了
        var num = parseInt(str[str.length - 1 - i])
        if (num < 9) {
            // 不会进位了
            str = str.slice(0, str.length - 1 - i) + (num + 1)
            str = addZero(str, count)
            // log("str", str)
            return str
        } else {
            // 会进位
            count++
        }

        if (count === str.length) {
            // log(addZero("1", count))
            return addZero("1", count)
        }
    }
}

addOne("")

let getSum = function (a, b) {
    // 两个字符串位数相同  相加
    var result = ""
    var flag = false
    // 默认不进位
    for (var i = 0; i < a.length; i++) {
        // 倒着加
        var x = parseInt(a[a.length - 1 - i])
        var y = parseInt(b[b.length - 1 - i])
        if (flag) {
            // 如果进位
            if (x + y + 1 >= 10) {
                result = (x + y + 1 - 10) + result
                flag = true
            } else {
                flag = false
                result = (x + y + 1) + result
            }
        } else {
            // 不进位
            if (x + y >= 10) {
                result = (x + y - 10) + result
                flag = true
            } else {
                result = (x + y) + result
                flag = false
            }
        }
    }
    if (flag) {
        // log([result, flag])
        return [result, flag]
    } else {
        // log([result, flag])
        return [result, flag]
    }
}


var addStrings = function (num1, num2) {
    var diffStr = ""
    if (num1.length < num2.length) {
        diffStr = num2.slice(0, num2.length - num1.length)
        num2 = num2.slice(num2.length - num1.length)
    } else if (num1.length > num2.length) {
        diffStr = num1.slice(0, num1.length - num2.length)
        num1 = num1.slice(num1.length - num2.length)
    } else {
        diffStr = ""
    }
    var sumArr = getSum(num1, num2)
    if (sumArr[1]) {
        // log("结果是", addOne(diffStr) + getSum(num1, num2)[0])
        return addOne(diffStr) + getSum(num1, num2)[0]
    } else {
        // 没进位
        // log("没进位")
        // log(diffStr + getSum(num1, num2)[0])
        return diffStr + getSum(num1, num2)[0]
    }
}

addStrings("98", "9")