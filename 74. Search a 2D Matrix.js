var searchMatrix = function (matrix, target) {
    var m = matrix.length
    if (m === 0) {
        return false
    }
    var n = matrix[0].length
    if (n === 0) {
        return false
    }

    if (target < matrix[0][0]) {
        return false
    }
    if (target > matrix[m - 1][n - 1]) {
        return false
    }

    var result = []
    var flag = false

    if (target <= matrix[0][n - 1]) {
        result = matrix[0]
        flag = true
    }

    if (flag === false) {
        if (matrix[m - 2] !== undefined) {
            if (target > matrix[m - 2][n - 1]) {
                result = matrix[m - 1]
                flag = true
            }
        }
    }

    if (flag === false) {
        for (var i = 1; i < m; i++) {
            if (target > matrix[i - 1][n - 1] && target <= matrix[i][n - 1]) {
                result = matrix[i]
                break
            }
        }
    }
    if (result.length === 0) {
        return false
    }

    for (var i = 0; i < result.length; i++) {
        if (result[i] === target) {
            return true
        } else if (result[i] > target) {
            return false
        }
    }
};