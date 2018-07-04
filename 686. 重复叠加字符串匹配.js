const log = console.log.bind(console)

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function (A, B) {
    // A 重复 n 次之后, B 是 A 的子集
    var result = []
    for (var i = 0; i < A.length; i++) {
        if (A[i] === B[0]) {
            result.push(i)
        }
    }


    for (var j = 0; j < result.length; j++) {
        var str = ""
        for (var i = 0; ; i++) {
            var start = result[j]
            if (str.slice(start, start + B.length) === B) {
                log("i", i)
                return i
            } else if (str.length > 3 * B.length) {
                log("找不到", -1)
                break
            } else {
                str += A
            }
        }
    }
    return -1
}

repeatedStringMatch("abababaaba", "aabaaba")
repeatedStringMatch("abcd", "cdabcdab")