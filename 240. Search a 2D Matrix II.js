const log = console.log.bind(console)

var searchMatrix = function (matrix, target) {
    // 先横着找,找到中间值
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) {
                return true
            } else if (matrix[i][j] > target) {
                break
            }
        }
    }
    return false
};