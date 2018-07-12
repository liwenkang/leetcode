var setZeroes = function (matrix) {
    var result = []
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                result.push([i, j])
            }
        }
    }
    for (var i = 0; i < result.length; i++) {
        // 把横坐标为 1 的全置0
        for (var j = 0; j < matrix[0].length; j++) {
            matrix[result[i][0]][j] = 0
        }
        // 把纵坐标为 1 的全置0
        for (var k = 0; k < matrix.length; k++) {
            matrix[k][result[i][1]] = 0
        }
    }
};