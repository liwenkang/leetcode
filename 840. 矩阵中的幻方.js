const log = console.log.bind(console)

/**
 * @param {number[][]} grid
 * @return {number}
 */

var isMagicSquares = function (arr) {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (arr[i][j] > 9 || arr[i][j] < 1) {
                return false
            }
        }
    }

    var result = []
    result.length = 8
    result.fill(0)
    for (var i = 0; i < 3; i++) {
        result[0] += arr[0][i]
        result[1] += arr[1][i]
        result[2] += arr[2][i]
    }
    for (var i = 0; i < 3; i++) {
        result[3] += arr[i][0]
        result[4] += arr[i][1]
        result[5] += arr[i][2]
    }
    result[6] = arr[0][0] + arr[1][1] + arr[2][2]
    result[7] = arr[0][2] + arr[1][1] + arr[2][0]
    if (Array.from(new Set(result)).length === 1) {
        // log(true)
        return true
    } else {
        // log(false)
        return false
    }
}

var numMagicSquaresInside = function (grid) {
    if (grid.length < 3) {
        return 0
    }
    if (grid.length === 3) {
        if (isMagicSquares(grid)) {
            return 1
        } else {
            return 0
        }
    }
    var result = []
    var output = []
    for (var j = 0; j < grid.length - 2; j++) {
        for (var i = 0; i < grid[0].length - 2; i++) {
            result.push(grid[j].slice(i, i + 3))
            result.push(grid[j + 1].slice(i, i + 3))
            result.push(grid[j + 2].slice(i, i + 3))
        }
    }
    // log("result", result)
    var count = 0
    for (var i = 0; i < result.length; i += 3) {
        var item = []
        item.push(result.slice(i, i + 3))
        // log(item[0])
        if (isMagicSquares(item[0])) {
            count++
        }
    }
    // log(count)
    return count
}

numMagicSquaresInside(
    [[3, 2, 9, 2, 7], [6, 1, 8, 4, 2], [7, 5, 3, 2, 7], [2, 9, 4, 9, 6], [4, 3, 8, 2, 5]]
)