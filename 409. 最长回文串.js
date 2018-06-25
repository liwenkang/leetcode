var log = console.log.bind(console)

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    var length = 0
    /* 有两个相同的字符串就删掉 */
    for (var i = 0; i < s.length; i++) {
        for (var j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                s = s.slice(0, i).concat(s.slice(i + 1, j)).concat(s.slice(j + 1))
                length += 2
                i = -1
                break
            }
        }
    }
    if (s.length >= 1) {
        return length + 1
    } else {
        return length
    }
}

longestPalindrome("abccccdd")