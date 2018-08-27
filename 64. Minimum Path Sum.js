const log = console.log.bind(console)

var minPathSum = function (grid) {
    var min = Infinity
    var m = grid.length - 1
    var n = grid[0].length - 1
    var find = function (x, y, history) {
        if (x > m || y > n) {
            return
        }
        if (x === m && y === n) {
            var num = history + grid[x][y]
            if (num < min) {
                min = num
            }
            return
        }
        find(x + 1, y, history + grid[x][y])
        find(x, y + 1, history + grid[x][y])
    }
    find(0, 0, 0)
    return min
}

minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
])