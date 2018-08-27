const log = console.log.bind(console)

var projectionArea = function (grid) {
    var count = 0
    for (var i = 0; i < grid.length; i++) {
        var maxX = 0
        var maxY = 0
        for (var j = 0; j < grid.length; j++) {
            if (grid[i][j] >= 1) {
                // 顶部就是不看 z 轴, 只看 x, y 轴
                // 顶部的面积之和就是有方块的位置之和
                count++
            }
            if (grid[i][j] > maxX) {
                maxX = grid[i][j]
            }
            if (grid[j][i] > maxY) {
                maxY = grid[j][i]
            }
        }
        count += maxX
        count += maxY
    }
    return count
}

// projectionArea([[2]])
// projectionArea([[1,2],[3,4]])
projectionArea([[0, 1]]) //3