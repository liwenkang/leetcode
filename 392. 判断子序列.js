/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * 示例 1:
 * s = "abc", t = "ahbgdc"
 * 返回 true.
 *
 * 示例 2:
 * s = "axc", t = "ahbgdc"
 */

var isSubsequence = function (s, t) {
    // s 是子集, t 是父集
    var newT = t
    for (var i = 0; i < s.length; i++) {
        if (newT.indexOf(s[i]) !== -1) {
            // 说明找到了
            // 那么要如果添加到数组中,就要把之前的截取掉.
            newT = newT.slice(newT.indexOf(s[i]) + 1)
        } else {
            // console.log("失败")
            return false
        }
    }
    // console.log("ok")
    return true
}

isSubsequence('abc', 'acbac')