nst log = console.log.bind(console)

/**
 * @param {character[][]} board
 * @return {boolean}
 */

var judgeRepeate = function (arr) {
    var newArr = arr.slice(0)
    for (var i = 0; i < 9; i++) {
        if (newArr[i] === ".") {
            newArr.splice(i, 1)
            i--
        }
    }
    if (Array.from(new Set(newArr)).length === newArr.length) {
        return true
    } else {
        return false
    }
}

var isValidSudoku = function (board) {
    // 验证行
    for (var i = 0; i < 9; i++) {
        if (!judgeRepeate(board[i])) {
            return false
        }
    }
    //
    // // 验证列
    for (var i = 0; i < 9; i++) {
        var arr = []
        for (var j = 0; j < 9; j++) {
            arr.push(board[j][i])
        }
        if (!judgeRepeate(arr)) {
            return false
        }
    }

    // 验证九格
    var nineLeftTop = []
    for (var i = 0; i < 3; i++) {
        var arr = []
        for (var j = 0; j < 3; j++) {
            arr.push(board[i][j])
        }
        nineLeftTop = nineLeftTop.concat(arr)
    }
    if (!judgeRepeate(nineLeftTop)) {
        return false
    }

    // 验证九格
    var nineLeftMid = []
    for (var i = 3; i < 6; i++) {
        var arr = []
        for (var j = 0; j < 3; j++) {
            arr.push(board[i][j])
        }
        nineLeftMid = nineLeftMid.concat(arr)
    }
    if (!judgeRepeate(nineLeftMid)) {
        return false
    }

    // 验证九格
    var nineLeftBottom = []
    for (var i = 6; i < 9; i++) {
        var arr = []
        for (var j = 0; j < 3; j++) {
            arr.push(board[i][j])
        }
        nineLeftBottom = nineLeftBottom.concat(arr)
    }
    if (!judgeRepeate(nineLeftBottom)) {
        return false
    }


    // 验证九格
    var nineMidTop = []
    for (var i = 0; i < 3; i++) {
        var arr = []
        for (var j = 3; j < 6; j++) {
            arr.push(board[i][j])
        }
        nineMidTop = nineMidTop.concat(arr)
    }
    if (!judgeRepeate(nineMidTop)) {
        return false
    }


    // 验证九格
    var nineMidMid = []
    for (var i = 3; i < 6; i++) {
        var arr = []
        for (var j = 3; j < 6; j++) {
            arr.push(board[i][j])
        }
        nineMidMid = nineMidMid.concat(arr)
    }
    if (!judgeRepeate(nineMidMid)) {
        return false
    }

    // 验证九格
    var nineMidBottom = []
    for (var i = 6; i < 9; i++) {
        var arr = []
        for (var j = 3; j < 6; j++) {
            arr.push(board[i][j])
        }
        nineMidBottom = nineMidBottom.concat(arr)
    }
    if (!judgeRepeate(nineMidBottom)) {
        return false
    }

    // 验证九格
    var nineRightTop = []
    for (var i = 0; i < 3; i++) {
        var arr = []
        for (var j = 6; j < 9; j++) {
            arr.push(board[i][j])
        }
        nineRightTop = nineRightTop.concat(arr)
    }
    if (!judgeRepeate(nineRightTop)) {
        return false
    }

    // 验证九格
    var nineRightMid = []
    for (var i = 3; i < 6; i++) {
        var arr = []
        for (var j = 6; j < 9; j++) {
            arr.push(board[i][j])
        }
        nineRightMid = nineRightMid.concat(arr)
    }
    if (!judgeRepeate(nineRightMid)) {
        return false
    }


    // 验证九格
    var nineRightBottom = []
    for (var i = 6; i < 9; i++) {
        var arr = []
        for (var j = 6; j < 9; j++) {
            arr.push(board[i][j])
        }
        nineRightBottom = nineRightBottom.concat(arr)
    }
    if (!judgeRepeate(nineRightBottom)) {
        return false
    }
    // log(true)
    return true
}

// isValidSudoku([
//     ["5","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
// ])

isValidSudoku([
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
])