const log = console.log.bind(console)

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    var length = matrix.length
    var result = []
    for (var i = 0; i < length; i++) {
        var arr = matrix[i]
        result.unshift(arr)
    }

    for (var i = 0; i < result.length; i++) {
        var arr = []
        for (var j = 0; j < result[i].length; j++) {
            arr.push(result[j][i])
        }
        matrix.push(arr)
    }
    matrix.splice(length)
}

log(rotate(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
))