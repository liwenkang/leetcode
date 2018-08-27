const log = console.log.bind(console)

var threeThree = function (array, startX, endX, startY, enY) {
    var result = []
    for (var i = startX; i < endX; i++) {
        for (var j = startY; j < enY; j++) {
            result.push(array[i][j])
        }
    }
    result = result.filter(value => {
        return value !== "."
    })
    if (new Set(result).size !== result.length) {
        return false
    }
}

var isValidSudoku = function (board) {
    for (var i = 0; i < 9; i++) {
        // 查找行中是否有重复数字
        var arr1 = board[i].filter(value => {
            return value !== "."
        })
        if (new Set(arr1).size !== arr1.length) {
            return false
        }
        // 查找列中是否有重复数字
        var result = []
        for (var j = 0; j < 9; j++) {
            result.push(board[j][i])
        }
        var arr2 = result.filter(value => {
            return value !== "."
        })
        if (new Set(arr2).size !== arr2.length) {
            return false
        }
    }

    // 查找 3 * 3 的区域
    if (threeThree(board, 0, 3, 0, 3) === false) {
        return false
    }
    if (threeThree(board, 3, 6, 0, 3) === false) {
        return false
    }
    if (threeThree(board, 6, 9, 0, 3) === false) {
        return false
    }
    if (threeThree(board, 0, 3, 3, 6) === false) {
        return false
    }
    if (threeThree(board, 3, 6, 3, 6) === false) {
        return false
    }
    if (threeThree(board, 6, 9, 3, 6) === false) {
        return false
    }
    if (threeThree(board, 0, 3, 6, 9) === false) {
        return false
    }
    if (threeThree(board, 3, 6, 6, 9) === false) {
        return false
    }
    if (threeThree(board, 6, 9, 6, 9) === false) {
        return false
    }

    return true
}

log(isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]))

log(isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]))
