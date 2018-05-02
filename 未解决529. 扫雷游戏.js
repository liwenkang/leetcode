/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 * 进展不顺利
 *
 * 涉及到的知识点:
 * 广度优先搜索,深度优先搜索
 *
 * 已实现:
 * 1. 当第一次就踩到雷时,变成" X ", 结束游戏
 * 未实现:
 * 2. 当第一步没有踩到雷,且附近有雷时,变成数字
 * 3. 当第一步没有踩到雷,且附近没有雷时,变成 "B"
 */

var updateBoard = function (board, click) {
    // 规则
    // 1. 如果一个地雷（'M'）被挖出，游戏就结束了- 把它改为 'X'。
    // 第一个是行,第二个是列,均从 0 开始计数
    // console.log(board[1][2])
    // 首先,我得知道哪些地方有地雷,并把它们的位置放入一个数组(minePosition)中
    var minePosition = getMinePosition(board)

    // 2. 判断是否第一次就点中了雷
    if (judgeInclude(minePosition, click)) {
        // 将 click 位置的雷,由"M",变成"X"
        board[click[0]][click[1]] = "X"
        console.log("第一次就击中", board) // test log
        return board
    }

    // 3. 如果第一次没点中雷
    // 而且 click 位置的上下左右都没有雷,那么就把所有和雷接触不到的的地方全部变成 "B"
    console.log("第一次没点中", board)
    changeToB(board, click)
};

var getMinePosition = function (board) {
    // 输出为数组 [[1,2],[5,6]]
    var minePosition = []
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'M') {
                // 说明是雷
                minePosition.push([i, j])
            }
        }
    }
    return minePosition
}

var judgeInclude = function (minePosition, click) {
    // 检查后者数组,是否包含在前者数组中
    for (var i = 0; i < minePosition.length; i++) {
        // 注意两个数组(对象)之间不能直接比较
        if (minePosition[i][0] === click[0] && minePosition[i][1] === click[1]) {
            return true
        }
    }
    return false
}

var judgeValid = function (rowNum, columnNum, board) {
    var validRow = board.length
    var validColumn = board[0].length
    if (rowNum >= 0 && rowNum < validRow) {
        if (columnNum >= 0 && rowNum < validColumn) {
            return true
        }
    }
    return false
}

var changeToB = function (board, click) {
    // 如果第一次没点中雷
    // 那么开始检测它的四周有没有雷,有的话,就变成数字
    var minePosition = getMinePosition(board)
    var mineAround = getMineAround(board)
    // click 是一个数组,
    // flag 是击中位置附近的雷数
    for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
            // 8 个数组,分别和 minePosition 比较,如果有,那么雷的四周就变成数字
            // 首先判断这四个数组存不存在
            var flag = 0
            if (judgeValid(click[0] + i, click[1] + j, board)) {
                // 该位置有效
                // 这是用来遍历已知雷的
                // 如果检测到雷,那么该位置不变,检测它的四周,不是雷就标数字(全部标记完成之后,再考虑遇到雷的情况)
                // 是雷的话,再检测这个雷的四周,不是雷的地方加数字

                if (judgeInclude(minePosition, click)) {
                    flag = flag + 1
                    // console.log("说明附近有雷,雷的数量是", flag)
                    board[click[0]][click[1]] = flag
                    console.log('board', board)
                } else {
                    // 直接在board上进行修改
                    if (i === 0 && j === 0) {
                        board[click[0]][click[1]] = "B"
                        // 先把点击的部分, 变成B
                    } else {
                        // 把与这块相连的,而且附近没有雷的,全找出来
                        if (judgeInclude(mineAround, [click[0] + i, click[1] + j])) {
                            // 如果点击的周围一圈有雷,变成 数字
                            board[click[0] + i][click[1] + j] = 1
                        } else {
                            // 如果点击的周围一圈也没有雷,变成 "B"
                            board[click[0] + i][click[1] + j] = "B"
                            // 如果周围全成了 "B",或者数字, 就停止
                            // 重新调用
                            // changeToB(board, [click[0] + i, click[1] + j])
                        }
                    }
                }

            }
        }
    }
    console.log("board", board)
    return board
}

var getMineAround = function (board) {
    // 获取 board 中哪些位置和雷(minePosition)接近
    var minePosition = getMinePosition(board)
    var result = []
    for (var i = 0; i < minePosition.length; i++) {
        var position = minePosition[i]
        // 假设 position 是 [1, 2]
        // 那么雷周围就是
        // [0,1],[0,2],[0,3]
        // [1,1],     ,[1,3]
        // [2,1],[2,2],[2,3]
        for (var j = position[0] - 1; j <= position[0] + 1; j++) {
            for (var k = position[1] - 1; k <= position[1] + 1; k++) {
                if (judgeValid(i, j, board)) {
                    var arr = [j, k]
                    // 判断下 i,j 是不是已存在于result,或者本身就是雷
                    if (!judgeInclude(minePosition, arr)) {
                        if (!judgeInclude(result, arr)) {
                            result.push(arr)
                        }
                    }
                }
            }
        }
    }
    // console.log(result)
    return result
}

// getMineAround(
//     [
//         ['E', 'E', 'E', 'E', 'E'],
//         ['E', 'E', 'M', 'M', 'E'],
//         ['E', 'E', 'E', 'E', 'E'],
//         ['E', 'E', 'E', 'E', 'E']
//     ]
// )

updateBoard(
    [
        ['E', 'E', 'E', 'E', 'E'],
        ['E', 'E', 'M', 'M', 'E'],
        ['E', 'E', 'E', 'E', 'E'],
        ['E', 'E', 'E', 'E', 'E']
    ],
    [0, 3]
)