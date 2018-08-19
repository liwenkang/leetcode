const log = console.log.bind(console)

// function plusOrSubtraction(operator, num1, num2) {
//     if (operator === "+") {
//         return num1 + num2
//     } else if (operator === "-") {
//         return num1 - num2
//     }
// }
//
// function judgeNum(str) {
//     return str >= "0" && str <= "9"
// }
//
// var calculateWithNoBrackets = function (s) {
//     // 在不考虑括号的情况下,从左往右解析
//     var nums = []
//     var operators = []
//     // 不考虑括号的情况
//     var i = 0
//     var j = 0
//     while (j < s.length) {
//         while (judgeNum(s[j])) {
//             j++
//         }
//         var num = parseInt(s.slice(i, j))
//         nums.push(num)
//         var operator = s[j]
//         if (operator !== undefined) {
//             operators.push(operator)
//         }
//         i = j + 1
//         j++
//     }
//     for (var i = 0; i < operators.length; i++) {
//         nums[i + 1] = plusOrSubtraction(operators[i], nums[i], nums[i + 1])
//     }
//     return nums[nums.length - 1]
// }
//
// var deleteBrackets = function (s) {
//     var left
//     var right
//     var flag = false
//     for (var i = 0; i < s.length; i++) {
//         if (flag === false && s[i] === "(") {
//             left = i
//         }
//         if (s[i] === ")") {
//             right = i
//             flag = true
//             break
//         }
//     }
//
//     var num = calculateWithNoBrackets(s.slice(left + 1, right))
//     s = s.slice(0, left) + num + s.slice(right + 1)
//     return s
// }
//
// var calculate = function (s) {
//     s = s.replace(/ /g, "")
//     var countLeft = 0
//     var countPlus = 0
//     for (var i = 0; i < s.length; i++) {
//         if (s[i] === "(") {
//             countLeft++
//             break
//         }
//     }
//
//     for (var i = 0; i < s.length; i++) {
//         if (s[i] === "+" || s[i] === "-") {
//             countPlus++
//             break
//         }
//     }
//
//     if (parseInt(s) === s - 0) {
//         return s
//     }
//
//     if (countPlus === 0) {
//         s = s.replace(/\(/g, "")
//         s = s.replace(/\)/g, "")
//         return parseInt(s)
//     } else if (countLeft === 0) {
//         return calculateWithNoBrackets(s)
//     } else if (countLeft > 0) {
//         s = deleteBrackets(s)
//         s = s.replace("--", "+")
//         s = s.replace("+-", "-")
//         s = s.replace("-+", "-")
//         s = s.replace("-+", "+")
//         return calculate(s)
//     }
// }

var calculate = function (s) {
    var result = 0 //
    var number = 0 // 它存的就是前 n 位数
    var sign = 1 // 存的符号位
    var stack = []

    for (var i = 0; i < s.length; i++) {
        if (s[i] >= "0" && s[i] <= "9") {
            number = 10 * number + parseInt(s[i])
        } else if (s[i] === "+") {
            result += sign * number
            sign = 1
            number = 0
        } else if (s[i] === "-") {
            result += sign * number
            sign = -1
            number = 0
        } else if (s[i] === "(") {
            stack.push(result)
            stack.push(sign)
            result = 0
            sign = 1
            number = 0
        } else if (s[i] === ")") {
            result += sign * number
            number = 0
            result *= stack.pop()
            result += stack.pop()
        }
    }
    if (number !== 0) {
        result += sign * number
    }
    return result
}

log(calculate("(1213123+1)"))
log(calculate("9+(6+8)"))
log(calculate("1 + 1"))
log(calculate(" 2-1 + 2 "))
log(calculate("(1+(4+5+2)-3)+(6+8)"))
log(calculate("(3)+1"))
log(calculate("2-(5-6)"))
log(calculate("(5-(1+(5)))"))
log(calculate("1-(2+3-(4+(5-(1-(2+4-(5+6))))))"))
