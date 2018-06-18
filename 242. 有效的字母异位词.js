var log = console.log.bind(console)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    s = s.split("").sort().join("")
    t = t.split("").sort().join("")
    if (s === t) {
        return true
    } else {
        return false
    }
}

isAnagram("anagram", "nagaram")