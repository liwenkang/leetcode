var log = console.log.bind(console)

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 * 输入：
 * s = "abcd"
 * t = "aabcd"
 *
 * 输出：
 * e
 *
 * 解释：
 * 'e' 是那个被添加的字母。
 */
var findTheDifference = function (s, t) {
    s = s.split("")
    t = t.split("")
    s = s.sort(function (a, b) {
        return a.localeCompare(b)
    })
    t = t.sort(function (a, b) {
        return a.localeCompare(b)
    })
    for (var i = 0; i < t.length; i++) {
        if (s[i] !== t[i]) {
            return t[i]
        }
    }
}

findTheDifference("a", "aa")