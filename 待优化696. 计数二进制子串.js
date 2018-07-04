// 性能问题
const log = console.log.bind(console)

var judgeStr = function (str) {
    var midNum = str.length / 2
    var strStart = str.slice(0, midNum)
    var strEnd = str.slice(midNum)
    if (strStart[0] !== strEnd[0]) {
        if (Array.from(new Set(strStart)).length === 1 &&
            Array.from(new Set(strEnd)).length === 1) {
            return true
        }
    }
    return false
}

var countBinarySubstrings = function (s) {
    var count = 0
    for (var i = 0; i < s.length; i++) {
        var length = s.length - i
        for (var j = 2; j <= length; j += 2) {
            var str = s.slice(i, i + j)
            if (judgeStr(str)) {
                // log(str)
                count++
            }
        }
    }
    return count
};