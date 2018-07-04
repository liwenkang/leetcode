const log = console.log.bind(console)

/**
 * @param {number[][]} grid
 * @return {number}
 * [
 *     [0,1,0,0],
 *     [1,1,1,0],
 *     [0,1,0,0],
 *     [1,1,0,0]
 * ]
 */
var islandPerimeter = function (grid) {
    var count = 0
    var length = grid[0].length
    var topArr = []
    topArr.length = length + 2
    topArr.fill(0)

    grid.unshift(topArr)
    for (var i = 1; i < grid.length; i++) {
        // 首尾 + 0
        grid[i].unshift(0)
        grid[i].push(0)
    }
    grid.push(topArr)


    // 中间的部分
    for (var i = 1; i < grid.length - 1; i++) {
        for (var j = 1; j < grid[0].length - 1; j++) {
            if (grid[i][j] === 1) {
                // 上
                if (grid[i - 1][j] === 0) {
                    count++
                }
                // 下
                if (grid[i + 1][j] === 0) {
                    count++
                }
                // 左
                if (grid[i][j - 1] === 0) {
                    // 加
                    count++
                }
                // 右
                if (grid[i][j + 1] === 0) {
                    // 加
                    count++
                }
            }
        }
    }
    return count
}

islandPerimeter(
    [[1, 0]]
)