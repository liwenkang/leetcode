const log = console.log.bind(console)

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    var result = ""
    var flag = false
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            // 跳过
            continue
            flag = true
        }
        if (str[i] === "+") {
            //
            result = "+" + result
            for (var j = i + 1; j < str.length; j++) {
                var num = parseInt(str[j])
                if (num >= 0 && num <= 9) {
                    result = result + str[j]
                } else {
                    break
                }
            }
            flag = true
            break
        }
        if (str[i] === "-") {
            // 向后截取数字
            result = "-" + result
            for (var j = i + 1; j < str.length; j++) {
                var num = parseInt(str[j])
                if (num >= 0 && num <= 9) {
                    result = result + str[j]
                } else {
                    break
                }
            }
            flag = true
            break
        }
        var num = parseInt(str[i])
        if (num >= 0 && num <= 9) {
            result = str[i]
            for (var j = 1; j < str.length - i; j++) {
                num = parseInt(str[i + j])
                if (num >= 0 && num <= 9) {
                    result = result + str[i + j]
                } else {
                    break
                }
            }
            flag = true
            break
        }

        if (flag === false) {
            log("flag 的问题")
            return 0
        }
    }

    if (parseInt(result) < -2147483648) {
        return -2147483648
    }
    if (parseInt(result) > 2147483647) {
        return 2147483647
    }
    // log(result)
    if (result.length === 1) {
        log("result,就一位",result)
        if (result[0] === "+" || result[0] === "-") {
            log("正负号 的问题")
            return 0
        } else {
            return parseInt(result)
        }
    }
    if(parseInt(result)) {
        log("最后的锅")
        return parseInt(result)
    }else {
        return 0
    }
}

// log(myAtoi("42"))
log(myAtoi("-"))
// // log(myAtoi("4193 with words"))
// // log(myAtoi("-91283472332"))
// // log(myAtoi("+a42"))