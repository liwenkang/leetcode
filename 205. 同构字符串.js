const log = console.log.bind(console)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 字符串去重
const stringDeduplication = function (str) {
    var noRepeate = Array.from(new Set(str))
    // log(noRepeate)
    return noRepeate
}

var isIsomorphic = function (s, t) {
    // 然后替换 s 中的字符串, 看看是否和 t 完全相同
    var noRepeateS = stringDeduplication(s)
    var noRepeateT = stringDeduplication(t)
    var obj = {}
    for (var i = 0; i < noRepeateS.length; i++) {
        obj[noRepeateS[i]] = noRepeateT[i]
    }
    var arr = []
    for (var j = 0; j < s.length; j++) {
        arr[j] = obj[s[j]]
    }
    return arr.join("") === t
}

isIsomorphic(
    "aba",
    "bab")