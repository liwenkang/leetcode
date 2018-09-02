const log = console.log.bind(console)

/**
 效率不够
 Example 1:

 Input: "12"
 Output: 2
 Explanation: It could be decoded as "AB" (1 2) or "L" (12).
 Example 2:

 Input: "226"
 Output: 3
 Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

 * @param {string} s
 * @return {number}
 */

var valid = function (str) {
    return str[0] !== "0" && str >= 1 && str <= 26
}

var numDecodings = function (s) {
    // 全排列
    var length = s.length
    var result = []
    var helper = function (num, arr) {
        if (num === 0) {
            result.push(arr)
        }
        if (num === 1) {
            helper(num - 1, 1 + arr)
        }
        if (num >= 2) {
            helper(num - 1, 1 + arr)
            helper(num - 2, 2 + arr)
        }
    }
    helper(length, "")
    // 根据 result 选 1 或 2 个字符串
    var count = 0
    for (var i = 0; i < result.length; i++) {
        var flag = false
        var last = 0
        for (var j = 0; j < result[i].length; j++) {
            var num = parseInt(result[i][j])
            var end = last + num
            var str = s.slice(last, end)
            last = end
            if (!valid(str)) {
                flag = true
                break
            }
        }
        if (!flag) {
            count++
        }
    }
    return count
}

numDecodings("101")
numDecodings("226")