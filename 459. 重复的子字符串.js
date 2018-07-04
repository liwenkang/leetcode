const log = console.log.bind(console)

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    for (var i = 1; i < s.length; i++) {
        var str = s.slice(0, i)
        var num = s.length % str.length
        if (num === 0) {
            // 可以整除
            var emptyStr = ""
            var repeatNum = s.length / str.length
            for (var j = 0; j < repeatNum; j++) {
                emptyStr += str
            }
            if (emptyStr === s) {
                log(true)
                return true
            }
        }
    }
    // log(false)
    return false
}

repeatedSubstringPattern("abab")
repeatedSubstringPattern("aba")
repeatedSubstringPattern("abcabcabcabc")