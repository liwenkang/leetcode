const log = console.log.bind(console)

var findRepeatedDnaSequences = function (s) {
    // 找到 十个长度相同的字符串 有重复的
    var result = []
    for (var i = 0; i < s.length && i + 10 <= s.length; i++) {
        result.push(s.slice(i, i + 10))
    }
    result.sort()
    var out = []
    for (var i = 0; i < result.length; i++) {
        var flag = false
        for (var j = i + 1; j < result.length; j++) {
            if (result[i] === result[j]) {
                flag = true
                result.splice(j, 1)
                j--
            } else {
                break
            }
        }
        if (flag) {
            out.push(result[i])
            result.splice(i, 1)
            i--
        }
    }
    return out
}

// findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")
findRepeatedDnaSequences("AAAAAAAAAAAA")

/*
* Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

Output: ["AAAAACCCCC", "CCCCCAAAAA"]
*/