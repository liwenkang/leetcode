const log = console.log.bind(console)

/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var getAverage = function (M, i, j) {
    var sum = 0
    var count = 0
    for (var m = i - 1; m <= i + 1; m++) {
        for (var n = j - 1; n <= j + 1; n++) {
            if (M[m] !== undefined && M[m][n] !== undefined) {
                sum += M[m][n]
                count++
            }
        }
    }
    return Math.floor(sum / count)
}

var imageSmoother = function (M) {
    var newM = []
    for (var i = 0; i < M.length; i++) {
        newM[i] = []
    }
    for (var i = 0; i < M.length; i++) {
        for (var j = 0; j < M[i].length; j++) {
            newM[i][j] = getAverage(M, i, j)
        }
    }
    return newM
}

imageSmoother([[2, 3, 4], [5, 6, 7], [8, 9, 10], [11, 12, 13], [14, 15, 16]])

// Output:
//     [[4,4,5],[6,6,6],[8,9,9],[11,11,12],[12,12,12]]
// Expected:
//     [[4,4,5],[5,6,6],[8,9,9],[11,12,12],[13,13,14]]