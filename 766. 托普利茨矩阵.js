const log = console.log.bind(console)
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    for (var i = 0; i < matrix.length; i++) {
        var flag = true
        if (flag) {
            for (var j = 0; j < matrix[0].length; j++) {
                if (matrix[i + 1] === undefined) {
                    flag = false
                    break
                }
                if (matrix[i + 1][j + 1] === undefined) {
                    flag = false
                    break
                }
                if (matrix[i][j] !== matrix[i + 1][j + 1]) {
                    return false
                }
            }
        }
    }
    return true
}

isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2]
])

isToeplitzMatrix([
    [1,2],
    [2,2]
])