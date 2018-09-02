const log = console.log.bind(console)

var NumMatrix = function (matrix) {
    this.matrix = matrix
}

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    var sum = 0
    for (var i = row1; i <= row2; i++) {
        for(var j = col1; j <= col2; j++) {
            sum += this.matrix[i][j]
        }
    }
    return sum
}