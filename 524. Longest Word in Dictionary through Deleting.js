const log = console.log.bind(console)

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 * 想打人,为啥
 * 输入
 * "bab"
 * ["ba", "ab", "a", "b"]
 * 输出????
 * "ab"
 */

var sortStr = function (str) {
    var arr = str.split("")
    arr.sort()
    return arr
}

var juedgeStr = function (base, str) {
    base = sortStr(base)
    str = sortStr(str)

    // 判断 str 通过删减能否成为 base
    for (var i = 0; i < base.length; i++) {
        if (str[i] !== base[i]) {
            str.splice(i, 1)
            if (str.length < base.length) {
                return false
            }
            i--
        }
    }
    return true
}

var sortStrArr = function (arr) {
    // 将数组按照,字符串的长度排序
    var newArr = arr.slice()
    newArr.sort(function (a, b) {
        return b.length - a.length
    })
    log(newArr)
    return newArr
}

var findLongestWord = function (s, d) {
    // 判断一个字符串能否从另一个字符串删减而来
    d = sortStrArr(d)
    for (var i = 0; i < d.length; i++) {
        if (juedgeStr(d[i], s)) {
            log(d[i])
            return d[i]
        }
    }
    return ""
}
//
// findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"])
// findLongestWord("abpcplea", ["a", "b", "c"])
findLongestWord("bab", ["ba", "ab", "a", "b"])