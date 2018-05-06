var log = console.log.bind(console)
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // 所有输入只包含小写字母 a-z 。
    // 求最长的公共前缀

    // 1. 首先找到字符串长度最短的字符串,以它为标准进行比较
    var arr = strs
    var smallestStr = arr[0]
    for (var i = 1; i < strs.length; i++) {
        if (strs[i].length < smallestStr.length) {
            smallestStr = strs[i]
        }
    }

    if (smallestStr === undefined || smallestStr === "") {
        return ""
    }

    // log(smallestStr)

    var flag = true
    for (var i = 0; i < strs.length; i++) {
        for (var j = 1; j <= smallestStr.length; j++) {
            // 从第一位开始比较
            if (smallestStr.slice(0, j) !== strs[i].slice(0, j)) {
                flag = false
                log("结果为", smallestStr.slice(0, j - 1))
                return smallestStr.slice(0, j - 1)
            } else {
                var num = j - 1
            }
        }
    }

    if (flag) {
        // log("结果为", smallestStr.slice(0, num + 1))
        var result = smallestStr.slice(0, num + 1)
        log("ok", result)
        return result
    }
};

longestCommonPrefix(["flower", "fl", "flight"])