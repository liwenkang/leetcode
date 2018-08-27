const log = console.log.bind(console)

var exist = function (board, word) {
    // 首先找到他们的下标
    var result = []
    var s = word[0]
    for (var m = 0; m < board.length; m++) {
        for (var n = 0; n < board[m].length; n++) {
            if (board[m][n] === s) {
                result.push([m, n])
            }
        }
    }

    log("result", result)

    var helper = function (lastResult, board, word, count) {

        if (count === word.length - 1) {
            log(true)
            return true
        }
        var lastResultLength = lastResult.length

        for (var i = 0; i < lastResultLength; i++) {
            var s = lastResult.pop()
            var arr = []
            // 上下左右
            //  index 为 [0,0] 这样的1坐标
            var singleStr = word[count]

            if (board[index[0] - 1] && board[index[0] - 1][index[1]] === singleStr) {
                // 上面符合,则继续
                arr.push([index[0] - 1, index[1]])
            }
            if (board[index[0]] && board[index[0]][index[1] - 1] === singleStr) {
                // 左边符合,则继续
                arr.push([index[0], index[1] - 1])
            }
            if (board[index[0]] && board[index[0]][index[1] + 1] === singleStr) {
                // 右边符合,则继续
                arr.push([index[0], index[1] + 1])
            }
            if (board[index[0] + 1] && board[index[0] + 1][index[1]] === singleStr) {
                // 下边符合,则继续
                arr.push([index[0] + 1, index[1]])
            }
            log("arr", arr)
            log("lastResult", lastResult)
            if (lastResult.length === 0) {
                log(false)
                return false
            }
        }
        // helper(lastResult, board, word, count + 1)
    }
    helper(result, board, word, 1)
}

exist([
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
], "ABCCED")

// exist([
//     ['A', 'B', 'C', 'E'],
//     ['S', 'F', 'C', 'S'],
//     ['A', 'D', 'E', 'E']
// ], "SEE")
//
// exist([
//     ['A', 'B', 'C', 'E'],
//     ['S', 'F', 'C', 'S'],
//     ['A', 'D', 'E', 'E']
// ], "ABCB")

/**
 * board =
 [
 ['A','B','C','E'],
 ['S','F','C','S'],
 ['A','D','E','E']
 ]

 Given word = "ABCCED", return true.
 Given word = "SEE", return true.
 Given word = "ABCB", return false.
 */
