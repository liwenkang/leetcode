const log = console.log.bind(console)

var buddyStrings = function (A, B) {
    if (A.length !== B.length) {
        return false
    }
    if (A === B) {
        // 两者完全相同
        // 如果其相同的字符超过两个,那么
        for (var i = 0; i < A.length - 1; i++) {
            if (A.indexOf(A[i], i + 1) > -1) {
                return true
            }
        }
        return false
    }
    var result = []
    for (var i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            result.push([A[i], B[i]])
        }
    }
    if (result.length === 2 && result[0][0] === result[1][1] && result[0][1] === result[1][0]) {
        return true
    } else if (result.length > 2) {
        return false
    } else {
        return false
    }
}

log(buddyStrings("aa", "aa")) // true
log(buddyStrings("ab", "ab")) // false