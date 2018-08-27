const log = console.log.bind(console)

var generateMatrix = function (n) {
    var result = []
    for (var i = 0; i < n; i++) {
        result.push([])
    }
    var i = 0, j = 0
    var count = 1
    var flag = 0
    var width = 0
    while (count <= n * n) {
        result[i][j] = count
        if (flag === 0) {
            // 向右
            j++
            if (j === n - 1 - width) {
                flag = 1
            }
        } else if (flag === 1) {
            // 向下
            i++
            if (i === n - 1 - width) {
                flag = 2
            }
        } else if (flag === 2) {
            // 向左
            j--
            if (j === width) {
                flag = 3
            }
        } else if (flag === 3) {
            // 向上
            i--
            if (i === width+1) {
                width++
                flag = 0
            }
        }
        count++
    }
    return result
}

generateMatrix(3)