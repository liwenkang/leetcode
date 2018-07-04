const log = console.log.bind(console)

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 * 输入: S = "l  o  v  e  l  e  e  t  c  o  d  e", C = 'e'
 输出:       [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 */
var shortestToChar = function (S, C) {
    var result = []
    S = S.split("")
    for (var i = 0; i < S.length; i++) {
        if (S[i] === C) {
            S[i] = 0
            result.push(i)
        }
    }

    for (var i = 0; i < S.length; i++) {
        var min = Infinity
        if (S[i] !== C) {
            for (var j = 0; j < result.length; j++) {
                if (Math.abs(result[j] - i) < min) {
                    min = Math.abs(result[j] - i)
                }
            }
            S[i] = min
        }
    }
    // log(S)
    return S
}

shortestToChar("loveleetcode","e")