var log = console.log.bind(console)
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    if (s.length === 1) {
        return 0
    }
    for (var i = 0; i < s.length; i++) {
        var flag = true
        /* 默认全部不重复 */
        for (var j = 0; j < s.length; j++) {
            if (s[i] === s[j] && i !== j) {
                /* 有重复 */
                flag = false
                break
            }
        }
        if (flag) {
            return i
        }
    }
    return -1
}

firstUniqChar("lleetcode")

var slice = function (ary, start, end) {
    var result = []
    for (var i = start; i < end; i++) {
        result.push(ary[i])
    }
    return result
}

var fill = function (ary, val) {
    for (var i = 0; i < ary.length; i++) {
        ary[i] = val
    }
    return ary
}