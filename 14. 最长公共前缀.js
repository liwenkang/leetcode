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

    var resultStr = ""

    var flag = true
    for (var i = 0; i < smallestStr.length; i++) {
        for (var j = 0; j < strs.length; j++) {
            if (strs[j][i] !== smallestStr[i]) {
                flag = false
            }
        }
        if(flag) {
            resultStr += smallestStr[i]
        }
    }

    return resultStr
};

longestCommonPrefix(["abca","aba","aaab"])