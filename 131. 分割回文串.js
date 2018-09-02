const log = console.log.bind(console)

var judgePalindrome = function (str) {
    if (str.length === 0) {
        return false
    }
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}

var partition = function (s) {
    var out = []
    var helper = function (s, result) {
        if (s.length === 0) {
            out.push(result)
            return
        }
        for (var j = 1; j <= s.length; j++) {
            var str = s.slice(0, j)
            if (judgePalindrome(str)) {
                helper(s.slice(j), result.concat(str))
            }
        }
    }
    helper(s, [])
    return out
}

// partition("ab")
partition("aab")

// Input: "aab"
// Output:
//     [
//         ["aa","b"],
//         ["a","a","b"]
//     ]