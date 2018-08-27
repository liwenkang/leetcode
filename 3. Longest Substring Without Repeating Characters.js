const log = console.log.bind(console)

var judgeNoRepeat = function (str) {
    for (var i = 0; i < str.length; i++) {
        if (str.indexOf(str[i], i + 1) >= 0) {
            return false
        }
    }
    return true
}

var lengthOfLongestSubstring = function (s) {
    // 找出最长的无重复子串
    var max = 0
    for (var i = 0; i < s.length; i++) {
        for (var j = i + 1; j <= s.length; j++) {
            var str = s.slice(i, j)
            if (judgeNoRepeat(str)) {
                if (str.length > max) {
                    max = str.length
                }
            } else {
                break
            }
        }
    }
    return max
}

log(lengthOfLongestSubstring("abcabcbb"))
log(lengthOfLongestSubstring("bbbbb"))
log(lengthOfLongestSubstring("pwwkew"))
log(lengthOfLongestSubstring("au"))