const log = console.log.bind(console)

/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function (S) {
    var result = []
    var arr = []
    for (var i = 1; i < S.length; i++) {
        if (S[i] !== S[i - 1]) {
            result.push([i - 1, i])
        }
    }
    // log(result)
    result.unshift([0,0])
    result.push([S.length - 1])
    for (var i = 1; i < result.length; i++) {
        if (result[i][0] - result[i - 1][1] >= 2) {
            arr.push([result[i - 1][1], result[i][0]])
        }
    }
    return arr
}

largeGroupPositions("aaa")
largeGroupPositions("abcdddeeeeaabbbcd")