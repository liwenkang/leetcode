var log = console.log.bind(console)

/**
 * @param {string} s
 * @return {boolean}
 * "amanaplanacanalpanama"
 *
 * */

var retainEffective = function (str) {
    var s = str
    for (var i = 0; i < s.length; i++) {
        if (s[i].match(/[0-9a-z]/g) === null) {
            // 删掉
            s = s.slice(0, i) + s.slice(i + 1)
            i--
        }
    }
    return s
}

var isPalindrome = function (s) {
    if (s === "") {
        return true
    }
    s = s.toLowerCase()
    s = retainEffective(s)
    // log(s)
    var flag = true
    for (var i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            flag = false
            break
        }
    }
    if (flag) {
        // log("true")
        return true
    } else {
        // log("false")
        return false
    }
};
isPalindrome("A man, a plan, a canal: Panama")

