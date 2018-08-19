const log = console.log.bind(console)

/**
 * @param s
 *
 Input: "3+2*2"
 Output: 7

 Input: " 3/2 "
 Output: 1

 Input: " 3+5 / 2 "
 Output: 5
 */

function op(operator, num1, num2) {
    if (operator === "+") {
        return num1 + num2
    } else if (operator === "-") {
        return num1 - num2
    } else if (operator === "*") {
        return num1 * num2
    } else if (operator === "/") {
        return Math.floor(num1 / num2)
    }
}

function judgeNum(str) {
    return str >= "0" && str <= "9"
}

var calculateWithNoBrackets = function (s) {
    // 在不考虑括号的情况下,从左往右解析
    var nums = []
    var operators = []
    // 不考虑括号的情况
    var i = 0
    var j = 0
    while (j < s.length) {
        while (judgeNum(s[j])) {
            j++
        }
        var num = parseInt(s.slice(i, j))
        nums.push(num)
        var operator = s[j]
        if (operator !== undefined) {
            operators.push(operator)
        }
        i = j + 1
        j++
    }

    for (var i = 0; i < operators.length; i++) {
        if (operators[i] === "*") {
            nums[i] = op(operators[i], nums[i], nums[i + 1])
            operators.splice(i, 1)
            nums.splice(i + 1, 1)
            i--
        } else if (operators[i] === "/") {
            nums[i] = op(operators[i], nums[i], nums[i + 1])
            operators.splice(i, 1)
            nums.splice(i + 1, 1)
            i--
        }
    }

    for (var i = 0; i < operators.length; i++) {
        nums[i + 1] = op(operators[i], nums[i], nums[i + 1])
    }
    return nums[nums.length - 1]
}

var calculate = function (s) {
    // 先把空格删掉
    s = s.replace(/ /g, "")
    // 先计算 * /
    return calculateWithNoBrackets(s)
}

log(calculate("3+2*2"))
log(calculate("3/2"))
log(calculate("3+5 / 2"))
