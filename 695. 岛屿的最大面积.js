const log = console.log.bind(console)

/**
 * @param {number[][]} grid
 * @return {number}
 */

var getRepeateOneNums = function (grid, i, j) {
    var count = 0
    var newGrid = grid.slice()
    var getCount = function (grid, i, j) {
        if (grid[i][j] === 1) {
            grid[i][j] = 0
            count++
            if (grid[i - 1] !== undefined) {
                // 上面那行存在
                if (grid[i - 1][j] === 1) {
                    getCount(grid, i - 1, j)
                }
            }
            if (grid[i] !== undefined) {
                if (grid[i][j - 1] === 1) {
                    getCount(grid, i, j - 1)
                }
                if (grid[i][j + 1] === 1) {
                    getCount(grid, i, j + 1)
                }
            }
            if (grid[i + 1] !== undefined) {
                if (grid[i + 1][j] === 1) {
                    getCount(grid, i + 1, j)
                }
            }
        }
    }
    getCount(newGrid, i, j)
    return count
}

var maxAreaOfIsland = function (grid) {
    // 从左向右
    // 从上到下
    var max = 0
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                // 开始向右,向下寻找
                var num = getRepeateOneNums(grid, i, j)
                if (num > max) {
                    max = num
                }
            }
        }
    }
    return max
}

maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
])