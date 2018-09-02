const log = console.log.bind(console)

/*
* Any live cell with fewer than two live neighbors dies, as if caused by under-population. <2 个活的死掉
Any live cell with two or three live neighbors lives on to the next generation.   ===2,3 下一代
Any live cell with more than three live neighbors dies, as if by over-population..  >3   死掉
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.  死掉的有3个活的邻居,复活
*/

var dealZero = function (board, i, j) {
    var countOne = 0
    if (board[i - 1] && board[i - 1][j - 1] === 1) {
        countOne++
    }
    if (board[i - 1] && board[i - 1][j] === 1) {
        countOne++
    }
    if (board[i - 1] && board[i - 1][j + 1] === 1) {
        countOne++
    }
    if (board[i] && board[i][j - 1] === 1) {
        countOne++
    }
    if (board[i] && board[i][j + 1] === 1) {
        countOne++
    }
    if (board[i + 1] && board[i + 1][j - 1] === 1) {
        countOne++
    }
    if (board[i + 1] && board[i + 1][j] === 1) {
        countOne++
    }
    if (board[i + 1] && board[i + 1][j + 1] === 1) {
        countOne++
    }
    if (countOne === 3) {
        return 1
    } else {
        return 0
    }
}

var dealOne = function (board, i, j) {
    var countOne = 0
    if (board[i - 1] && board[i - 1][j - 1] === 1) {
        countOne++
    }
    if (board[i - 1] && board[i - 1][j] === 1) {
        countOne++
    }
    if (board[i - 1] && board[i - 1][j + 1] === 1) {
        countOne++
    }
    if (board[i] && board[i][j - 1] === 1) {
        countOne++
    }
    if (board[i] && board[i][j + 1] === 1) {
        countOne++
    }
    if (board[i + 1] && board[i + 1][j - 1] === 1) {
        countOne++
    }
    if (board[i + 1] && board[i + 1][j] === 1) {
        countOne++
    }
    if (board[i + 1] && board[i + 1][j + 1] === 1) {
        countOne++
    }
    if (countOne < 2 || countOne > 3) {
        return 0
    } else if (countOne === 2 || countOne === 3) {
        return 1
    }
}

var gameOfLife = function (board) {
    var result = []
    // 在 result 上修改, board 不变
    for (var i = 0; i < board.length; i++) {
        result[i] = []
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j] === 0) {
                result[i][j] = dealZero(board, i, j)
            } else if (board[i][j] === 1) {
                result[i][j] = dealOne(board, i, j)
            }
        }
    }
    for(var i = 0; i < board.length; i++) {
        for(var j = 0; j < board[i].length; j++) {
            board[i][j] = result[i][j]
        }
    }
}

gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
])
