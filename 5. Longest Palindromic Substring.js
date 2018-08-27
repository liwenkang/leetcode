const log = console.log.bind(console)

var judgeNoRepeat = function (str) {
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}

var longestPalindrome = function (s) {
    // 找出最长的无重复子串
    var result
    var max = 0
    for (var i = 0; i < s.length; i++) {
        for (var j = s.length; j >= i + 1; j--) {
            var str = s.slice(i, j)
            if (judgeNoRepeat(str)) {
                if (str.length > max) {
                    max = str.length
                    result = str
                }
                break
            }
        }
    }
    return result
}

log(longestPalindrome("babad"))