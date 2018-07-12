const log = console.log.bind(console)
var dict = {
    "]": "[",
    ")": "(",
    "}": "{"
}
var isValid = function (s) {
    var arr = []
    for (var i = 0; i < s.length; i++) {
        if (s[i] === "[" || s[i] === "(" || s[i] === "{") {
            arr.push(s[i])
        } else {
            var temp = arr.pop()
            if (temp !== dict[s[i]]) {
                return false
            }
        }
    }
    return arr.length === 0
}

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    // 生成全部的
    // n个( n个)
    var result = []
    var addOne = function (x, y, history) {
        if (x > n || y > n) {
            return
        }
        if (x === n && y === n) {
            if (isValid(history)) {
                result.push(history)
            }
            return
        }

        addOne(x + 1, y, history + "(")
        addOne(x, y + 1, history + ")")
    }
    addOne(0, 0, "")
    return result
}

generateParenthesis(3)